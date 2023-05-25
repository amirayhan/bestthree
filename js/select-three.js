function elementText(elementId) {
    const elementTextField = document.getElementById("elementId");
    const elementText = elementTextField.innerText;
    return elementText;
}
document.getElementById("select").addEventListener("click", function (event) {
    const playerTarget = event.target.value;
});
