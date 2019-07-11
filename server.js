// var age = 26;
// age = 27;

// age = age + 1;

// var health = 0.65;

// var isAlive = true;
// isAlive = false;

// isAlive = 5 > 2;

// const pi = 3.14159;

// let numberOfLimbs = 4;

// var name = "Mark";
// var zenva = "Zenva";

// var age = 26;

// let finalString = `${name} is ${age} years old.`;

// console.log(finalString);

// let apiKey = "9BE777B29A4DEE11D205E1AE4CDF5D58";
// let appID = "221380";

// var numbers = [1, 2, 3];
// numbers = [1, 2];
// numbers[0];
// numbers[1] = 4;

// numbers.indexOf(1);

// numbers.includes(5); // False

// var inventory = {"food": 2, "clothing": 3};
// inventory["food"];
// inventory["clothing"] = 4;


// var javascriptVersions = ["ES6", "ES7", "ES8", "ES9"];

// function sum(num1, num2 = 2) {
//     return num1 + num2;
// }

// var result = sum(1, 5);

// var result = (num1, num2) => {return num1 + num2};


// const promise = new Promise((resolve, reject) => {
//     let num1 = 5;
//     if (num1 == 5) {
//         resolve("Success");
//     }
//     else {
//         reject("Failure");
//     }
// });

// promise.then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// });


// async function sum(num1, num2 = 2) {
//     return await num1 + num2;
// }

// sum(1, 2);

// var numbers = [1, 2, 3];

// for (let number of numbers) {
//     console.log(number);
// }

// var number = 1;

// if (number == 0) {
//     console.log("Number is 0");
// }
// else if (number ==1) {
//     console.log("number is 1");
// }
// else {
//     console.log("number is something else");
// }

const fetch = require("node-fetch");

let url = 'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=221380';

class Achievement {
    constructor(name, percent) {
        this.name = name;
        this.percent = percent;
    }

    printValues() {
        if (this.percent == 0) {
            console.log(`No Completions for ${this.name}`);
        }
        else {
            console.log(`${this.name} achievement has been compleyed by ${this.percent}% of people.`)
        }
    }
}

async function fetchData(url) {
    let response = await fetch(url);
    let jsonResponse = await response.json();
    // console.log(JSON.stringify(jsonResponse));
    printData(jsonResponse);
}

fetchData(url).catch(function () {
    console.log("error");
});

function printData(jsonData) {
    var achievementArray = [];
    let percentages = jsonData['achievementpercentages'];
    let achievements = percentages['achievements'];

    for (let achievement of achievements) {
        let name = achievement['name'];
        let percent = achievement['percent'];
        let newAchievement = new Achievement(name, percent);
        achievementArray.push(newAchievement);
        newAchievement.printValues();
    }
}

