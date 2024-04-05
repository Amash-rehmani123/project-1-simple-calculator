#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
      type: "number",
      name: "numberone",
      message: "kindly enter your first number",
    },
    { type: "number", name: "numbertwo", message: "kindly enter your numbertwo" },
    
    {
      type: "list",
      name: "operator",
      message: "select on of the operator to perfom operation",
      choices: ["+", "-", "*", "/"],
    },
  ]);
  if (answer.operator === "+") {
    console.log(answer.numberone + answer.numbertwo);
  } else if (answer.operator === "-") {
    console.log(answer.numberone - answer.numbertwo );
  } else if (answer.operator === "*") {
    console.log(answer.numberone * answer.numbertwo );
  } else if (answer.operator === "/") {
    console.log(answer.numberone / answer.numbertwo );
  } else {
    ("please select a valid operator");
  }
  