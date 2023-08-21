// Grab the button elements
const upperBtn = document.querySelector('#upper-btn');
const lowerBtn = document.querySelector('#lower-btn');
const coreBtn = document.querySelector('#core-btn');

// Listen for button clicks then activate workout function
upperBtn.addEventListener('click', () => {
  getWorkout('upper');
});

lowerBtn.addEventListener('click', () => {
  getWorkout('lower');
});

coreBtn.addEventListener('click', () => {
  getWorkout('core');
});

// List of all upper body exercises with descriptions
const upperBody = [
  {
    name: 'Single arm grenade rows',
    desc: 'Barbell inside the hand grenade hole attached to squat rack',
  },
  {
    name: 'Hand grenade rows',
    desc: 'Barbell inside hand grenade hole attached to squat rack. Metal v-grip under bar and straddle the bar to do 2-hand rows',
  },
  {
    name: 'TRX pulldowns',
    desc: 'Down on 1 knee using band around the post of TRX machine',
  },
  {
    name: '1 arm pulldowns',
    desc: 'Machine in front of gym next to track. Down on 1 knee',
  },
  {
    name: 'TRX pulls',
    desc: 'Lean back at an angle and pull body up, squeezing back muscles at the top',
  },
  {
    name: 'TRX W pulls',
    desc: 'Lean back at an angle and pull body up with arms going out into a W shape',
  },
  {
    name: 'Wide grip seated lat pull downs',
    desc: 'Lat pulldown machine',
  },
  {
    name: 'Close grip rope rows',
    desc: 'Using cable rope attachment and in a quasi seated stance with back straight up',
  },
  {
    name: 'Super close grip rows',
    desc: 'Cable machine coming up from the floor and bringing into belly button',
  },
  {
    name: 'Single arm bent over rows',
    desc: 'Staggered stance front/back legs, flat back, pull straight up',
  },
  {
    name: 'Single arm bent over rows 2',
    desc: 'Feet close together, back bent and flat, pull up keeping elbows in, turn dumbbell from wide at the bottom to long at the top',
  },
  {
    name: 'Cable bicep curls',
    desc: 'Cable machine pulling from the bottom position',
  },
  {
    name: 'Close grip cable rows',
    desc: 'Machine cable rows, come toward body either high or low',
  },
  {
    name: 'Lower back bends',
    desc: 'Dumbbells in each hand, knees slightly bent, back straight, bend over chest parallel to floor then back up, keeping shoulders down and back',
  },
  {
    name: 'Staggered stance dumbbell rows',
    desc: 'Staggered leg stance, dumbbell rows alternating arms',
  },
  {
    name: 'Tricep dumbbell kickbacks',
    desc: 'Bent over staggered stance similar to single arm rows, keep elbow parallel to torso, full extension forward and back',
  },
  {
    name: 'Single arm chest fly',
    desc: 'Single arm chest fly on cable machine, put ass into back of seat',
  },
  {
    name: 'Tricep pulldown',
    desc: 'Stand straight up & pull cable down full extension, keeping upper arms not moving and parallel to torso',
  },
];

