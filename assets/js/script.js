function updateDateTime() {
  const now = new Date();

  const day = now.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const formattedDate = `${day} ${month} ${year}`;
  const formattedTime = `${hours}.${minutes}`;

  document.getElementById(
    "datetime"
  ).innerText = `${formattedDate} ${formattedTime}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();
