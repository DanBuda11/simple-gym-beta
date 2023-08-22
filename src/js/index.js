// Grab the button elements
const upperBtn = document.querySelector('#upper-btn');
const lowerBtn = document.querySelector('#lower-btn');
const coreBtn = document.querySelector('#core-btn');
const main = document.querySelector('#main');

// Remove old workout when generating new one
function resetScreen() {
  main.innerHTML = '';
}

// List of all upper body exercises with descriptions
const upperBody = [
  {
    name: 'Single arm landmine rows',
    desc: 'Barbell inside the landmine hole attached to squat rack',
  },
  {
    name: 'Landmine rows',
    desc: 'Barbell inside landmine hole attached to squat rack. Metal v-grip under bar and straddle the bar to do 2-hand rows',
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
  {
    name: 'Seated single arm cable rows',
    desc: 'Start with palms down then rotate to palms up when pull back',
  },
  {
    name: 'Single arm standing cable row',
    desc: 'Pull from the low down cables. Can keep shoulder steady or move it back when pulling the cable back',
  },
  {
    name: 'Incline dumbbell bench',
    desc: 'Incline dumbbell bench',
  },
  {
    name: 'Touching incline dumbbell bench',
    desc: 'Incline dumbbell bench but hold dumbbells together and go straight up with elbows in',
  },
  {
    name: 'Tricep rope pulldowns',
    desc: 'Use rope, bar, and/or single arm pulls with cable',
  },
  {
    name: 'Standing single arm dumbbell row',
    desc: 'Standing up, legs apart, and slightly bent forward',
  },
  {
    name: 'Lat pulldowns',
    desc: 'Reagular wide grip, reverse narrow grip and/or narrow mixed grip',
  },
  {
    name: 'Close grip lat pulldowns',
    desc: 'Super close grip using metal handle',
  },
  {
    name: 'Standing cable rows',
    desc: 'Both arms, stand with knees bent and the cable coming from the floor ones',
  },
  {
    name: 'Kettleball bends',
    desc: 'Narrow stance, holding kettleball with both hands and knees slightly bent, bend forward keeping back straight until hands are just below knees then come back up',
  },
  {
    name: 'Kettleball off balance bends',
    desc: 'Narrow stance, one foot on a 5lb plate to slightly elevate it, holding kettleball with both hands and knees slightly bent, bend forward keeping back straight until hands are just below knees then come back up',
  },
  {
    name: 'Mixed grip barbell rows',
    desc: 'Mixed grip with barbell, standard bent over row position',
  },
  {
    name: 'Reverse band press',
    desc: 'Band over TRX bar and stand with super long lunge stance and torso bent forward. Do a bench press motion by pulling down with both arms',
  },
  {
    name: 'Wide press machine throws',
    desc: 'Wide bench press machine, one arm at a time, push out with force to almost throw the weight then catch it and retract',
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
  {
    name: 'Seated leg press machine',
    desc: 'Seated leg press machine',
  },
  {
    name: 'Plank cable rows',
    desc: 'In a plank position, do single arm cable rows',
  },
  {
    name: 'Glute cable pullbacks',
    desc: "Glute cable pulls machine. It's the machine with leg straps/cables",
  },
  {
    name: 'Side leg pulls',
    desc: "Glue cable pulls machine. It's the machine with leg straps/cables. Stand perpendicular to machine and pull leg out like a side step or crabwalk",
  },
  {
    name: 'Reverse lunges',
    desc: 'Reverse lunges holding weights',
  },
  {
    name: 'Dumbbell whole body lifts',
    desc: 'Wide stance, hips down, then shoot up quickly with dumbbell in one hand using entire body',
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
  {
    name: 'Torso forward bends',
    desc: "On knees with hands crossed over chest and feet held down with something, bend forward until can't hold it anymore and push back up with arms",
  },
  {
    name: 'Plank cable ab pulls',
    desc: 'Put 1 foot in low down cables then get into plank position and pull one leg into chest, switch legs and repeat',
  },
  {
    name: 'Plank ball rolls',
    desc: 'Plank position with forearms on big rubber ball and legs into a wide V. Move forward and back using forearms and toes',
  },
  {
    name: 'Side plank ball hold',
    desc: 'Sideways plank positinon on big rubber ball with legs spread into a V. Hold position while keeping torso off ball',
  },
  {
    name: 'Plank cable rows',
    desc: 'In a plank position, do single arm cable rows',
  },
  {
    name: '',
    desc: '',
  },
  {
    name: 'Ball plank hold',
    desc: 'High plank position with feet on big rubber ball. Hold it there',
  },
  {
    name: 'Arm-leg touches',
    desc: 'Lay on mat on back with arms straight behind head and legs straight out, lift up torso and touch arm to opposite leg, switch and repeat',
  },
  {
    name: 'Plank leg crunch',
    desc: 'Plank position, bring one knee into chest then back down and alternate legs',
  },
  {
    name: 'Weight plate around the head',
    desc: 'Hold 35lb plate with hands thru plate holes, keep core engaged, bring weight fully around head then switch directions',
  },
  {
    name: 'Ab/quad/hammies bends',
    desc: 'Hold plate behind head with knees slightly bent, bend forward with back straight to engage quads and hammies, then back up to engage abs',
  },
  {
    name: 'Plank forearms',
    desc: 'Start in plank position then go down onto forearms one arm at a time then back up',
  },
  {
    name: 'Plank dumbbell rolls',
    desc: 'Plank position with a dumbbell, thread arm through the other and pull weight to other side',
  },
  {
    name: 'Plank rows',
    desc: 'Single arm dumbbell rows in a high plank position',
  },
  {
    name: 'Landmine body lifts',
    desc: 'Barbell in the landmine hole of squat rack. Start with one foot on ground, other knee on ground. Power lift up with whole body',
  },
  {
    name: 'Reverse crunches',
    desc: 'Lie on back with legs straight up in the air. Lift legs/hips. If more leverage needed, hold onto something with arms behind head',
  },
  {
    name: 'Power slams with battle ropes',
    desc: 'Power slams with battle ropes',
  },
];

// Listen for button clicks then activate workout function
upperBtn.addEventListener('click', () => {
  resetScreen();
  getWorkout(upperBody);
});

lowerBtn.addEventListener('click', () => {
  resetScreen();
  getWorkout(lowerBody);
});

coreBtn.addEventListener('click', () => {
  resetScreen();
  getWorkout(coreBody);
});

// The function that does all the work
function getWorkout(x) {
  // Create new array to store selected exercises
  const chosenExercises = [];
  // Make copy of original array (the argument variable)
  const inputArray = x;
  // Select a random exercise from the copied input array and add to the new array, while also removing that exercise from the copied array  - so it can't be used again. For loop running 5 times and use Math.random & Math.round(down) with the length of the COPIED array to choose an exercise - remember that 1st entry will be 0 not 1
  // When 5 selected map over workout array and create the HTML elements that will go on page then populate that array onto the page - bold title, regular description
  //
}

// generate new favicon package and replace everthing in HTML
// Make sure content in all head metas updated to reflect url, etc
