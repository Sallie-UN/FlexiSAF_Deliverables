const masterQuestions = [
  // --- TECHNOLOGY & COMPUTING (1-25) ---
  {
    q: "What does 'HTTP' stand for?",
    a: [
      "HyperText Transfer Protocol",
      "High Transfer Text Process",
      "Hyperlink Total Transfer",
      "Home Tool Transfer Process",
    ],
    c: 0,
    d: "Easy",
  },
  {
    q: "Which programming language is known as the 'language of the web'?",
    a: ["Python", "C++", "JavaScript", "PHP"],
    c: 2,
    d: "Easy",
  },
  {
    q: "In coding, what is a 'string'?",
    a: [
      "A piece of hardware",
      "A sequence of characters",
      "A type of CSS margin",
      "A logic gate",
    ],
    c: 1,
    d: "Easy",
  },
  {
    q: "Who co-founded Microsoft with Bill Gates?",
    a: ["Steve Wozniak", "Paul Allen", "Larry Page", "Elon Musk"],
    c: 1,
    d: "Medium",
  },
  {
    q: "What is the main purpose of a Firewall?",
    a: [
      "Speed up internet",
      "Prevent unauthorized access",
      "Clean the hard drive",
      "Cool the CPU",
    ],
    c: 1,
    d: "Easy",
  },
  {
    q: "Which company developed the Java programming language?",
    a: ["Microsoft", "Google", "Sun Microsystems", "Apple"],
    c: 2,
    d: "Medium",
  },
  {
    q: "What does 'SQL' stand for?",
    a: [
      "Simple Query Language",
      "Structured Query Language",
      "System Quick Layer",
      "Standard Quest List",
    ],
    c: 1,
    d: "Medium",
  },
  {
    q: "Which of these is NOT an operating system?",
    a: ["Linux", "Windows", "Oracle", "macOS"],
    c: 2,
    d: "Medium",
  },
  {
    q: "What was the first version of HTML released?",
    a: ["1991", "1993", "1995", "1999"],
    c: 1,
    d: "Hard",
  },
  {
    q: "What does 'GUI' stand for?",
    a: [
      "General User Interval",
      "Graphical User Interface",
      "Global Unit Integration",
      "Gaming User Instance",
    ],
    c: 1,
    d: "Easy",
  },
  {
    q: "Which cloud service is owned by Amazon?",
    a: ["Azure", "Cloud Drive", "AWS", "iCloud"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What is the standard port for HTTPS?",
    a: ["80", "21", "443", "8080"],
    c: 2,
    d: "Hard",
  },
  {
    q: "What is the maximum value of a 8-bit byte?",
    a: ["128", "256", "255", "512"],
    c: 2,
    d: "Hard",
  },
  {
    q: "Which of these is a CSS framework?",
    a: ["Django", "Tailwind", "Laravel", "Flask"],
    c: 1,
    d: "Medium",
  },
  {
    q: "Who is the 'Father of the Computer'?",
    a: ["Charles Babbage", "Nikola Tesla", "Ada Lovelace", "John von Neumann"],
    c: 0,
    d: "Medium",
  },
  {
    q: "What does 'RAM' stand for?",
    a: [
      "Read Access Memory",
      "Random Access Memory",
      "Run Allied Media",
      "Real-time Access Method",
    ],
    c: 1,
    d: "Easy",
  },
  {
    q: "Which tag is used for a line break in HTML?",
    a: ["<lb>", "<break>", "<br>", "<hr>"],
    c: 2,
    d: "Easy",
  },
  {
    q: "In Python, how do you start a comment?",
    a: ["//", "/*", "#", "--"],
    c: 2,
    d: "Easy",
  },
  {
    q: "Which bit depth provides 16.7 million colors?",
    a: ["8-bit", "16-bit", "24-bit", "32-bit"],
    c: 2,
    d: "Hard",
  },
  {
    q: "What is the smallest unit of data in a computer?",
    a: ["Byte", "Nibble", "Bit", "Kilobyte"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What does 'JSON' stand for?",
    a: [
      "Java Standard Object Notation",
      "JavaScript Object Notation",
      "J-Script Online Node",
      "Joint System Offline Network",
    ],
    c: 1,
    d: "Medium",
  },
  {
    q: "Which CSS property changes text color?",
    a: ["text-style", "font-color", "color", "background-color"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What is 'Docker' used for?",
    a: [
      "Video editing",
      "Containerization",
      "Word processing",
      "Web hosting only",
    ],
    c: 1,
    d: "Hard",
  },
  {
    q: "Which company created the Android OS?",
    a: ["Apple", "Nokia", "Google", "Samsung"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What does 'DNS' stand for?",
    a: [
      "Domain Name System",
      "Digital Network Service",
      "Data Node Storage",
      "Direct Name Serial",
    ],
    c: 0,
    d: "Medium",
  },

  // --- SCIENCE & NATURE (26-50) ---
  {
    q: "What is the chemical symbol for Water?",
    a: ["H2O", "CO2", "O2", "HO2"],
    c: 0,
    d: "Easy",
  },
  {
    q: "How many planets are in our solar system?",
    a: ["7", "8", "9", "10"],
    c: 1,
    d: "Easy",
  },
  {
    q: "Which gas do plants absorb from the atmosphere?",
    a: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What is the hardest natural substance on Earth?",
    a: ["Gold", "Iron", "Diamond", "Quartz"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What is the center of an atom called?",
    a: ["Electron", "Proton", "Nucleus", "Orbit"],
    c: 2,
    d: "Medium",
  },
  {
    q: "Which organ is responsible for pumping blood?",
    a: ["Lungs", "Brain", "Liver", "Heart"],
    c: 3,
    d: "Easy",
  },
  {
    q: "What is the closest star to Earth?",
    a: ["Sirius", "Alpha Centauri", "The Sun", "Betelgeuse"],
    c: 2,
    d: "Easy",
  },
  {
    q: "Which metal is liquid at room temperature?",
    a: ["Silver", "Mercury", "Lead", "Tin"],
    c: 1,
    d: "Medium",
  },
  {
    q: "What is the powerhouse of the cell?",
    a: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"],
    c: 2,
    d: "Medium",
  },
  {
    q: "How many bones are in the adult human body?",
    a: ["180", "206", "215", "230"],
    c: 1,
    d: "Hard",
  },
  {
    q: "What is the study of mushrooms called?",
    a: ["Botany", "Mycology", "Biology", "Zoology"],
    c: 1,
    d: "Hard",
  },
  {
    q: "Which planet is the largest in our solar system?",
    a: ["Saturn", "Jupiter", "Neptune", "Mars"],
    c: 1,
    d: "Easy",
  },
  {
    q: "What is the boiling point of water in Celsius?",
    a: ["90°C", "100°C", "110°C", "120°C"],
    c: 1,
    d: "Easy",
  },
  {
    q: "Which part of the eye controls the amount of light?",
    a: ["Retina", "Iris", "Lens", "Cornea"],
    c: 1,
    d: "Medium",
  },
  {
    q: "What is the chemical symbol for Iron?",
    a: ["Ir", "Fe", "In", "Au"],
    c: 1,
    d: "Medium",
  },
  {
    q: "Who developed the theory of relativity?",
    a: ["Newton", "Einstein", "Galileo", "Hawking"],
    c: 1,
    d: "Medium",
  },
  {
    q: "What is the most common element in the universe?",
    a: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
    c: 2,
    d: "Hard",
  },
  {
    q: "How many valves does a human heart have?",
    a: ["2", "3", "4", "5"],
    c: 2,
    d: "Hard",
  },
  {
    q: "What is the speed of sound roughly?",
    a: ["343 m/s", "150 m/s", "1000 m/s", "500 m/s"],
    c: 0,
    d: "Medium",
  },
  {
    q: "Which planet is known for its rings?",
    a: ["Mars", "Saturn", "Venus", "Earth"],
    c: 1,
    d: "Easy",
  },
  {
    q: "What is the PH of pure water?",
    a: ["5", "6", "7", "8"],
    c: 2,
    d: "Medium",
  },
  {
    q: "What is the largest mammal in the world?",
    a: ["Elephant", "Blue Whale", "Giraffe", "Orca"],
    c: 1,
    d: "Easy",
  },
  {
    q: "Which gas is used in light bulbs to prevent oxidation?",
    a: ["Oxygen", "Argon", "Carbon", "Hydrogen"],
    c: 1,
    d: "Hard",
  },
  {
    q: "What is the process of a solid turning to a gas?",
    a: ["Melting", "Evaporation", "Sublimation", "Freezing"],
    c: 2,
    d: "Hard",
  },
  {
    q: "What is the main component of glass?",
    a: ["Clay", "Sand", "Lime", "Plastic"],
    c: 1,
    d: "Medium",
  },

  // --- GENERAL KNOWLEDGE & HISTORY (51-75) ---
  {
    q: "In which year did Titanic sink?",
    a: ["1910", "1912", "1915", "1920"],
    c: 1,
    d: "Medium",
  },
  {
    q: "Who painted the Mona Lisa?",
    a: ["Van Gogh", "Da Vinci", "Picasso", "Monet"],
    c: 1,
    d: "Easy",
  },
  {
    q: "What is the smallest country in the world?",
    a: ["Monaco", "Malta", "Vatican City", "San Marino"],
    c: 2,
    d: "Medium",
  },
  {
    q: "Which country gifted the Statue of Liberty to the USA?",
    a: ["UK", "Germany", "France", "Spain"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What is the capital of Japan?",
    a: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
    c: 2,
    d: "Easy",
  },
  {
    q: "Who was the first person to step on the moon?",
    a: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
    c: 1,
    d: "Easy",
  },
  {
    q: "Which empire was ruled by Julius Caesar?",
    a: ["Greek", "Ottoman", "Roman", "Persian"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What is the longest river in the world?",
    a: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    c: 1,
    d: "Medium",
  },
  {
    q: "Which war ended in 1945?",
    a: ["WWI", "WWII", "Vietnam War", "Civil War"],
    c: 1,
    d: "Easy",
  },
  {
    q: "Who wrote 'Romeo and Juliet'?",
    a: ["Dickens", "Hemingway", "Shakespeare", "Twain"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What is the currency of the UK?",
    a: ["Dollar", "Euro", "Pound", "Yen"],
    c: 2,
    d: "Easy",
  },
  {
    q: "Which continent is the Sahara Desert located in?",
    a: ["Asia", "Africa", "South America", "Australia"],
    c: 1,
    d: "Easy",
  },
  {
    q: "How many strings does a standard guitar have?",
    a: ["4", "5", "6", "7"],
    c: 2,
    d: "Easy",
  },
  {
    q: "Who was the first President of the USA?",
    a: ["Lincoln", "Jefferson", "Washington", "Adams"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What is the largest ocean on Earth?",
    a: ["Atlantic", "Indian", "Arctic", "Pacific"],
    c: 3,
    d: "Easy",
  },
  {
    q: "In what year was the first iPhone released?",
    a: ["2005", "2007", "2009", "2010"],
    c: 1,
    d: "Medium",
  },
  {
    q: "Which country is home to the Eiffel Tower?",
    a: ["Italy", "Spain", "France", "Belgium"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What is the capital of Australia?",
    a: ["Sydney", "Melbourne", "Canberra", "Perth"],
    c: 2,
    d: "Medium",
  },
  {
    q: "Who discovered America in 1492?",
    a: ["Vasco da Gama", "Magellan", "Columbus", "Cook"],
    c: 2,
    d: "Easy",
  },
  {
    q: "Which language is spoken in Brazil?",
    a: ["Spanish", "Portuguese", "French", "English"],
    c: 1,
    d: "Medium",
  },
  {
    q: "How many colors are in a rainbow?",
    a: ["6", "7", "8", "9"],
    c: 1,
    d: "Easy",
  },
  {
    q: "Which ancient civilization built the pyramids?",
    a: ["Mayans", "Romans", "Egyptians", "Greeks"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What is the capital of Italy?",
    a: ["Venice", "Milan", "Rome", "Naples"],
    c: 2,
    d: "Easy",
  },
  {
    q: "Who is the author of 'Harry Potter'?",
    a: ["Tolkien", "Lewis", "J.K. Rowling", "Dahl"],
    c: 2,
    d: "Easy",
  },
  {
    q: "Which city is known as the Big Apple?",
    a: ["Los Angeles", "Chicago", "Miami", "New York"],
    c: 3,
    d: "Easy",
  },

  // --- POP CULTURE & MISC (76-100) ---
  {
    q: "What is the highest-grossing film of all time?",
    a: ["Avatar", "Endgame", "Titanic", "Star Wars"],
    c: 0,
    d: "Hard",
  },
  {
    q: "Which artist released the album 'Thriller'?",
    a: ["Prince", "Michael Jackson", "Madonna", "Queen"],
    c: 1,
    d: "Easy",
  },
  {
    q: "In 'The Matrix', what color pill does Neo take?",
    a: ["Blue", "Red", "Green", "Yellow"],
    c: 1,
    d: "Easy",
  },
  {
    q: "What is the name of the fictional city in Batman?",
    a: ["Metropolis", "Gotham", "Star City", "Central City"],
    c: 1,
    d: "Easy",
  },
  {
    q: "Who played Iron Man in the MCU?",
    a: ["Chris Evans", "Robert Downey Jr.", "Chris Pratt", "Tom Holland"],
    c: 1,
    d: "Easy",
  },
  {
    q: "Which social media platform is known for 'Tweets'?",
    a: ["Facebook", "Instagram", "Twitter", "Snapchat"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What is the main ingredient in hummus?",
    a: ["Lentils", "Chickpeas", "Beans", "Peas"],
    c: 1,
    d: "Medium",
  },
  {
    q: "How many players are on a soccer team?",
    a: ["9", "10", "11", "12"],
    c: 2,
    d: "Easy",
  },
  {
    q: "Which company makes the PlayStation?",
    a: ["Microsoft", "Nintendo", "Sony", "Sega"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What is the name of Mickey Mouse's dog?",
    a: ["Goofy", "Pluto", "Donald", "Daisy"],
    c: 1,
    d: "Easy",
  },
  {
    q: "In which sport would you use a 'shuttlecock'?",
    a: ["Tennis", "Badminton", "Squash", "Golf"],
    c: 1,
    d: "Medium",
  },
  {
    q: "Which streaming service produced 'Stranger Things'?",
    a: ["Hulu", "Disney+", "Netflix", "Prime Video"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What is the capital of Canada?",
    a: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    c: 2,
    d: "Medium",
  },
  {
    q: "Who is the 'King of Rock and Roll'?",
    a: ["Chuck Berry", "Elvis Presley", "Buddy Holly", "Little Richard"],
    c: 1,
    d: "Easy",
  },
  {
    q: "How many degrees are in a circle?",
    a: ["180", "270", "360", "450"],
    c: 2,
    d: "Easy",
  },
  {
    q: "Which year did the Berlin Wall fall?",
    a: ["1987", "1989", "1991", "1993"],
    c: 1,
    d: "Hard",
  },
  {
    q: "What is the national animal of Scotland?",
    a: ["Lion", "Unicorn", "Stag", "Dragon"],
    c: 1,
    d: "Hard",
  },
  {
    q: "Which company's logo is a bitten apple?",
    a: ["Microsoft", "Apple", "Dell", "HP"],
    c: 1,
    d: "Easy",
  },
  {
    q: "What is the most popular drink in the world?",
    a: ["Coffee", "Tea", "Coca Cola", "Beer"],
    c: 1,
    d: "Hard",
  },
  {
    q: "How many continents are there?",
    a: ["5", "6", "7", "8"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What does 'DIY' stand for?",
    a: [
      "Do It Yourself",
      "Done In Yearly",
      "Digital Internal Yield",
      "Direct Into Yard",
    ],
    c: 0,
    d: "Easy",
  },
  {
    q: "Which fairy tale character has very long hair?",
    a: ["Cinderella", "Snow White", "Rapunzel", "Belle"],
    c: 2,
    d: "Easy",
  },
  {
    q: "What is the primary language of Mexico?",
    a: ["Mexican", "Spanish", "Latin", "Portuguese"],
    c: 1,
    d: "Easy",
  },
  {
    q: "Which element is used in pencils?",
    a: ["Lead", "Graphite", "Carbon", "Zinc"],
    c: 1,
    d: "Medium",
  },
  {
    q: "What is the tallest mountain in the world?",
    a: ["K2", "Everest", "Kilimanjaro", "Denali"],
    c: 1,
    d: "Easy",
  },
];

// 2. Application State
let state = {
  username: "Player",
  mode: "normal",
  currentIdx: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  timer: 10,
  maxTime: 10,
  interval: null,
  sessionQuestions: [],
  answers: [],
};

// 3. DOM Elements
const dom = {
  screens: document.querySelectorAll(".screen"),
  options: document.getElementById("options-grid"),
  question: document.getElementById("question-text"),
  score: document.getElementById("score"),
  streak: document.getElementById("streak"),
  progress: document.getElementById("progress-bar"),
  timerText: document.getElementById("timer-text"),
  timerCircle: document.getElementById("timer-path-remaining"),
};

/**
 * INITIALIZE GAME SESSION
 * Shuffles master list and selects a subset
 */
function startQuiz() {
  const user = document.getElementById("username").value;
  if (user) state.username = user;

  // Shuffle the master list
  const shuffled = [...masterQuestions].sort(() => Math.random() - 0.5);

  // Pick 15 random questions for this session
  state.sessionQuestions = shuffled.slice(0, 15);

  // Reset State for fresh game
  state.currentIdx = 0;
  state.score = 0;
  state.streak = 0;
  state.answers = [];

  playSound("snd-click");
  showScreen("quiz-screen");
  updateUI();
  loadQuestion();
}

/**
 * LOAD QUESTION INTO UI
 */
function loadQuestion() {
  // Check if we reached the end of the session set
  if (state.currentIdx >= state.sessionQuestions.length) {
    return endQuiz();
  }

  const qData = state.sessionQuestions[state.currentIdx];

  // Update Text
  dom.question.innerText = qData.q;
  dom.options.innerHTML = "";

  // Create Option Cards
  qData.a.forEach((opt, i) => {
    const btn = document.createElement("div");
    btn.className = "option-card";
    btn.innerHTML = `
            <span>${opt}</span>
            <small>${String.fromCharCode(65 + i)}</small>
        `;
    btn.onclick = () => handleAnswer(i);
    dom.options.appendChild(btn);
  });

  updateProgressBar();
  resetTimer();
}

/**
 * ANSWER HANDLING & SCORING
 */
// Add a new property to state to track the peak
state.bestStreak = 0;

/**
 * HANDLES THE LOGIC FOR CHOOSING AN ANSWER
 * Corrects the accuracy and peak streak bugs
 */
function handleAnswer(choice) {
  clearInterval(state.interval);

  const currentQ = state.sessionQuestions[state.currentIdx];
  const isCorrect = choice === currentQ.c;

  // Track the answer data correctly
  state.answers.push({
    question: currentQ.q,
    userAnswer: choice,
    correctAnswer: currentQ.c,
    options: currentQ.a,
    isCorrect: isCorrect, // Saved for accuracy calculation later
  });

  const cards = document.querySelectorAll(".option-card");
  cards.forEach((c) => (c.style.pointerEvents = "none"));

  if (isCorrect) {
    if (choice !== -1) cards[choice].classList.add("correct");
    playSound("snd-correct");
    state.streak++;

    // Update the Personal Best streak if current streak exceeds it
    if (state.streak > state.bestStreak) {
      state.bestStreak = state.streak;
    }

    calculateScore();
  } else {
    if (choice !== -1) cards[choice].classList.add("wrong");
    cards[currentQ.c].classList.add("correct");
    playSound("snd-wrong");
    state.streak = 0; // Current streak resets, but bestStreak is safe!

    if (state.mode === "survival") {
      setTimeout(endQuiz, 1200);
      return;
    }
  }

  updateUI();

  setTimeout(() => {
    state.currentIdx++;
    loadQuestion();
  }, 1500);
}

/**
 * CALCULATES FINAL STATS AND RENDERS RESULT SCREEN
 */
function endQuiz() {
  clearInterval(state.interval);
  showScreen("result-screen");

  // 1. Display Total Score
  document.getElementById("final-score").innerText =
    state.score.toLocaleString();

  // 2. Display the Peak Streak achieved during the session
  document.getElementById("best-streak-val").innerText = state.bestStreak;

  // 3. Calculate Accuracy Percentage
  const totalAttempted = state.answers.length;
  const correctAnswers = state.answers.filter((ans) => ans.isCorrect).length;
  const accuracyPerc =
    totalAttempted > 0
      ? Math.round((correctAnswers / totalAttempted) * 100)
      : 0;

  document.getElementById("accuracy-val").innerText = accuracyPerc + "%";

  // 4. Render Review Section
  const reviewArea = document.getElementById("review-area");
  reviewArea.innerHTML = "<h3>Performance Review</h3>";

  state.answers.forEach((ans) => {
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `
            <p><strong>Q:</strong> ${ans.question}</p>
            <p style="color: ${ans.isCorrect ? "#00ff88" : "#ff4444"}">
                ${ans.isCorrect ? "✓ Correct" : "✗ Incorrect"} 
                <br><small>Your answer: ${ans.userAnswer === -1 ? "Timed Out" : ans.options[ans.userAnswer]}</small>
            </p>
        `;
    reviewArea.appendChild(div);
  });
}

function calculateScore() {
  const base = 100;
  const timeBonus = state.timer * 10;
  const streakMultiplier = Math.floor(state.streak / 3); // Bonus every 3 streak
  state.score += base + timeBonus + streakMultiplier * 50;
}

/**
 * TIMER LOGIC
 */
function resetTimer() {
  clearInterval(state.interval);
  state.timer = state.maxTime;
  updateTimerUI();

  state.interval = setInterval(() => {
    state.timer--;
    updateTimerUI();
    if (state.timer <= 0) {
      handleAnswer(-1); // Auto-fail on timeout
    }
  }, 1000);
}

/**
 * UI & UTILITIES
 */
function updateUI() {
  dom.score.innerText = state.score.toLocaleString();
  dom.streak.innerText = state.streak;
}

function updateProgressBar() {
  const perc = (state.currentIdx / state.sessionQuestions.length) * 100;
  dom.progress.style.width = `${perc}%`;
}

function updateTimerUI() {
  dom.timerText.innerText = state.timer;
  const offset = (state.timer / state.maxTime) * 283;
  dom.timerCircle.style.strokeDashoffset = 283 - offset;
}

function showScreen(id) {
  dom.screens.forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function playSound(id) {
  const s = document.getElementById(id);
  if (s) {
    s.currentTime = 0;
    s.play().catch(() => {}); // Browsers might block auto-play until user interacts
  }
}

// Global Event Listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);

document.querySelectorAll(".mode-btn").forEach((btn) => {
  btn.onclick = () => {
    document.querySelector(".mode-btn.active").classList.remove("active");
    btn.classList.add("active");
    state.mode = btn.dataset.mode;
    state.maxTime = state.mode === "speed" ? 5 : 10;
  };
});

// Keyboard Support
window.onkeydown = (e) => {
  const keys = ["a", "b", "c", "d"];
  const idx = keys.indexOf(e.key.toLowerCase());
  const isQuizActive = document
    .getElementById("quiz-screen")
    .classList.contains("active");

  if (idx !== -1 && isQuizActive) {
    handleAnswer(idx);
  }
};
