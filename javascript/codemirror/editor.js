function displayEditor() {
    var editor = CodeMirror.fromTextArea(document.getElementById('codemirror_editor'),
        {
            mode: "x-c++src",
            theme: "eclipse",
            lineNumbers: true,
        }
    );
}

window.onload = displayEditor;
