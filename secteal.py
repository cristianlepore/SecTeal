#! /usr/bin/env python3
#
# Copyright Andrea Bracciali 2020
#

import os
import sys
import math
import random
import re
import array
import time
import json

# ------------------------------------------------------------TESTS

# SYNTAX TREE as returned by the parser

# tree = '(exp ( (exp ( (exp tx( 0 ). type)  =  (exp (val int  close)) ))  and  (exp ( (exp ( (exp ( (exp tx( 0 ). fv)  >  (exp (val int  3000)) ))  and  (exp ( (exp tx( 0 ). crcv)  =  (exp (val addr  A)) )) ))  or  (exp ( (exp ( (exp ( (exp arg( 0) )  =  (exp (val byte-base64  0)) ))  and  (exp ( (exp versig( (exp arg( 0) ) , (exp arg( 1) ) , (exp (val addr  O)) ))  and  (exp ( (exp tx( 0 ). crcv)  =  (exp (val addr  A)) )) )) ))  or  (exp ( (exp ( (exp arg( 0) )  =  (exp (val byte-base64  1)) ))  and  (exp ( (exp versig( (exp arg( 0) ) , (exp arg( 1) ) , (exp (val addr  O)) ))  and  (exp ( (exp tx( 0 ). crcv)  =  (exp (val addr  B)) )) )) )) )) )) ))'


#  note: all constant are either   'byte base64' BYTE, or 'addr' BYTE, or 'int' INT
#  <<< I don't know whether testHTCL is correct in this respect
#  <<< I have used all of them to try them all
#  <<< addr comes form examples, e.g.
#       https://developer.algorand.org/docs/reference/teal/templates/htlc/
#       but I could not find the explantion in the opcodes page.
#       The same for int and byte, to be checked.
#
testHTLC = ['and', ['=', ['tx', '0', 'type'], ['int', 'close']],
            ['or', ['and', ['=', ['tx', '0', 'rcv'], ['addr', 'a']],
                    ['=', ['H', ['arg', '0']], ['byte base64', 'h']]
                    ],
             ['and', ['=', ['tx', '0', 'rcv'], ['addr', 'b']],
              ['>=', ['tx', '0', 'fv'], ['int', 'r']]
              ]
             ]
            ]


testORACLE = ['and',
              ['=', ['tx', '0', 'type'], ['int', 'close']],
              ['or',  ['and', ['>',   ['tx', '0', 'fv'],
                               ['int', 'rmax']
                               ],
                       ['=',   ['tx', '0', 'crcv'],
                        ['addr', 'a']
                        ]
                       ],
               ['or',  ['and', ['=', ['arg', '0'], ['byte base64', '0']],
                        ['and', ['verisig', ['arg', '0'], ['arg', '1'], ['addr', 'o']],
                         ['=', ['tx', '0', 'crcv'], ['addr', 'a']]
                         ]
                        ],
                ['and', ['=', ['arg', '0'], ['byte base64', '1']],
                 ['and', ['verisig', ['arg', '0'], ['arg', '1'], ['addr', 'o']],
                  ['=', ['tx', '0', 'crcv'], ['addr', 'b']]
                  ]
                 ]
                ]
               ]
              ]


# RETURNED BY ANTLR + listener + prefix form from ORACLE
# ['and',
# ['=', ['tx', '0', 'type'], ['int', 'close']],
# ['or', ['and', ['>', ['tx', '0', 'fv'],
# ['int', '3000']
# ],
# ['=', ['tx', '0', 'crcv'],
# ['addr', 'A']
# ]
# ],
# ['or', ['and', ['=', ['arg', '0'], ['byte-base64', '0']],
# ['and', ['versig', ['arg', '0'], ['arg', '1'], ['addr', 'O']],
# ['=', ['tx', '0', 'crcv'], ['addr', 'A']]
# ]
# ],
# ['and', ['=', ['arg', '0'], ['byte-base64', '1']],
# ['and', ['versig', ['arg', '0'], ['arg', '1'], ['addr', 'O']],
# ['=', ['tx', '0', 'crcv'], ['addr', 'B']]
# ]
# ]
# ]
# ]
# ]


# This is the string that has to be passed to the parser, in the EXPRESSION LANGUAGE
#
toParserORACLE = "((tx(0).type = int close) and (((tx(0).fv > int 3000) and (tx(0).crcv = addr A)) or (((arg(0) = byte-base64 0) and (versig(arg(0),arg(1),addr O) and (tx(0).crcv = addr A))) or ((arg(0) = byte-base64 1) and (versig(arg(0),arg(1),addr O) and (tx(0).crcv = addr B))))))"

# This is the string retuned by the parser (infix) starting from the above string toParserORACLE
#

