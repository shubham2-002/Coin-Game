function startScreen() {

    let root = document.createElement("div");
    root.setAttribute("class", "startdiv");
    document.body.appendChild(root);

    let button = document.createElement("button");
    button.setAttribute("class", "PlayButton");
    button.innerHTML = "CliCk Here to Start";
    root.appendChild(button);

    button.onclick = function () {
        document.body.removeChild(root);
        GamePlay();
    }
}