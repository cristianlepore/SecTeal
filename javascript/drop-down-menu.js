// This function triggers the drop-down menu.
function dropDownMenu() {
    var value = document.getElementById("mySelection").value;

    // Draw an horizontal line
    var horizontal_line = "<hr style='height: 1px; border-width: 0; color: gray; background-color: gray'>";

    // Send transaction
    var rcvTxn_text = "This is a first simple example. The scenario shows a check on the receiver address.";
    var rcvTxn_title = "<b>" + "Check receiver:" + "</b><br>";
    var rcvTxn_code = "(tx(0).rcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)" + "<br>";
    var compile_rcvTxn = "<form action='result.php' method='get'>" + "<input id='editor' type='hidden' name='contract' value='(tx(0).rcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)'>" + "</input>" + "<input class='button success' type='submit' value='Compile this example'>" + "</input>" + "</form >";

    // Close account
    var closeAccount_text = "This is a simple example. The sample describes a quite common scenario. First it checks that the transacion fee is less that 0,001 Algos, then it sends Algos to the receiver and sets the close reminder field to close the account and withdraw the deposit from it.";
    var closeAccount_title = "<b>" + "Close Account:" + "</b><br>";
    var closeAccount_code = "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).fee < int 1000)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).rcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).crcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        ")" + "<br>";
    var compile_closeAccount = "<form action='result.php' method='get'>" + "<input id='editor' type='hidden' name='contract' value='((tx(0).fee < int 1000) and ((tx(0).rcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM) and (tx(0).crcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)))'>" + "</input>" + "<input class='button success' type='submit' value='Compile this example'>" + "</input>" + "</form >";


    // Versig
    var versig_text = "The expression verisig(e1,e2,e3) verifies a signature e2 on the message obtained by concatenating the enclosing script and e1, using public key e3." + "<br>";
    var versig_title = "<b>" + "Verisig:" + "</b><br>";
    var versig_code = "verisig(arg(0),arg(1),addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)" + "<br>";
    var compile_versig = "<form action='result.php' method='get'>" + "<input id='editor' type='hidden' name='contract' value='verisig(arg(0),arg(1),addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)'>" + "</input>" + "<input class='button success' type='submit' value='Compile this example'>" + "</input>" + "</form >";


    // Oracle
    var oracle_text = "<b>" + "Oracle" + "</b>" + ". Either " + "<i>" + "a " + "</i>= ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM or " + "<i>" + "b " + "</i>" + "= FLYFLXXD3PSDFFEYAFZMJM5O5MQST63Q2KOA4MEC5PYFLSNJJBD5MQSERT can withdraw all the Algos in the contract, depending on the outcome of a certain boolean event. Such an event is certified by an oracle " + "<i>" + "o " + "</i>" + "= P64JM5O5MQST63Q2KOM5O5MQST63Q2KDOP64JM5O5QST63Q2KOY2FSNJFE by signing either the value 1 or 0. The contract only accepts a close tx. " + "<i>" + "arg(0) " + "</i>" + "is the event's outcome, " + "<i>" + "arg(1) " + "</i>" + "is " + "<i>" + "o" + "</i>" + "’s signature on (" + "<i>" + "Oracle" + "</i>" + "," + "<i>" + "arg(0)" + "</i>" + "). After round r" + "<sub>" + "max" + "</sub>" + " = 3000 , " + "<i>" + "a " + "</i>" + "can collect the money." + "<br>" + "The following " + "<i>" + "expression " + "</i>" + "encodes all constraints.";
    var oracle_title = "<b>" + "Oracle:" + "</b><br>";
    var oracle_code = "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).type = int close)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).fv > int 3000)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).crcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "or" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(arg(0) = byte base64 0)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(verisig(arg(0),arg(1),addr P64JM5O5MQST63Q2KOM5O5MQST63Q2KDOP64JM5O5QST63Q2KOY2FSNJFE) and (tx(0).crcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM))" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "or" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(arg(0) = byte base64 1)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(verisig(arg(0),arg(1),addr P64JM5O5MQST63Q2KOM5O5MQST63Q2KDOP64JM5O5QST63Q2KOY2FSNJFE) and (tx(0).crcv = addr FLYFLXXD3PSDFFEYAFZMJM5O5MQST63Q2KOA4MEC5PYFLSNJJBD5MQSERT))" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        ")" + "<br>";
    var compile_oracle = "<form action='result.php' method='get'>" + "<input id='editor' type='hidden' name='contract' value='((tx(0).type = int close) and (((tx(0).fv > int 3000) and (tx(0).crcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)) or (((arg(0) = byte base64 0) and (verisig(arg(0),arg(1),addr P64JM5O5MQST63Q2KOM5O5MQST63Q2KDOP64JM5O5QST63Q2KOY2FSNJFE) and (tx(0).crcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM))) or ((arg(0) = byte base64 1) and (verisig(arg(0),arg(1),addr P64JM5O5MQST63Q2KOM5O5MQST63Q2KDOP64JM5O5QST63Q2KOY2FSNJFE) and (tx(0).crcv = addr FLYFLXXD3PSDFFEYAFZMJM5O5MQST63Q2KOA4MEC5PYFLSNJJBD5MQSERT))))))'>" + "</input>" + "<input class='button success' type='submit' value='Compile this example'>" + "</input>" + "</form >";


    // HTLC
    var htlc_text = "<b>" + "Hash Time Lock Contract (HTLC)" + "</b>" + ". A user " + "<i>" + "a " + "</i> " + " promises that she will either reveal a secret s" + "<sub>" + "a" + "</sub>" + " by round r" + "<sub>" + "max" + "</sub>" + "= 3000, or pay a penalty to " + " <i> " + "b" + "</i>" + ". More sophisticated contracts, e.g. gambling games, use this mechanism to let players generate random numbers in a fair way. We define the HTLC as the following contract, parameterised on the two users " + " <i> " + "a" + "</i>" + ", " + " <i>" + " b " + "</i> " + "and the hash h" + "<sub>" + "a" + "</sub>" + " = H(s" + "<sub>" + "a" + "</sub>" + ") of the secret." + "<br>Where<br>" + "a = ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM" + "<br>" + "b = FLYFLXXD3PSDFFEYAFZMJM5O5MQST63Q2KOA4MEC5PYFLSNJJBD5MQSERT" + "<br>" + "H" + "<sub>" + "a" + "</sub>" + " = N2M2ODljY2Q1NWQzODUwNGZlMDBhYWEwYzMxYWQyYzY4YmFmOTA1NTc0YjM1YWQwMGRmMDMxNzY4YTZmMDFiZg" + "<br>";
    var htlc_title = "<b>" + "HTLC:" + "</b><br>";
    var htlc_code = "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).type = int close) " + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).asst = byte base64 RE9QNjRKTTVPNU1RU1Q2NEpNNU81TVFTWlpBRjVBUktPWTJGTFlGTEpNNU81TVFTVDYzUEZTTkpKRw)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).rcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(H(arg(int 0)) = byte base64 N2M2ODljY2Q1NWQzODUwNGZlMDBhYWEwYzMxYWQyYzY4YmFmOTA1NTc0YjM1YWQwMGRmMDMxNzY4YTZmMDFiZg)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "or" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).rcv = addr FLYFLXXD3PSDFFEYAFZMJM5O5MQST63Q2KOA4MEC5PYFLSNJJBD5MQSERT)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).fv > int 3000)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        ")" + "<br>";
    var htlc_conclusion = "The contract accepts only close transactions with receiver " + "<i>" + "a " + "</i>" + "or " + "<i>" + "b" + "</i>" + ". User " + "<i>" + "a " + "</i>" + "can collect the funds in the contract only by providing the secret s" + "<sub>" + "a " + "</sub>" + "in " + "<i>" + "arg(0)" + "</i>" + ", effectively making s" + "<sub>" + "a " + "</sub>" + "public. Instead, if " + "<i>" + "a " + "</i>" + "does not reveal s" + "<sub>" + "a " + "</sub>" + ", then " + "<i>" + "b " + "</i>" + "can collect the funds after round r" + "<sub>" + "max" + "</sub>" + ".";
    var compile_htlc = "<form action='result.php' method='get'>" + "<input id='editor' type='hidden' name='contract' value='((tx(0).type = int close) and ((tx(0).asst = byte base64 RE9QNjRKTTVPNU1RU1Q2NEpNNU81TVFTWlpBRjVBUktPWTJGTFlGTEpNNU81TVFTVDYzUEZTTkpKRw) and (((tx(0).rcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM) and (H(arg(int 0)) = byte base64 N2M2ODljY2Q1NWQzODUwNGZlMDBhYWEwYzMxYWQyYzY4YmFmOTA1NTc0YjM1YWQwMGRmMDMxNzY4YTZmMDFiZg)) or ((tx(0).rcv = addr FLYFLXXD3PSDFFEYAFZMJM5O5MQST63Q2KOA4MEC5PYFLSNJJBD5MQSERT) and (tx(0).fv > int 3000)))))'>" + "</input>" + "<input class='button success' type='submit' value='Compile this example'>" + "</input>" + "</form >";


    // Periodic Payment
    var pp_text = "<b>" + "Periodica payment. " + "</b>" + "We want to ensure that " + "<i>" + "a" + "</i>" + " = ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM can withdraw a fixed amount of " + "<i>" + "v" + "</i>" + " = 10000 Algos at fixed time windows of " + "<i>" + "p" + "</i>" + " = 2000 rounds. We can implement this behaviour through the following contract, which can be refilled when needed." + "<br>";
    var pp_title = "<b>" + "Periodic Payment:" + "</b><br>";
    var pp_code = "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).type = int pay)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + "((tx(0).val = int 10000)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).asst = byte base64 RE9QNjRKTTVPNU1RU1Q2NEpNNU81TVFTWlpBRjVBUktPWTJGTFlGTEpNNU81TVFTVDYzUEZTTkpKRw)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).rcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(((tx(0).fv % int 2000) = int 0) and (((tx(0).lv = tx(0).fv) + int 1000) and (tx(0).lx = int 4000)))" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        ")" + "<br>";
    var pp_conclusion = "The contract accepts only " + "<i>" + "pay" + "</i>" + " transactions of " + "<i>" + "v" + "</i>" + " Algos to receiver " + "<i>" + "a" + "</i>" + ". The conditions " + "<i>" + "tx.fv % p = 0" + "</i>" + " and " + "<i>" + "tx.lv = tx.fv + d" + "</i>" + " ensure that the contract only accepts transactions with validity interval " + "<i>" + "[k p, k p + d]" + "</i>" + ", for " + "<i>" + "k ∈ N" + "</i>" + ". The condition " + "<i>" + "tx.lx = n" + "</i>" + " ensures that at most one such transactions is accepted for each time window.";
    var compile_pp = "<form action='result.php' method='get'>" + "<input id='editor' type='hidden' name='contract' value='((tx(0).type = int pay) and ((tx(0).val = int 10000) and ((tx(0).asst = byte base64 RE9QNjRKTTVPNU1RU1Q2NEpNNU81TVFTWlpBRjVBUktPWTJGTFlGTEpNNU81TVFTVDYzUEZTTkpKRw) and ((tx(0).rcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM) and (((tx(0).fv % int 2000) = int 0) and (((tx(0).lv = tx(0).fv) + int 1000) and (tx(0).lx = int 4000)))))))'>" + "</input>" + "<input class='button success' type='submit' value='Compile this example'>" + "</input>" + "</form >";


    // Check the correct example
    if (value === 'rcvTxn') {
        rcvTxn = compile_rcvTxn + horizontal_line + rcvTxn_text + "<p class='vertical_space-half'></p>" + rcvTxn_title + "<br>" + rcvTxn_code;
        document.getElementById("description").innerHTML = rcvTxn;
    } else if (value === 'closeAccount') {
        closeAccount = compile_closeAccount + horizontal_line + closeAccount_text + "<p class='vertical_space-half'></p>" + closeAccount_title + "<br>" + closeAccount_code;
        document.getElementById("description").innerHTML = closeAccount;
    } else if (value === 'versig') {
        versig = compile_versig + horizontal_line + versig_text + "<p class='vertical_space-half'></p>" + versig_title + "<br>" + versig_code;
        document.getElementById("description").innerHTML = versig;
    } else if (value === 'Oracle') {
        oracle = compile_oracle + horizontal_line + oracle_text + "<p class='vertical_space-half'></p>" + oracle_title + "<br>" + oracle_code;
        document.getElementById("description").innerHTML = oracle;
    } else if (value === 'htlc') {
        htlc = compile_htlc + horizontal_line + htlc_text + "<p class='vertical_space-half'></p>" + htlc_title + "<br>" + htlc_code + "<br>" + htlc_conclusion;
        document.getElementById("description").innerHTML = htlc;
    } else if (value === 'pp') {
        pp = compile_pp + horizontal_line + pp_text + "<p class='vertical_space-half'></p>" + pp_title + "<br>" + pp_code + "<br>" + pp_conclusion;
        document.getElementById("description").innerHTML = pp;
    }

}