fromParserORACLE = [[['tx', '0', 'type'], '=', ['int', 'close']], 'and', [[[['tx', '0', 'fv'], '>', ['int', '3000']], 'and', [['tx', '0', 'crcv'], '=', ['addr', 'A']]], 'or', [[[['arg', '0'], '=', ['byte base64', '0']], 'and', [['verisig', ['arg', '0'], [
    'arg', '1'], ['addr', 'O']], 'and', [['tx', '0', 'crcv'], '=', ['addr', 'A']]]], 'or', [[['arg', '0'], '=', ['byte base64', '1']], 'and', [['verisig', ['arg', '0'], ['arg', '1'], ['addr', 'O']], 'and', [['tx', '0', 'crcv'], '=', ['addr', 'B']]]]]]]


# Check if the string is syntactically correct. The function returns true if it is correct, false otherwise
def str_correct(str):
    if str == '':
        return False
    elif str[-1] != ']':
        return False
    else:
        return True


# This function returns a list splitted using the comma mark
def convertToList(a_string):
    return list(a_string.split(", "))


# This function returns the substring between two brachets (open and closed brachet)
def getSubstring(a_string):
    i = 0
    start = i
    end = i
    for letter in a_string:
        i += 1
        if letter == '[':
            start = i
        elif letter == ']':
            end = i
            return [start, end-1]
    return [start, end-1]


# This function returns the list contained all the sub-strings
def getList(myString):
    i = 0
    myList = []
    [start, end] = getSubstring(myString)
    while start != 0:
        subString = myString[start-1:end+1]
        myString = myString.replace(subString, "list_"+str(i), 1)
        subString = subString.strip('[]')
        myList.append(convertToList(subString))
        i += 1
        [start, end] = getSubstring(myString)
    return myList


# Buid in the list
def roll_out(myList):
    index = 0
    while index < len(myList):
        for n, i in enumerate(myList[index]):
            if i[0:5] == "list_":
                myList[index][n] = myList[int(i[5:])]
        index += 1
    return myList[len(myList)-1]


# Char to substitute
apostrophe = "'"
# Read from file
file = open("/var/www/html/secteal-string-java.txt", "r")
myString = file.read().strip()

# Check if the string is syntactically correct
if str_correct(myString):
    myString = myString.replace("[ ", "[")
    myString = myString.replace(" ]", "]")
    myString = myString.replace(",'", ", '")
    # Delete " ' " from the string -- This will help to process the string
    myString = myString.replace(apostrophe, "")
    # Return a list of all mygloba substrings
    myList = getList(myString)
else:
    myList = []
    myList.append("Syntax Error.")

fromParserORACLE = roll_out(myList)
a = 0
# >>> Cristian, la lista sopra e' quello che dovrebbe ricevere in input.

# ------------------------------------------------------------


# ------------------------------------------------------------ CODE BEGIN - compiler st2t()

preamble = ['\n\n#pragma version 2']        # To be prefixed

opc = {                                     # all opc here have cost 1 unless otherwise specified
    # all bitwise operators missing
    # several push op missing, eg.intcblock ...
    'and': '&&',
    'or': '||',
    'not': '!=',                         # <<<
    '=': '==',                         # <<<
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '/',
    '%': '%',
    '<': '<',
    '>': '>',
    '>=': '>=',
    '<=': '<=',
    # cost 7 (LogicSigVersion = 1) 35 (LogicSigVersion = 2)
    'H': 'sha256',
    'arg': 'arg',
    'int': 'int',
    'byte': 'byte',
    'snd': 'Sender',
    'rcv': 'Receiver',
    'crcv': 'CloseReminderTo',
    'val': 'Amount',
    'fv': 'FirstValid',
    'lv': 'LastValid',
    'lx': 'Lease',
    'type': 'Type',
    'asst': 'Asset',
    'asstval': 'AssetAmount',
    'asstsnd': 'AssetSender',
    'asstrcv': 'AssetReceiver',
    'casstrcv': 'AssetCloseTo ',
    'fee': 'Fee',
    'note': 'Note'
}


# ------------------------------------------------------------ st2t() --- COMPILER

