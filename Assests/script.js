$(function () {
  // Add listener for click events on save button
  $('.saveBtn').click(function () {
    // Get id of time-block containing button that was clicked
    const timeBlockId = $(this).parent().attr('id');
    // Get user input from textarea in the same time-block
    const userInput = $(this).siblings('.description').val();
    // Save user input in local storage
    localStorage.setItem(timeBlockId, userInput);
  });