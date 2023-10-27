//your JS code here. If required.
	const removeColorButton = document.getElementById('removeColorButton');
	const colorSelect = document.getElementById("colorSelect");
	// Add a click event listener to the remove button
removeColorButton.addEventListener('click', () => {
  // Get the selected option from the select element
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];
  
  // Remove the selected option from the select element
  colorSelect.removeChild(selectedOption);
});
	