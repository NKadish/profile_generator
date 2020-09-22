const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let finalProfile = ""; // where we will put all of our survey answer outputs. 
rl.question('What is your name? You can also put a nickname here! ', (name) => {
  finalProfile += `Hey there! I'm ${name}!\n`;
  rl.question('What\'s an activity that you like to do? ', (activity) => {
    finalProfile +=`I like to ${activity}!\n`;
    rl.question(`What do you listen to while you ${activity}? `, (music) => {
      finalProfile +=`I listen to ${music} while I ${activity}!\n`;
      rl.question(`Which meal is your favorite? (breakfast, lunch, etc.) `, (meal) => {
        finalProfile +=`My favorite meal of the day is ${meal}!\n`;
        rl.question(`What is your favorite thing to eat for ${meal}? `, (mealFav) => {
          finalProfile +=`My favorite thing to eat for ${meal} is ${mealFav}!\n`;
          rl.question(`Which sport is your favorite? `, (sport) => {
            finalProfile +=`My favorite sport is ${sport}!\n`;
            rl.question(`What is your superpower? Tell us what you're amazing at in a few words! `, (power) => {
              finalProfile +=`My super power is: ${power}\n`;
              console.log(finalProfile);
              rl.close();
            });
          });
        });
      });
    });
  });
});

/* What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at! */