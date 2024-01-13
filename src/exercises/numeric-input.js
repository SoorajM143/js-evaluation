/*
 * Numeric Input Component
 *   HTML (initial state): <input type="text" class="c-numeric-input" />
 *   Requirement:
 *   - should only accept numeric value only such as: 1, 1.2, -5, or 1000
 *   - if user enters leading zero, or .  when user moves focus away from the input, it should
 *     change to correct format:
 *       .1 ==> 0.1 and 01 => 1
 *   - if user enter invalid character/value, HTML should change to this
 *       <input type="text" class="c-numeric-input c-numeric-input--error" />
 *       <span class="c-numeric-input__error-msg">invalid input</span>
 *   - if user enter valid value and move focus away from the input HTML should change to this:
 *       <input type="text" class="c-numeric-input c-numeric-input--valid" />
 *   - if user focus on the input or user clear value from the input,
 *     HTML should return to initial stage
 *
 * Lastly, please add some css for c-numeric-input--error and c-numeric-input--valid to show
 * red or green border to the input
 * */

const NumericInput = {
  onFocusOut: (e) => {
    //checking for empty string,if not an empty string converting it to number
    var val = e.target.value === "" ? "" : +e.target.value;

    if (!isNaN(val) && val !== "") {
      //for valid input
      e.target.value = val;
      document.querySelectorAll(".c-numeric-input").forEach((elem) => {
        elem.classList.add("c-numeric-input--valid");
        elem.classList.remove("c-numeric-input--error");
      });
      document.querySelector(".c-numeric-input__error-msg").remove();
    } else if (isNaN(val)) {
      // for invalid input
      document.querySelectorAll(".c-numeric-input").forEach((elem) => {
        elem.classList.add("c-numeric-input--error");
        elem.classList.remove("c-numeric-input--valid");
        if (document.querySelector(".c-numeric-input__error-msg") === null) {  //checking if invalid message already exists in DOM
          const p = document.createElement("span");
          const node = document.createTextNode("Invalid Input");
          p.appendChild(node);
          elem.insertAdjacentElement("afterend", p);
          p.classList.add("c-numeric-input__error-msg");
        }
      });
    } else {
      //for default view
      document.querySelectorAll(".c-numeric-input").forEach((elem) => {
        elem.classList.remove("c-numeric-input--error");
        elem.classList.remove("c-numeric-input--valid");
      });
      document.querySelector(".c-numeric-input__error-msg").remove();
    }
  },
  init: () => {
    document.querySelectorAll(".c-numeric-input").forEach((elem) => {
      elem.addEventListener("focus", NumericInput.onFormFocus);
      elem.addEventListener("focusout", NumericInput.onFocusOut);
    });
  },
};
document.addEventListener("DOMContentLoaded", NumericInput.init);