// List of all lower body exercises with descriptions
const lowerBody = [
  {
    name: 'Close grip barbell deadlift',
    desc: 'Make sure to roll shoulders back at the top',
  },
  {
    name: 'Wide stance sumo deadlift',
    desc: 'Toes pointed out an an angle and can alternate over/under heand grips',
  },
  {
    name: 'Step-back lunges',
    desc: 'Can do while holding something like a 25-pound plate. Step back then back up to starting position, alternate legs',
  },
  {
    name: 'Weighted olympic jumps',
    desc: 'Using the hexagon barbell thing and starting from bottom squat position, jump up',
  },
  {
    name: 'Dumbbell jumps',
    desc: 'Jump while holding dumbbells then drop and jump without, repeat',
  },
  {
    name: 'Lunge jumps',
    desc: 'Start in lunge position and hold dumbbells, jump and switch legs in the air, repeat',
  },
  {
    name: 'Band jumps',
    desc: 'Wrap a band around a machine post and jump up, keeping tension on the band',
  },
  {
    name: 'Single leg sled push',
    desc: 'Push the sled while on 1 leg only',
  },
  {
    name: 'Hex bar deadlifts',
    desc: 'Hex bar, toes slightly out',
  },
  {
    name: 'Barbell deadlift',
    desc: 'Narrower stance, toes straight ahead',
  },
  {
    name: 'Front step dumbbell lunges',
    desc: 'Walking lunges or step back to starting position and switch legs',
  },
  {
    name: 'High plank slow mountain climbers',
    desc: 'Start and stay in high plank position and do intentionally slow mountain climbers, alternating legs',
  },
  {
    name: 'Elevated sumo squats',
    desc: 'Sumo squats on boxes for more range of motion',
  },
  {
    name: 'Band side steps',
    desc: 'Band around ankles, crab walk one way then the other',
  },
  {
    name: 'Weighted band side steps',
    desc: 'Band around ankles, holding dumbbells, step out to the side and back in, switch legs',
  },
  {
    name: 'Split squats bent',
    desc: 'Split squats with torso bent slightly forward to work glutes more',
  },
  {
    name: 'Glute machine',
    desc: 'Glute trainer machine, alternate legs',
  },
  {
    name: 'Goblet squats',
    desc: 'Goblet squats',
  },
  {
    name: 'Single arm dumbbell clean & jerk',
    desc: 'Straight up using entire body throughout the motion',
  },
  {
    name: 'Clean & jerk',
    desc: 'Barbell clean & jerk',
  },
  {
    name: 'Purple band weighted lunges',
    desc: '2 purple bands tied together then attached to something static. Put weight bag on shoulders and band around waist. Lunge step out and rotate torso toward front leg then step back up, alternate sides',
  },
  {
    name: 'Purple band weighted squats',
    desc: '2 purple bands tied together then attached to something static. Put wright bag on shouldesr and band around waist. Step forward to create resistance then do squats',
  },
  {
    name: 'Ball squats',
    desc: 'Hold medicine ball and do squats, throwing ball up and against wall at top of motion',
  },
];

const coreBody = [
  {
    name: 'Ab wheel',
    desc: 'Use ab wheel to roll out and back in, keeping back straight and extending arms out fully',
  },
  {
    name: 'High plank shoulder touches',
    desc: 'High plank position, alternate touching one hand to opposite shoulder',
  },
  {
    name: 'High plank hip touches',
    desc: 'High plank position, alternate touching one hand to opposite hip',
  },
  {
    name: 'Medicine ball drops',
    desc: 'Medicine ball pick up and drop over shoulder then repeat opposite side',
  },
  {
    name: 'Medicine ball torso toss',
    desc: 'Hold medicine ball and stand perpendicular to wall. Turn torso, not arms, to throw ball against wall and catch, alternate sides',
  },
  {
    name: 'Core leg taps',
    desc: 'Lay on mat, hold weighted ball straight above, both legs up. Alternate lowering each leg and just tapping the floor then bring leg back up',
  },
  {
    name: 'Core leg lifts',
    desc: 'Lay on mat, hold weighted ball straight above, both legs up. Bring both legs down until 45 degrees then back up',
  },
  {
    name: 'torso rotations',
    desc: 'Sit on mat with legs slightly bent and holding weighted ball, lean torso back a bit, rotate torso side to side',
  },
];

// The function that does all the work
function getWorkout(x) {
  console.log(x);
}

// Depending on which button selected, cycle thru upper or lower body arrays or core array
// Randomly grab 5 exercises, not repeating any
// remove each exercise selected from the array - clone the original array
// Add each exercises & desc to a new array
// populate contents of new array on screen as the 5 exercises & their descriptions
// Click or tap button to reset and generate new workout
// Exercises names in bold, descriptions not

// generate new favicon package and replace everthing in HTML
// Make sure content in all head metas updated to reflect url, etc
