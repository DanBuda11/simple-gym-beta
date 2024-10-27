// Grab the button & display elements
const chestBtn = document.querySelector('#chest-btn');
const backBtn = document.querySelector('#back-btn');
const legBtn = document.querySelector('#leg-btn');
const coreBtn = document.querySelector('#core-btn');
const warmupBtn = document.querySelector('#warmup-btn');
const arrow = document.querySelector('.warmup-arrow');
const warmupList = document.querySelector('.warmup-list');
const main = document.querySelector('#main');

// Remove old workout when generating new one
function resetScreen() {
  main.innerHTML = '';
}

// List of all chest & tri exercises with descriptions
const chest = [
  {
    name: 'Skull crushers',
    desc: 'Lying on bench, holding end of dumbbell with both hands and arms above head, bring arms back behind head and stretch down as far back/down as is comfortable then bring arms back up over head',
  },
  {
    name: 'Bench press',
    desc: 'Bench press with either barbell or dumbbells',
  },
  {
    name: 'Decline bench press',
    desc: 'Decline bench press with either barbell or dumbbells',
  },
  {
    name: 'Tricep dumbbell kickbacks',
    desc: 'Bent over staggered stance similar to single arm rows, keep elbow parallel to torso, full extension forward and back',
  },
  {
    name: 'Battle rope slams',
    desc: '2-hand battle rope full body slams',
  },
  {
    name: 'Battle rope alternating slams',
    desc: 'Alternate slamming battle ropes with each arm',
  },
  {
    name: 'Tricep pulldown',
    desc: 'Stand straight up & pull cable down full extension, keeping upper arms not moving and parallel to torso',
  },
  {
    name: 'Tricep rope pulldowns',
    desc: 'Use rope, bar, and/or single arm pulls with cable',
  },
  {
    name: 'Single arm chest fly',
    desc: 'Single arm chest fly on cable machine, put ass into back of seat',
  },
  {
    name: 'Incline bench',
    desc: 'Incline bench using barbell or dumbbells',
  },
  {
    name: 'Touching incline dumbbell bench',
    desc: 'Incline dumbbell bench but hold dumbbells together and go straight up with elbows in',
  },
  {
    name: 'Resistance pushups',
    desc: 'Pushups with a band around hands and wrapping around back',
  },
  {
    name: 'Reverse band press',
    desc: 'Band over TRX bar and stand with super long lunge stance and torso bent forward. Do a bench press motion by pulling down with both arms',
  },
  {
    name: 'Cable chest flys',
    desc: 'Long lunge stance, using cable machine, both arm chest flys. Alternative is to bend forward so the forward pulling motion is down instead of straight out',
  },
  {
    name: 'Single arm chest punches',
    desc: 'Long lunge stance, using cable machine, pull cable forward almost like punching straight ahead',
  },
  {
    name: 'Alternate arm cable chest pulls',
    desc: 'Stand with tailbone against cushion of seated cable pull machine and alternate pulling arms across body',
  },
  {
    name: 'Incline bench drop sets - elbows in',
    desc: 'Start with higher weight then lower each set, single arm or both at same time, keep elbows tucked in for the whole motion',
  },
  {
    name: 'Incline bench drop sets',
    desc: 'Start with higher weight then lower each set, single arm or both at same time, regular incline press motion',
  },
];

