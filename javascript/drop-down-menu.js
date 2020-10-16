// This function triggers the drop-down menu.
function dropDownMenu() {
    var value = document.getElementById("mySelection").value;

    var horizontal_line = "<hr style='height: 1px; border-width: 0; color: gray; background-color: gray'>";

    var example1 = "";

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

    var htlc_text = "<b>" + "Hash Time Lock Contract (HTLC)" + "</b>" + ". A user " + "<i>" + "a " + "</i> " + "promises that she will either reveal a secret s" + " <sub>" + "a" + "</sub>" + " by round r" + "<sub>" + "max" + "</sub>" + ", or pay a penalty to " + " <i> " + "b" + "</i>" + ". More sophisticated contracts, e.g. gambling games, use this mechanism to let players generate random numbers in a fair way. We define the HTLC as the following contract, parameterised on the two users " + " <i> " + "a" + "</i>" + ", " + " <i>" + " b " + "</i> " + "and the hash h" + "<sub>" + "a" + "</sub>" + " = H(s" + "<sub>" + "a" + "</sub>" + ") of the secret.";
    var htlc_title = "HTLC";
    var htlc_code = "";
    var htlc_conclusion = "The contract accepts only close transactions with receiver " + "<i>" + "a " + "</i>" + "or " + "<i>" + "b" + "</i>" + ". User " + "<i>" + "a " + "</i>" + "can collect the funds in the contract only by providing the secret s" + "<sub>" + "a " + "</sub>" + "in " + "<i>" + "arg(0)" + "</i>" + ", effectively making s" + "<sub>" + "a " + "</sub>" + "public. Instead, if " + "<i>" + "a " + "</i>" + "does not reveal s" + "<sub>" + "a " + "</sub>" + ", then " + "<i>" + "b " + "</i>" + "can collect the funds after round r" + "<sub>" + "max" + "</sub>" + ".";

    // Check the correct example
    if (value === 'Example1') {
        document.getElementById("description").innerHTML = example1;
    } else if (value === 'Oracle') {
        oracle = horizontal_line + oracle_text + "<p class='vertical_space-half'></p>" + oracle_title + "<br>" + oracle_code;
        document.getElementById("description").innerHTML = oracle;
    } else if (value === 'htlc') {
        htlc = horizontal_line + htlc_text + "<p class='vertical_space-half'></p>" + htlc_title + "<br>" + htlc_code + "<br>" + htlc_conclusion;
        document.getElementById("description").innerHTML = htlc;
    }

}