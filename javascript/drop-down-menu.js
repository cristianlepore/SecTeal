// This function triggers the drop-down menu.
function dropDownMenu() {
    var value = document.getElementById("mySelection").value;

    // Draw an horizontal line
    var horizontal_line = "<hr style='height: 1px; border-width: 0; color: gray; background-color: gray'>";

    // Send transaction
    var rcvTxn_text = "This is a first simple example. The scenario shows a check on the receiver address.";
    var rcvTxn_title = "<b>" + "Check receiver:" + "</b><br>";
    var rcvTxn_code = "(tx(0).rcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)" + "<br>";
    var compile_rcvTxn = "<br>" + "<form action='result.php' method='get'>" + "<input id='editor' type='hidden' name='contract' value='(tx(0).rcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)'>" + "</input>" + "<input class='button success' type='submit' value='Compile this example'>" + "</input>" + "</form >";

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
    var compile_closeAccount = "<br>" + "<form action='result.php' method='get'>" + "<input id='editor' type='hidden' name='contract' value='((tx(0).fee < int 1000) and ((tx(0).rcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM) and (tx(0).crcv = addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)))'>" + "</input>" + "<input class='button success' type='submit' value='Compile this example'>" + "</input>" + "</form >";


    // Versig
    var versig_text = "The script versig(e1,e2,e3) verifies a signature e2 on the message obtained by concatenating the enclosing script and e1, using public key e3." + "<br>";
    var versig_title = "<b>" + "Versig:" + "</b><br>";
    var versig_code = "verisig(arg(0),arg(1),addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)" + "<br>";
    var compile_versig = "<br>" + "<form action='result.php' method='get'>" + "<input id='editor' type='hidden' name='contract' value='verisig(arg(0),arg(1),addr ZZAF5ARA4MEC5PVDOP64JM5O5MQST63Q2KOY2FLYFLXXD3PFSNJJBYAFZM)'>" + "</input>" + "<input class='button success' type='submit' value='Compile this example'>" + "</input>" + "</form >";


    // Oracle
    var oracle_text = "<b>" + "Oracle" + "</b>" + ". Either " + "<i>" + "a " + "</i>" + "or " + "<i>" + "b " + "</i>" + "to withdraw all the Algos in the contract, depending on the outcome of a certain boolean event, certified by an oracle " + "<i>" + "o " + "</i>" + "by signing the value 1 or 0, respectively. The contract only accepts close txs, " + "<i>" + "arg(0) " + "</i>" + "is the event's outcome, " + "<i>" + "arg(1) " + "</i>" + "is " + "<i>" + "o" + "</i>" + "’s signature on (" + "<i>" + "Oracle" + "</i>" + "," + "<i>" + "arg(0)" + "</i>" + "). After round r" + "<sub>" + "max" + "</sub>" + "   , a  can collect the money.";
    var oracle_title = "<b>" + "Oracle:" + "</b><br>";
    var oracle_code = "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).type = int close)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).fv > int 3000)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(tx(0).crcv = addr ZZAF5ARA4MEC5PVDOY2)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "or" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(arg(0) = byte base64 P64JM5O5MQST63Q2KO)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(verisig(arg(0),arg(1),addr P64JM5O5MQST63Q2KO) and (tx(0).crcv = addr FLYFLXXD3PFSNJJBYAFZM))" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "or" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(arg(0) = byte base64 1)" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "and" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "(verisig(arg(0),arg(1),addr P64JM5O5MQST63Q2KO) and (tx(0).crcv = addr FLYFLXXD3PSDFFEYAFZM))" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        "&nbsp&nbsp&nbsp&nbsp&nbsp" + ")" + "<br>" +
        ")" + "<br>";
    var compile_oracle = "<br>" + "<form action='result.php' method='get'>" + "<input id='editor' type='hidden' name='contract' value='((tx(0).type = int close) and (((tx(0).fv > int 3000) and (tx(0).crcv = addr a)) or (((arg(0) = byte base64 0) and (verisig(arg(0),arg(1),addr o) and (tx(0).crcv = addr a))) or ((arg(0) = byte base64 1) and (verisig(arg(0),arg(1),addr o) and (tx(0).crcv = addr b))))))'>" + "</input>" + "<input class='button success' type='submit' value='Compile this example'>" + "</input>" + "</form >";


    // HTLC
    var htlc_text = "<b>" + "Hash Time Lock Contract (HTLC)" + "</b>" + ". A user " + "<i>" + "a " + "</i> " + "promises that she will either reveal a secret s" + " <sub>" + "a" + "</sub>" + " by round r" + "<sub>" + "max" + "</sub>" + ", or pay a penalty to " + " <i> " + "b" + "</i>" + ". More sophisticated contracts, e.g. gambling games, use this mechanism to let players generate random numbers in a fair way. We define the HTLC as the following contract, parameterised on the two users " + " <i> " + "a" + "</i>" + ", " + " <i>" + " b " + "</i> " + "and the hash h" + "<sub>" + "a" + "</sub>" + " = H(s" + "<sub>" + "a" + "</sub>" + ") of the secret.";
    var htlc_title = "HTLC";
    var htlc_code = "";
    var htlc_conclusion = "The contract accepts only close transactions with receiver " + "<i>" + "a " + "</i>" + "or " + "<i>" + "b" + "</i>" + ". User " + "<i>" + "a " + "</i>" + "can collect the funds in the contract only by providing the secret s" + "<sub>" + "a " + "</sub>" + "in " + "<i>" + "arg(0)" + "</i>" + ", effectively making s" + "<sub>" + "a " + "</sub>" + "public. Instead, if " + "<i>" + "a " + "</i>" + "does not reveal s" + "<sub>" + "a " + "</sub>" + ", then " + "<i>" + "b " + "</i>" + "can collect the funds after round r" + "<sub>" + "max" + "</sub>" + ".";


    // Check the correct example
    if (value === 'rcvTxn') {
        rcvTxn = horizontal_line + rcvTxn_text + "<p class='vertical_space-half'></p>" + rcvTxn_title + "<br>" + rcvTxn_code + compile_rcvTxn;
        document.getElementById("description").innerHTML = rcvTxn;
    } else if (value === 'closeAccount') {
        closeAccount = horizontal_line + closeAccount_text + "<p class='vertical_space-half'></p>" + closeAccount_title + "<br>" + closeAccount_code + compile_closeAccount;
        document.getElementById("description").innerHTML = closeAccount;
    } else if (value === 'versig') {
        versig = horizontal_line + versig_text + "<p class='vertical_space-half'></p>" + versig_title + "<br>" + versig_code + compile_versig;
        document.getElementById("description").innerHTML = versig;
    } else if (value === 'Oracle') {
        oracle = horizontal_line + oracle_text + "<p class='vertical_space-half'></p>" + oracle_title + "<br>" + oracle_code + compile_oracle;
        document.getElementById("description").innerHTML = oracle;
    } else if (value === 'htlc') {
        htlc = horizontal_line + htlc_text + "<p class='vertical_space-half'></p>" + htlc_title + "<br>" + htlc_code + "<br>" + htlc_conclusion;
        document.getElementById("description").innerHTML = htlc;
    }

}