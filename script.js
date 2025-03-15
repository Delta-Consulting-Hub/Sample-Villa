document.getElementById("fullscreen-btn").addEventListener("click", function () {
    const modelViewer = document.querySelector("model-viewer");
    const exitButton = document.getElementById("exit-fullscreen-btn");

    if (modelViewer.requestFullscreen) {
        modelViewer.requestFullscreen();
    } else if (modelViewer.webkitRequestFullscreen) {
        modelViewer.webkitRequestFullscreen();
    } else if (modelViewer.msRequestFullscreen) {
        modelViewer.msRequestFullscreen();
    }

    exitButton.style.display = "block"; // Show the exit button
});

