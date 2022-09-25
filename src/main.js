const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');

terminalInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        write();
        e.preventDefault();
    }
});

function write() {
    var text = getText();
    renderPromt(text);

    switch (text) {
        case 'help':
            renderText(help);
            break;
        case 'about':
            renderText(about);
            break;
        case 'github':
            renderText(github);
            break;
        case 'clear':
            clear();
            break;
        default:
            renderText(['<br>', 'Command not found: ', text, '<br>']);
            break;
    }

    terminalInput.value = '';
}

function getText() {
    return terminalInput.value;
}

function renderPromt(text) {
    var promt = document.createElement('span');
    promt.innerHTML = 'joonatan@home~$ ' + text + '<br>';
    terminalOutput.appendChild(promt);
}

function renderText(text) {
    text.forEach((line) => {
        var command = document.createElement('span');
        command.innerHTML = line;
        terminalOutput.appendChild(command);
    });
}

function clear() {
    terminalOutput.innerHTML = '';
}
