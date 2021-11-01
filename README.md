# WorkoutTracker
A workout tracker that uses a MongoDB

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Table of Contents
1. [Description](#description)
2. [Installation Instructions](#install)
3. [Usage](#usage)
4. [Contribution Guidelines](#contribution)
5. [License](#license)
6. [Questions](#questions)

## Description <a name="description"></a>
This is a Node.js application that uses MongoDB to keep track of exercises done per workout.
Each day is one workout, and the exercises are divided into Cardio and Resistance.

## Installation Instructions <a name="install"></a>
1. Clone the project from the main branch of the repository to the local filesystem
2. make sure that node.js and npm are installed
3. run the command "npm install" to install the dependencies from the package.json file
4. run the command "npm run seed" in order to seed the database

## Usage <a name="usage"></a>
1. in the main folder, run the command "npm start"
2. using a web browser, go to localhost:3000
3. ![homepage](https://user-images.githubusercontent.com/85419207/139614948-5ff1ec03-2907-49d9-b5dd-8c979c73a818.jpg)
4. To start a new workout for a day, click on "New Workout"
5. This will take you to a page to choose the type of exercise: Resistance or Cardio
6. ![selecttype2](https://user-images.githubusercontent.com/85419207/139615064-351a9587-2d7d-4b80-b4c3-3d6cef54b71d.jpg)
7. Once the type of exercise is chosen, enter the information for the exercise.
8. ![addExercise](https://user-images.githubusercontent.com/85419207/139615124-101f1e0c-ac26-4d56-a231-34a45075c4cb.jpg)
9. If you are done entering exercises, click on "Complete". If you wish to enter more exercises, click on "Add Exercise"
10. To see total time exercised and pounds of resistance exercises done for the past 7 days, click on "Dashboard" at the top
11. ![dashboard](https://user-images.githubusercontent.com/85419207/139615285-9454cf90-4c4a-493c-a527-dff6cfef5f6a.jpg)


## Contribution Guidelines <a name="contribution"></a>
1. Clone the Main branch of the repository from GitHub
2. Create a Branch and name it using the format: "feature_contributor"
3. Create a pull request
4. Send an email to the address listed in the Questions section, containing a summary of the contribution
