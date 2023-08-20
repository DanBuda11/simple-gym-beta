// Grab the button elements
const upperBtn = document.querySelector('#upper-btn');
const lowerBtn = document.querySelector('#lower-btn');

// Listen for button clicks then activate workout function
upperBtn.addEventListener('click', () => {
  getWorkout('upper');
});

lowerBtn.addEventListener('click', () => {
  getWorkout('lower');
});

// List of all upper body exercises with descriptions
const upperBody = [
  {
    name: 'bench',
    desc: 'bench press',
  },
  {
    name: 'military press',
    desc: 'yep it is a military press',
  },
];

// List of all lower body exercises with descriptions
const lowerBody = [
  {
    name: 'squat',
    desc: 'move your legs up and down',
  },
  {
    name: 'lunge',
    desc: 'these suck',
  },
];

// The function that does all the work
function getWorkout(x) {
  console.log(x);
}

// Depending on which button selected, cycle thru upper or lower body arrays
// Randomly grab 5 exercises, not repeating any
// remove each exercise selected from the array - clone the original array
// Add each exercises & desc to a new array
// populate contents of new array on screen as the 5 exercises & their descriptions
// Click or tap button to reset and generate new workout
// Exercises names in bold, descriptions not

// generate new favicon package and replace everthing in HTML
// Make sure content in all head metas updated to reflect url, etc
