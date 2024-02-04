const questions = [
  {
    question: "Who formulated the laws of motion?",
    answers: [
      { text: "Isaac Newton", correct: true },
      { text: "Albert Einstein", correct: false },
      { text: "Galileo Galilei", correct: false },
      { text: "Nikola Tesla", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Fe", correct: false },
      { text: "Cu", correct: false },
    ],
  },
  {
    question: "Which gas do plants absorb during photosynthesis?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon Dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Earth", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
