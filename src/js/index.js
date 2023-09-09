// Grab the button & display elements
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
  {
    name: 'Dumbbell shoulder press',
    desc: 'Single arm, waist-wide stance, other arm straight out, lift dumbbell straight up keeping forearm perpendicular to floor and come down to arm at 90 degree angle to body',
  },
  {
    name: 'Barbell shoulder press',
    desc: 'Hold barbell in front of top of chest and lift straight up with full extension',
  },
  {
    name: 'Resistance rows',
    desc: 'In a long lunge stance, single arm rows with a resitance band around the dumbbell and something static',
  },
  {
    name: 'Hammer strength machine lat pulldowns',
    desc: 'hammer strength machine with a narrow grip that is kind of like lat pulldowns',
  },
  {
    name: 'Hammer strength lats delts',
    desc: 'Hammer strength machine that is between lat and delt pulldowns',
  },
  {
    name: 'Cable chest flys',
    desc: 'Long lunge stance, using cable machine, both arm chest flys',
  },
  {
    name: 'Single arm chest punches',
    desc: 'Long lunge stance, using cable machine, pull cable forward almost like punching straight ahead',
  },
  {
    name: 'Single arm rotating rows',
    desc: 'Seated, single arm rows, starting with palm down then rotate to palm up when pulling back, squeezing back muscles and rotating torso back along with arm',
  },
  {
    name: 'Double arm rows',
    desc: 'Seated, double arm rows, starting with palms down then rotating to palms up when pulling back',
  },
  {
    name: 'Single arm knee pulldowns',
    desc: 'On one knee, single arm cable pulldowns coming down close to torso',
  },
  {
    name: 'Pyramid back squeeze',
    desc: 'Lay on back on flat bench with band around wrists and hand together all the way up, come down slowly widening arms apart and squeeze back muscles at the bottom then go back up, basically a pyramid up and down',
  },
  {
    name: 'Resistance pushups',
    desc: 'Pushups with a band around hands and wrapping around back',
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
    name: 'Decline bench throws',
    desc: 'On a decline bench machine, throws the weights out instead of just pushing them, alternate arms or do one arm first then the other',
  },
  {
    name: 'Bench throws',
    desc: 'On flat bench press machine that has the cable and the bar is hooked to the pegs until you lift it off, throw weights out instead of just pushing them',
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
    name: 'Battle rope lateral crosses',
    desc: 'Hold battle ropes and swing side to side crossing ropes over/under each other',
  },
  {
    name: 'TRX bicep curls',
    desc: 'Palms up, use TRX rope to curl as if trying to put knuckles on top of head',
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
    name: 'Behind the neck lat pulldowns',
    desc: 'Using machine called behind the neck pulldowns, either single or double arm pulldowns',
  },
  {
    name: 'Alternating cable rows & curls',
    desc: 'Using cable that comes from the floor, alternate sets of bicep curls and rows',
  },
  {
    name: 'Pyramid dumbbell rows',
    desc: 'Ass out, back straight but angled forward, elbows in, do sets with reps of 8-10-12-12-10-8',
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
    name: 'TRX kettleball lunges',
    desc: 'Holding TRX ropes with one hand and kettleball in the other, do lunges/split squats',
  },
  {
    name: 'Alternate box calf raises',
    desc: 'Stand on box then go up with both feet but then back down with only one foot, alternate feet',
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

// Warm up exercises not currently used
const warmups = [
  {
    name: 'Side walks',
    desc: 'Band around ankles and side step, then back step 45 degree angle, then back step straight back',
  },
  {
    name: 'Arm pull aparts',
    desc: 'Short band around wrists with arms low, then pull apart, then repeat with arms at chest level then again higher up but not directly over head',
  },
  {
    name: 'Active warmups',
    desc: 'High leg kicks, quad grabs, front leg grabs, side shuffles, side lunges, high knees, ass kicks',
  },
  {
    name: 'Block step ups',
    desc: 'Step ups onto a block',
  },
  {
    name: 'Band leg pull aparts',
    desc: 'Band around ankles and using wall for support, 1 foot off ground with knees slightly bent, pull leg that is off the ground sideways away from other leg then back in',
  },
  {
    name: 'Torso lunges',
    desc: 'Alternate leg forward lunges and rotate torse at bottom of movement toward the front leg',
  },
];

// Cardio exercises not currently used
const cardio = [
  {
    name: 'Ski-Erg',
    desc: 'A few minutes full body motion',
  },
  {
    name: 'Run laps',
    desc: 'Run laps',
  },
  {
    name: 'Half court sprints',
    desc: 'Half court sprints',
  },
  {
    name: 'Standing bike',
    desc: "Exercise bike but stand up, don't sit on seat",
  },
  {
    name: 'Lateral X machine',
    desc: 'Can do this post-workout for 10-15 minutes',
  },
];

// Circuit workouts not currently used
const circuits = [
  {
    name: 'Lower Circuit 1',
    desc: 'Romanian lunges, squat while tossing medicine ball straight up, alternate leg jump lunges with front foot slightly elevated on a small block',
  },
  {
    name: 'Lower Circuit 2',
    desc: 'Pull sled walking backward with arms locked at 90 degrees, back step lunges with front foot slightly elevated on block, hold TRX ropes into a plank then alternate lifting legs up and out',
  },
  {
    name: 'Upper Circuit 1',
    desc: '"Superman take off" on machine, dumbbell bench press, TRX ropes pulling up into a W shape',
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
    (ex) => `<li><p class="name">${ex.name}</p><p>${ex.desc}</p></li>`
  );
  main.innerHTML = workout.join('');
}

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
