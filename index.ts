




import inquirer from "inquirer"

const randomNumber = Math.floor (Math.random() * 6 + 1);



const answer =await inquirer.prompt([
    {
        name: "usergussednumber",
        type: "number",
        message: "please guess a number between 1 and 10",
    }
])

 if(answer.usergussednumber === randomNumber){
 console.log("congratulations you guessed right number");
 }else {
    console.log("you guess wrong number");
 }





