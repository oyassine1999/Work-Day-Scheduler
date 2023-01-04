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
    // Apply past, present, or future class to each time-block based on current hour
  $('.time-block').each(function () {
    const timeBlockId = $(this).attr('id');
    const hour = parseInt(timeBlockId.split('-')[1]);
    const currentHour = dayjs().hour();
    if (hour < currentHour) {
      this.classList.add("past");
    } else if (hour > currentHour) {
      this.classList.add("future");
    } else {
      this.classList.add("present");
    }
  });
    
  // Get any user input saved in localStorage and set textarea values accordingly
  $('.time-block').each(function () {
    const timeBlockId = $(this).attr('id');
    const userInput = localStorage.getItem(timeBlockId);
    if (userInput) {
      $(this).find('.description').val(userInput);
    }
  });

  // Display current date in header
  $('#currentDay').text(dayjs().format('dddd, MMMM D'));
});