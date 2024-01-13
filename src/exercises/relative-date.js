/*
 * Write a function that will take a date and compare with today date and return text:
 * - Today: same year, same month, same date
 * - Yesterday: same year, same month, date = today - 1
 * - This week: same year, same month, today - 7 < date < today - 1
 * - Last week: same year, same month, date = today - 7
 * - This month: same year, same month, date < today - 7
 * - Last month: same year, month = current month - 1
 * - This year: same year
 * - last year: year = current year - 1
 * - Long time ago: everything else
 *
 * Lastly, please write a unit test for calculateRelativeDate function
 * */

const calculateRelativeDate = (inputDate) => {
  var today = new Date();
  var input = new Date(inputDate); //converting to date object
  var diff = today.getDate() - input.getDate();

  switch (true) {
    case diff === 0 &&
      today.getMonth() === input.getMonth() &&
      today.getFullYear() === input.getFullYear():
      return "Today";
    case diff === 1 &&
      today.getMonth() === input.getMonth() &&
      today.getFullYear() === input.getFullYear():
      return "Yesterday";
    case diff > 1 &&
      diff <= 7 &&
      today.getMonth() === input.getMonth() &&
      today.getFullYear() === input.getFullYear():
      return "This week";
    case diff > 7 &&
      today.getMonth() === input.getMonth() &&
      today.getFullYear() === input.getFullYear():
      return "This month";
    case today.getMonth() - input.getMonth() === 1 &&
      today.getFullYear() === input.getFullYear():
      return "Last month";
    case today.getMonth() - input.getMonth() > 1 &&
      today.getFullYear() === input.getFullYear():
      return "This year";
    case today.getFullYear() - input.getFullYear() === 1:
      return "Last year";
    case today.getFullYear() - input.getFullYear() > 1:
      return "Long time ago";
    default:
      return "Invalid Selection: Select current or past dates";
  }
};

const View = {
  init: () => {
    document
      .getElementById("relative-date-btn")
      .addEventListener("click", () => {
        const msgElement = document.getElementById("relative-date-msg");
        const inputDateElem = document.getElementById("relative-date-input");
        msgElement.textContent = calculateRelativeDate(inputDateElem.value);
      });
  },
};

document.addEventListener("DOMContentLoaded", View.init);
export { calculateRelativeDate };
