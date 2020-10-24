// GO back button
function goBack() {
    window.history.back();
}

function openEditor(evt, myEditor) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("center");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(myEditor).style.display = "block";
    evt.currentTarget.className += " active";
}