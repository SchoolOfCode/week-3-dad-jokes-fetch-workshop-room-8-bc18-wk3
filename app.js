// Hardcoded array of joke objects
// Each joke object has a unique id
/* const jokes = [
  {
    id: "A1bC2D",
    joke: "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
  },
  {
    id: "E3fG4H",
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    id: "I5jK6L",
    joke: "Why don't skeletons fight each other? They don't have the guts.",
  },
  {
    id: "kH9pZU",
    joke: "What do you call a bear with no teeth? A gummy bear!",
  },
  {
    id: "L8nK5M",
    joke: "What do you call a fake noodle? An impasta!",
  },
  {
    id: "P9qR4N",
    joke: "Why don't eggs tell jokes? They'd crack up!",
  },
  {
    id: "T6vW2X",
    joke: "What do you call a sleeping bull? A bulldozer!",
  },
  {
    id: "Y7mB8K",
    joke: "Why did the cookie go to the doctor? Because it was feeling crumbly!",
  },
  {
    id: "Q4sJ9H",
    joke: "What do you call a bear without ears? B!",
  },
  {
    id: "G5fD3L",
    joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  },
  {
    id: "C2xZ7V",
    joke: "What do you call a pig that does karate? A pork chop!",
  },
  {
    id: "W8tN4M",
    joke: "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: "E1yH6B",
    joke: "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
  },
]; */

// Main function to retrieve and display a new joke

async function getAndDisplayNewJoke() {
  const joke = await retrieveJoke();
  //console.log(joke);
  displayJoke(joke);
}

// Function to retrieve a random joke
async function retrieveJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  const json = await response.json();
  const historyJoke = document.getElementById("joke-history-class");
  let listItem = document.createElement("li");
  listItem.innerHTML = json.joke;
  historyJoke.appendChild(listItem);
  if (historyJoke.children.length === 4) {
    const firstChild = historyJoke.firstElementChild;
    historyJoke.removeChild(firstChild);
  }
  return json;
  /* const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex]; */
}

// Function to update the DOM with the provided joke
function displayJoke(joke) {
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = joke.joke;
}

// Waits for the DOM to be fully loaded and then displays an initial joke.
document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);

// Retrieves the "new joke" button
const newJokeButton = document.getElementById("newJokeBtn");

// Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
newJokeButton.addEventListener("click", getAndDisplayNewJoke);

//keep the display joke function as it is
//keep all the event listeners the same - might need to tweak slightly to accomodate change of variables
//retrieve joke function should be a get api call instead

/* async function testAPI() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {"accept": "application/json"}
  });
  const json = await response.json();
  const joke = json.joke
  console.log(joke);
}

testAPI(); */

// create our Array
// when api is called, push joke string to array
// set History section = array

// create Night Mode Button in HTML 
// add event handler for button click
const nightModeButton = document.getElementById("nightModeBtn");
nightModeButton.addEventListener("click", toggleNightMode )


// #01172e background
// #504a65 container
// #e9ecef9f cards

// #e9ecef background
// #fff container
// #e9ecef cards

// create function to handle style change

let isNightMode = false

function toggleNightMode() {
  if (isNightMode === false) {
    nightMode();
  }
  else {
    dayMode();
  }
}

function nightMode() {
  document.body.style.backgroundColor = "#01172e";
  document.getElementsByClassName("container")[0].style.backgroundColor = "#504a65";
  document.getElementsByClassName("joke-card")[0].style.backgroundColor = "#e9ecef9f";
  document.getElementsByClassName("joke-history-card")[0].style.backgroundColor = "#e9ecef9f";
  nightModeButton.textContent = "Day Mode"
  isNightMode = true
}

function dayMode() {
  document.body.style.backgroundColor = "#e9ecef";
  document.getElementsByClassName("container")[0].style.backgroundColor = "#fff";
  document.getElementsByClassName("joke-card")[0].style.backgroundColor = "#e9ecef";
  document.getElementsByClassName("joke-history-card")[0].style.backgroundColor = "#e9ecef";
  nightModeButton.textContent = "Night Mode"
  isNightMode = false
}
// create night mode styles
// button click should toggle button to 'Day Mode' and switch back
