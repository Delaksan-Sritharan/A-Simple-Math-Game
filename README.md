# Simple Maths Game

This is a simple math game implemented in JavaScript, HTML, and CSS. It generates 10 random arithmetic questions and allows the user to answer them via prompts. The game then displays the questions, user answers, and feedback on the HTML page, along with the score.

## Features

- Generates 10 random arithmetic questions using addition, subtraction, multiplication, and division.
- Avoids division by zero and ensures integer results for division questions (if possible, otherwise uses addition).
- Prompts the user for answers.
- Displays questions, user answers, and feedback (correct/incorrect) on the HTML page.
- Calculates and displays the number of correct and incorrect answers and the total score.
- Changes the background color to purple if the score is 20 or less.

## How to Use

1.  **Save the files:** Save the provided HTML and JavaScript code as `index.html` and `tute8.js`, respectively, in the same directory.
2.  **Open in a browser:** Open the `index.html` file in a web browser.
3.  **Answer the questions:** The game will prompt you with 10 arithmetic questions. Enter your answers in the prompts.
4.  **View the results:** After answering all questions, the results, including the questions, your answers, feedback, and score, will be displayed on the page.

## File Structure
Simple-Maths-Game/
├── index.html
└── tute8.js
└── README.md
-   `index.html`: Contains the HTML structure for the game's user interface.
-   `tute8.js`: Contains the JavaScript logic for generating questions, handling user input, and displaying results.
-   `README.md`: This file, providing information about the project.

## JavaScript Logic

-   The `getOperand()` function randomly selects an arithmetic operator (+, -, \*, /).
-   The game generates 10 questions using random numbers and operators.
-   Division by zero is handled by switching to addition.
-   If division does not result in an integer, addition is used instead.
-   User answers are collected using `prompt()`.
-   The script updates the HTML page with questions, user answers, and feedback.
-   The script calculates and displays the score.
-   The background color changes to purple if the score is low.

## CSS Styling

-   Basic CSS is used to style the feedback messages:
    -   Correct answers are displayed in green.
    -   Incorrect answers are displayed in red.

## Improvements

-   **User Interface:** Implement a more user-friendly interface with input fields instead of prompts.
-   **Difficulty Levels:** Add difficulty levels to control the range of numbers and the complexity of questions.
-   **Timer:** Add a timer to track how long it takes to complete the quiz.
-   **More Operators:** Add more mathematical operators like exponents or modulus.
-   **Responsive Design:** Make the game responsive to different screen sizes.
-   **Error Handling:** Add input validation to handle non-numeric inputs.
-   **Visual Feedback:** Improve visual feedback, such as displaying the correct answer immediately after an incorrect input.
-   **Persistent Score:** Implement local storage or server-side storage to save and display high scores.
-   **More Question Types:** Add other types of questions, like word problems.