# Assuming the list steal is sytactically well-formed -- see examples above -- it compiles it into teal code
#
def st2t(steal):

    # Fresh index postfixed to new labels
    label = 0

    # WHAT EXPECTED FROM PARSER [h, arg0, ..., argN]
    h = steal[0]

    if (h == 'and') or (h == 'or') or (h == 'not') or\
        (h == '=') or (h == '+') or (h == '-') or (h == '*') or (h == '/') or (h == '%') or\
            (h == '<') or (h == '>') or (h == '>=') or (h == '<='):
        return st2t(steal[1]) + st2t(steal[2]) + [opc[h]]

    elif h == 'not':                                           # [ not exp]
        return st2t(steal[1]) + [opc[h]]

    elif h == 'tx':                                            # [tx n f]
        return ['gtxn ' + str(steal[1]) + ' ' + opc[steal[2]]]

    elif h == 'txlen':
        return ['global ' + 'GroupSize']

    elif h == 'txid':                                          # [txid n]
        return ['gtxn ' + str(steal[1]) + ' TxID']

    elif h == 'txpos':
        return ['txn GroupIndex']

    elif h == 'arg':                                            # [arg n]
        # << NOT SURE HERE ! what is the difference in teal between
        return ['arg ' + str(steal[1])]
        # arg n and txn ApplicationArgs?
        # is arg n ok?

    elif h == 'arglen':
        return ['txn NumAppArgs']

    elif h == 'H':                                              # [H, [exp]]
        return st2t(steal[1]) + ['sha256']

    # [verisig, [data], [sig], [pubkey]]  -- cost 1900
    elif h == 'verisig':
        # with pubkey top in stack
        # << NOT SURE HERE
        # assumption: parameters are pushed with byte base64 data
        # TO BE CHECKED !
        return st2t(steal[1])+st2t(steal[2])+st2t(steal[3])+['ed25519verify']

    # [byte base64 [INT]]
    elif h == 'byte base64':
        return ['byte base64 '+str(steal[1])]

    elif h == 'int':                                            # [int [INT]]
        return ['int '+str(steal[1])]

    elif h == 'addr':                                           # [addr [INT]]
        return ['addr '+str(steal[1])]

# <<< How to treat values is not well defined. Quite often you need to express specific types of values.
#   As an example see at the end of https://developer.algorand.org/docs/reference/teal/templates/delegate_keyreg/
#   the specification of the input to verisig. This is not expressed/expressable in STEAL.
#
#   For the moment we use the above three "basic value kinds" and will adapt as needed. These have to be
#   expressable in STEAL.

    elif h == 'ROUND':                                          # not in steal but may be useful
        return ['global Round']

    elif steal == 'Syntax Error.':
        return ['SYNTAX ERROR IN YOUR STRING']
    else:
        return ['ERROR IN PARSING THE STRING']


# ------------------------------------------------------------ Support functions
#
# Grammar quick reference (top level and APPROXIMATE --
# see steal.g4 for the actual grammar- different!)
##
# exp
# :
# [ exp op exp ] |     3
# [ not exp ]    |     2
# [ tx n  fv]    |     3
# [ txlen]       |
# [ txid n ]     |
# [ txpos]       |
# [ arg n ]      |
# [ arglen ]     |
# [H exp ]       |
# [verisig exp exp exp ] |
# [ val ]
##

# from infix (the list returned by the parser/listener)
# to prefix (the list used by the compiler)
#
# only [exp op exp] needs to be prefixed
def inf2pre(l):

    if len(l) == 0:
        return []
    elif (len(l) == 3) and (l[0] != 'tx'):              # this is [exp, op, exp]
        return [l[1], inf2pre(l[0]), inf2pre(l[2])]
    else:
        return l


# Pretty print
#
def lprint(l):
    if len(l) == 0:
        return
    else:
        print(l[0])
        lprint(l[1:])


# Prepare the result to be shown on screen
def print_string(l):
    str = ""
    for i in l:
        str += i + "<br>"
    return str

# ------------------------------------------------------------
# ------------------------------------------------------------ MAIN

# lprint(['\n\nHTCL                  <<<\n']+preamble + st2t(testHTLC))
# lprint(['\n\nORACLE                  <<<\n']+preamble + st2t(testORACLE))

# lprint(['\n\nORACLE FROM PARSER      <<<\n'] +
#      preamble + st2t(inf2pre(fromParserORACLE)))


# Print String on screen
print(print_string(st2t(inf2pre(fromParserORACLE))))


# ------------------------------------------------------------LEFT OVERS

##
# NO ACTUALLY NEEDED!!!
###
# def fix_labels(teal):
##
# if len(teal) == 0:
# return []
##
# elif True:
# h = teal[0]
# t = teal[1:]
##
# if h == 'MERGE LABEL':
##
# h is the LOOK AHEAD token. Then t[0] is the "look-ahead" label
##            #
# there are two cases:
##            #
# 1) t[0] is the last element of teal => t[0] becomes 'label TRUE'
##
# if t[1:] == [] :
# return [t[0]+' return']
##
# 2) t[0] must become the label of the first element of t[1:], i.e.
# t[0] and t[1] are fused together
# else :
# return [t[0]+' '+t[1]] + fix_labels(t[2:])
##
# else :
# return [h] + fix_labels(t)
##