// List of all back, bicep, shoulder exercises with descriptions
const back = [
  {
    name: 'Landmine rows',
    desc: 'Barbell inside landmine hole attached to squat rack. Metal v-grip under bar and straddle the bar to do 2-hand rows',
  },
  {
    name: 'Front delt raises',
    desc: 'Using dumbbells, stand straight up with legs at hip width. With palms facing forward, alternate lifting each arm straight up & forward until parallel with the floor',
  },
  {
    name: '',
    desc: '',
  },
  {
    name: 'Staggered stance dumbbell rows',
    desc: 'Staggered leg stance, dumbbell rows alternating arms',
  },
  {
    name: 'Rotating dumbbell rows',
    desc: 'Narrow stance, holding dumbbells down with ends facing each other, raise arms up to do a row with dumbbells, rotating them 90 degrees at the top',
  },
  {
    name: 'Wide stance barbell rows',
    desc: 'Standing with a wide stance, do rows using a wide (hands past the hips) overhand or underhand grip',
  },
  {
    name: 'Narrow stance overhand barbell rows',
    desc: 'Standing with a narrow stance and a narrow grip, do rows using an overhand grip',
  },
  {
    name: 'Lat pulldowns',
    desc: 'Regular wide grip, reverse narrow grip and/or narrow mixed grip',
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
    name: 'Single arm landmine rows',
    desc: 'Barbell inside the landmine hole attached to squat rack',
  },
  {
    name: 'Split stance dumbbell bicep curls',
    desc: 'With the toes of one foot lining up with the heel of the other, to help keep chest forward and not cheat by swinging, do bicep curls',
  },
  {
    name: 'Split stance dumbbell hammer curls',
    desc: 'With the toes of one foot lining up with the heel of the other, to help keep chest forward and not cheat by swinging, do hammer curls',
  },
  {
    name: 'Dumbbell shoulder press',
    desc: 'Single arm, waist-wide stance, other arm straight out, lift dumbbell straight up keeping forearm perpendicular to floor and come down to arm at 90 degree angle to body',
  },
  {
    name: 'Barbell shoulder press',
    desc: 'Hold barbell in front of top of chest and lift straight up with full extension',
  },
  {
    name: 'Seated rotating rows',
    desc: 'Seated, single or double arm rows, starting with palm down then rotate to palm up when pulling back, squeezing back muscles.',
  },
  {
    name: 'Landmine perpendicular rows',
    desc: 'Standing perpendicular to landmine bar, grab end of bar with one hand with top of hand facing front. Bend slightly and do single arm rows',
  },
  {
    name: 'TRX pulldowns',
    desc: 'Down on 1 knee using band around the post of TRX machine',
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
    name: 'Close grip rows',
    desc: 'Using V or rope attachment and in a quasi seated stance with back straight up',
  },
  {
    name: 'Super close grip rows',
    desc: 'Cable machine coming up from the floor and bringing into belly button',
  },
  {
    name: 'Single arm bent over rows',
    desc: 'Feet close together, back bent and flat, pull up keeping elbows in, turn dumbbell from wide at the bottom to long at the top',
  },
  {
    name: 'Cable bicep curls',
    desc: 'Cable machine pulling from the bottom position',
  },
  {
    name: 'TRX bicep curls',
    desc: 'Palms up, use TRX rope to curl as if trying to put knuckles on top of head',
  },
  {
    name: 'Single arm knee pulldowns',
    desc: 'On one knee, single arm cable pulldowns coming down close to torso',
  },
  {
    name: 'Standing lat pulldowns',
    desc: 'In same position as a cable tri pulldown with a bar attachment, but keep arms completely straight as you come down to activate lats',
  },
  {
    name: 'Standing lat rope pulldowns',
    desc: 'In same position as a cable tri pulldown with a rope attachment, but keep arms completely straight as you come down to activate lats',
  },
  {
    name: 'Single arm standing cable row',
    desc: 'Pull from the low down cables. Can keep shoulder steady or move it back when pulling the cable back',
  },
  {
    name: 'Pyramid back squeeze',
    desc: 'Lay on back on flat bench with band around wrists and hands together all the way up, come down slowly widening arms apart and squeeze back muscles at the bottom then go back up, basically a pyramid up and down',
  },

  {
    name: 'Incline Y Dumbbell Back Press',
    desc: 'On a slightly inclined bench with chest facing down, hold dumbbells with thumbs over their ends, squeeze tenderloins then lift arms straight up into a Y shape, release tension at bottom of motion then go again',
  },
  {
    name: 'Incline back flys',
    desc: 'On a slightly inclined bench with chest facing down, back dumbbell flys',
  },
  {
    name: 'Lower back bends',
    desc: 'Dumbbells in each hand, knees slightly bent, back straight, bend over chest parallel to floor then back up, keeping shoulders down and back',
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
    name: 'Battle rope lateral crosses',
    desc: 'Hold battle ropes and swing side to side crossing ropes over/under each other',
  },
  {
    name: 'Kettlebell lat raises',
    desc: 'Holding kettlebell, do lat raises making sure elbows up',
  },
];

