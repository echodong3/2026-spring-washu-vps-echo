//if the time is 9am through 11:20 CST on either Tues or Thurs
//change background color of the page(the body element)to pink
//when it's not these times, change it back to lemonchitton
function updateBackground() {
  const now = new Date();

  // Get day (0 = Sunday, 2 = Tuesday, 4 = Thursday)
  const day = now.getDay();

  // Convert current time to CST explicitly
  const options = { timeZone: "America/Chicago", hour12: false, hour: "2-digit", minute: "2-digit" };
  const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
  const [hour, minute] = timeString.split(":").map(Number);

  // Convert to minutes since midnight for easy comparison
  const currentMinutes = hour * 60 + minute;
  const start = 9 * 60;        // 9:00 AM
  const end = 11 * 60 + 20;    // 11:20 AM

  // Check conditions
  const isCorrectDay = (day === 2 || day === 4); // Tues or Thurs
  const isCorrectTime = currentMinutes >= start && currentMinutes <= end;

  if (isCorrectDay && isCorrectTime) {
    document.body.dataset.classTime = "true";
  } else {
    document.body.dataset.classTime = "false";
  }
}

// Run once immediately
updateBackground();

// Optional: check every minute to keep it updated
setInterval(updateBackground, 60000);
