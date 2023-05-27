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
    const clickedButton = event.target;
    const activeButtons = document.querySelectorAll(".active");

    if (activeButtons.length < 3) {
        clickedButton.classList.add("active");
    }
}

// Add click event listeners to the item buttons
itemButtons.forEach((button) => {
    button.addEventListener("click", handleItemButtonClick);
});