// List of all leg exercises with descriptions
const legs = [
  {
    name: 'Close grip barbell deadlift',
    desc: 'Make sure to roll shoulders back at the top',
  },
  {
    name: 'Lateral landmine lunges',
    desc: 'Stand directly in front of landmine bar and grip with both hands, holding bar at chest level, lunge out to one side then return leg to center, repeat with opposite leg',
  },
  {
    name: 'Landmine reverse lunges',
    desc: 'Stand directly in front of landmine bar, holding with both hands at chest level. Reverse lunges from this position',
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
    name: 'Lunge jumps',
    desc: 'Start in lunge position and hold dumbbells, jump and switch legs in the air, repeat',
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
    name: 'Split squats bent',
    desc: 'Split squats with torso bent slightly forward to work glutes more',
  },
  {
    name: 'Goblet squats',
    desc: 'Goblet squats',
  },
  {
    name: 'Ball squats',
    desc: 'Hold medicine ball and do squats, throwing ball up and against wall at top of motion',
  },
  {
    name: 'Kettlebell calf raises',
    desc: 'With kettlebell held on one shoulder and leg under kettlebell off the ground, hold onto something with opposite arm and do single-foot calf raises',
  },
  {
    name: 'Kettlebell swings',
    desc: 'Holding kettlebell between legs, swing forward and up focusing on hip flexors for power',
  },
  {
    name: 'Kettlebell swings on boxes',
    desc: 'With feet apart and up on boxes, hold kettlebell with both hands and drive up in squat position, keeping hips low on the downward motion',
  },
  {
    name: 'Kettlebell box lunges',
    desc: 'With a kettlebell resting on one shoulder and the opposite side foot forward and on a box, do back lunges in place then switch legs',
  },
  {
    name: 'Band jumps',
    desc: 'Wrap a band around a machine post and jump up, keeping tension on the band',
  },
  {
    name: 'Dumbbell jumps',
    desc: 'Jump while holding dumbbells then drop and jump without, repeat',
  },
  {
    name: 'High plank slow mountain climbers',
    desc: 'Start and stay in high plank position and do intentionally slow mountain climbers, alternating legs',
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
    name: 'Single arm dumbbell clean & jerk',
    desc: 'Straight up using entire body throughout the motion',
  },
  {
    name: 'Clean & jerk',
    desc: 'Barbell clean & jerk',
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
  {
    name: 'Box step ups',
    desc: 'Step up on box, alternating legs, with or without holding dumbbells in one or both hands',
  },
  {
    name: 'Landmine bar squats',
    desc: 'With bar in landmine, hold with both hands, go down into squat position then all the way up on toes',
  },
  {
    name: 'Resistance front lunges',
    desc: 'Resistance band around waist, holding dumbbell or dumbbells, lunge forward then back up into starting position',
  },
  {
    name: 'TRX kettlebell lunges',
    desc: 'Holding TRX ropes with one hand and kettleball in the other, do lunges/split squats',
  },
  {
    name: 'Alternate box calf raises',
    desc: 'Stand on box then go up with both feet but then back down with only one foot, alternate feet',
  },
  {
    name: 'Barbell calf raises',
    desc: 'Using barbell on shoulders in squat box, do calf raises',
  },
  {
    name: 'Back lunges on box',
    desc: 'Holding dumbbells and with 1 foot up on a box and the other foot back, do downward lunges then switch front/back feet',
  },
];

// List of all core exercises with descriptions
const core = [
  {
    name: 'Ab wheel',
    desc: 'Use ab wheel to roll out and back in, keeping back straight and extending arms out fully',
  },
  {
    name: 'Big ball ab rolls',
    desc: 'With forearms on a big ball and legs in a wide stance, roll slightly forward and back on ball with abs, but not legs, keeping feet planted in place',
  },
  {
    name: 'Ball slams on 1 knee',
    desc: 'Down on 1 knee, with forward leg slightly out at an angle, do power ball slams',
  },
  {
    name: '90 degree leg lowers',
    desc: 'Lie on back holding dumbbells above with arms straight up. Bend legs 90 degress then lower them down while straigtening them out',
  },
  {
    name: 'TRX reverse mountain climbers',
    desc: 'Lie on back and put TRX straps on heels. Raise hips and crunch legs in. Can do both legs at once or alternate legs',
  },
  {
    name: 'Barbell plank push',
    desc: 'Get into high plank position with hands on a barbell with 45 pound plates. Starting in high plank, push the barbell forward across a length of space using feet, keeping only toes on the floor',
  },
  {
    name: 'Raised kettlebell walks',
    desc: 'Hold a kettlebell straight up overhead with arm fully extended. Walk without locking knees and fully extending lat. Repeat opposite side',
  },
  {
    name: 'Barbell assisted leg raises',
    desc: 'Lie on back and hold barbell with 45 pound plates directly above chest with arms extended. Keeping legs as straight as possible, lift legs up and then back down',
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
    name: 'Core leg taps',
    desc: 'Lay on mat, hold weighted ball straight above, both legs up. Alternate lowering each leg and just tapping the floor then bring leg back up',
  },
  {
    name: 'Core leg lifts',
    desc: 'Lay on mat, hold weighted ball straight above, both legs up. Bring both legs down until 45 degrees then back up',
  },
  {
    name: 'Torso rotations',
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
    name: 'TRX supermans',
    desc: 'On knees, do superman extensions using TRX ropes',
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
    desc: 'Hold weight plate with hands thru plate holes, keep core engaged, bring weight fully around head then switch directions',
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
    name: 'TRX chest crunches',
    desc: 'Face down, feet off ground in TRX straps, in plank position, crunch both legs into chest',
  },
  {
    name: 'TRX leg swings',
    desc: 'Face down, feet off ground in TRX straps, in plank position, swing both knees out to right then left',
  },
  {
    name: 'Ball obliques',
    desc: 'Shoulders resting on big blue ball and dumbbell held straight out with both arms, oblique to the left and right by rolling side to side, keeping arms straight out',
  },
  {
    name: 'Resistance crunches',
    desc: 'Single leg crunch with leg in strap of resistance band',
  },
  {
    name: 'Rubber ball crunches',
    desc: 'Feet up on big rubber ball laying on back and crunch legs in then back out',
  },
  {
    name: 'Battle rope plank slams',
    desc: 'High plank position, hold battle rope with one arm with other holding you up, slam the battle rope then switch arms',
  },
  {
    name: 'Standing core arm extensions',
    desc: 'Attach band to something at chest level then stand perpendicular to band and grip with both hands, knees bent a bit, push arms straight out from body using core to stabilize then switch sides and do other direction',
  },
  {
    name: 'Standing core torso twists',
    desc: 'Attach band to something at chest level then stand perpendicular to band and grip with both hands, knees bent a bit, pull arms away from attached end of band to do a side rotation then switch sides',
  },
];

// The function that does all the work
function getWorkout(x) {
  // Create new array to store selected exercises
  const chosenExercises = [];

  for (let i = 0; i < 5; i++) {
    // Randomly choose exercise
    let exercise = x[Math.floor(Math.random() * x.length)];
    // No duplicates
    while (chosenExercises.includes(exercise)) {
      exercise = x[Math.floor(Math.random() * x.length)];
    }
    chosenExercises.push(exercise);
  }
  // Populate the final workout to the page
  const workout = chosenExercises.map(
    (ex) => `<li><p class="name">${ex.name}</p><p>${ex.desc}</p></li>`,
  );
  main.innerHTML = workout.join('');
}

// Listen for button clicks then activate workout function
chestBtn.addEventListener('click', () => {
  resetScreen();
  getWorkout(chest);
});

backBtn.addEventListener('click', () => {
  resetScreen();
  getWorkout(back);
});

legBtn.addEventListener('click', () => {
  resetScreen();
  getWorkout(legs);
});

coreBtn.addEventListener('click', () => {
  resetScreen();
  getWorkout(core);
});

warmupBtn.addEventListener('click', () => {
  warmupList.classList.toggle('hide-warmups');
  if (arrow.innerHTML === '\u2192') {
    arrow.innerHTML = '\u2193';
  } else {
    arrow.innerHTML = '\u2192';
  }
});
