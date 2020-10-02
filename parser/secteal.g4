grammar secteal;

prog: (expr)*;

expr:
	val
	| expr op expr
	| '(' expr ')'
	| 'not' expr
	| 'not(' expr ')'
	| 'H(' expr ')'
	| 'versig(' expr ',' expr ',' expr ')';

val:
	'byte-base64 ' VALUE
	| 'int ' VALUE
	| 'addr ' VALUE
	| 'addr(' VALUE
	| 'tx(' VALUE ').' FIELD
	| 'txid(' VALUE ')'
	| 'arg(' VALUE ')'
	| 'txlen'
	| 'txpos'
	| 'arglen';

op:
	'+'
	| '−'
	| '<'
	| '≤'
	| '='
	| '≥'
	| '>'
	| '∗'
	| '/'
	| '%'
	| 'and'
	| 'or';

FIELD:
	'snd'
	| 'rcv'
	| 'crcv'
	| 'val'
	| 'fv'
	| 'lv'
	| 'lx'
	| 'type'
	| 'asst'
	| 'asstval'
	| 'asstsnd'
	| 'asstrcv'
	| 'casstrcv'
	| 'fee'
	| 'note';

VALUE: [A-Z0-9]+ | [a-z0-9]+ | [A-Z]+ | [a-z] | [0-9]+;
