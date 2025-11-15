//Add a button that shows an alert when clicked.

const btn = document.getElementById("Btn");

btn.addEventListener("click", function () {
  alert("Button was clicked!");
});

//Add a form that prevents submission and logs a message

const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submission prevented!");
});

//Use event delegation on a list of items to show which item was clicked

const list = document.getElementById("itemList");

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("You clicked:", e.target.textContent);
  }
});

//Create a function that logs a message after 2 seconds using setTimeout

function delayedMessage() {
  setTimeout(function () {
    console.log("This message appears after 2 seconds");
  }, 2000);
}

delayedMessage();

// Build a Promise that resolves after 1 second and logs a message

function waitOneSecond() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Promise resolved after 1 second");
    }, 1000);
  });
}

waitOneSecond().then((msg) => console.log(msg));

// Chain .then() and .catch() to handle resolved and rejected cases

function samplePromise(success) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (success) {
        resolve("Everything worked!");
      } else {
        reject("Something went wrong!");
      }
    }, 1000);
  });
}

samplePromise(true)
  .then((msg) => {
    console.log("Resolved:", msg);
  })
  .catch((err) => {
    console.log("Caught error:", err);
  });

samplePromise(false)
  .then((msg) => {
    console.log("Resolved:", msg);
  })
  .catch((err) => {
    console.log("Caught error:", err);
  });