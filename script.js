let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningElement = document.getElementById("warningMessage");
let defaultImageWidth = 200;
let maxWidth = 300;
let minWidth = 100;
let maxWarningMessage = "Too big.Decrease the size of image";
let minWarningMessage = "Can't visible.Increase the size of image";

imageElement.style.width = defaultImageWidth + "px";
imageWidthElement.textContent = defaultImageWidth + "px";

function decreaseSize() {
    if (defaultImageWidth <= minWidth) {
        warningElement.textContent = minWarningMessage;
    } else {

        defaultImageWidth = defaultImageWidth - 5;
        let updatedWidth = defaultImageWidth + "px";
        warningElement.textContent = "";
        imageElement.style.width = updatedWidth;
        imageWidthElement.textContent = updatedWidth;

    }
}

function increaseSize() {
    if (defaultImageWidth >= maxWidth) {
        warningElement.textContent = maxWarningMessage;
    } else {

        defaultImageWidth = defaultImageWidth + 5;
        let updatedWidth = defaultImageWidth + "px";
        warningElement.textContent = "";
        imageElement.style.width = updatedWidth;
        imageWidthElement.textContent = updatedWidth;
    }
}
