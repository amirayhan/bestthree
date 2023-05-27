// Get all the item buttons
const itemButtons = document.querySelectorAll("#select");

// Function to handle the click event for item buttons
function handleItemButtonClick(event) {
    // Get Player List's Parent
    const playerList = document.getElementById("selected_palyer");

    // Get the parent item element
    const itemElement = event.target.closest(".player_items");

    // Get the h1 heading within the item element
    const heading = itemElement.querySelector("h3");

    // Get the text content of the h1 heading
    const headingText = heading.innerText;

    // Create a new li element
    const listItem = document.createElement("li");

    // Create a new span element
    const spanElement = document.createElement("span");

    // Set the id attribute of the span element
    spanElement.id = "playerName";

    // Append the span element to the li element
    listItem.appendChild(spanElement);

    // Add heading text in span tag
    spanElement.textContent = headingText;

    // Not to add more than 3 Players
    const liLength = playerList.getElementsByTagName("li").length;
    if (liLength < 3) {
        // Append the list item to the cart list
        playerList.appendChild(listItem);
    }

    // player btn active
    const clickedButton = event.target;

    // Get active classes btn
    const activeButtons = document.querySelectorAll(".active");

    // Not to add more than 3 active classes
    if (activeButtons.length < 3) {
        clickedButton.classList.add("active");
    }
}
// Add click event listeners to the item buttons
itemButtons.forEach((button) => {
    button.addEventListener("click", handleItemButtonClick);
});

// To Get Input Ammount with Intiger Type
function inputAmount(inputId) {
    const inputAmmountField = document.getElementById(inputId);
    const ammountfieldString = inputAmmountField.value;
    const ammount = parseInt(ammountfieldString);

    return ammount;
}

// To Get Element Ammount with Intiger Type
function elementAmmount(elementId) {
    const elementAmmountField = document.getElementById(elementId);
    const elementAmmountFieldString = elementAmmountField.innerText;
    const ammountOfElement = parseInt(elementAmmountFieldString);

    return ammountOfElement;
}

// Get total ammount of three palyers expcences
document.getElementById("budget-calculate").addEventListener("click", function () {
    // Get Per Player Ammount
    const perPlayerAmmount = inputAmount("per_player");

    // Get Player List
    const playerList = document.getElementById("selected_palyer");

    // Get Player List Length
    const liLength = playerList.getElementsByTagName("li").length;

    // Total Player Expences
    const playerExpences = perPlayerAmmount * liLength;

    // Get Player Expences Display
    const playerExpencesDisplay = document.getElementById("palyer_expences_display");

    // Add total player expences in player Expence Display
    playerExpencesDisplay.innerText = playerExpences;
});

// Get total expences
document.getElementById("total-calculate").addEventListener("click", function () {
    // total player expences
    const totalPlayerExpences = elementAmmount("palyer_expences_display");

    // Get Manager Ammount
    const managerAmmount = inputAmount("manager");

    // Get Coach Ammount
    const coachAmmount = inputAmount("coach");

    // Get total expences ammount
    const totalExpencesAmmount = totalPlayerExpences + managerAmmount + coachAmmount;

    const totalExpencesDisplay = document.getElementById("total_expences_display");

    totalExpencesDisplay.innerText = totalExpencesAmmount;
});
