/*let butn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

butn.addEventListener("click",function(){
    console.log("inp.value"); //  yeah code console me print karne ke liye likhte hai.
    input.value=""; //  input khali rkhne ke liye likhte hai
});*/


// web page display js
let butn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

butn.addEventListener("click", function() {
    if (input.value.trim() === "") {
        alert("Please enter a task."); // Optional: Prevent adding empty tasks
        return; // Exit if the input is empty
    }

    let item = document.createElement("li"); // Create a new list element
    item.innerText = input.value;  // Set the text of the new list item

    let delBtn = document.createElement("button"); // Create a new delete button element
    delBtn.innerText = "Delete"; // Set button text
    delBtn.classList.add("delete"); // Add a class for styling (if needed)

    // Add an event listener to the delete button
    delBtn.addEventListener("click", function() {
        ul.removeChild(item); // Remove the list item when delete button is clicked
    });

    item.appendChild(delBtn); // Append the delete button to the list item
    ul.appendChild(item);  // Add the new list item to the ul
    input.value = "";  // Clear the input field after adding the task
});
