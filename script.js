const SECRET_PASSWORD = "30112008";

const lockScreen = document.getElementById("lockScreen");
const journal = document.getElementById("journal");
const unlockForm = document.getElementById("unlockForm");
const passwordInput = document.getElementById("passwordInput");
const passwordMessage = document.getElementById("passwordMessage");
const contentPanel = document.getElementById("contentPanel");

unlockForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (passwordInput.value === SECRET_PASSWORD) {
    lockScreen.classList.add("hidden");
    journal.classList.remove("hidden");
    showSection("memories");
  } else {
    passwordMessage.textContent = "That isn't the secret date. Try again ✨";
    passwordInput.value = "";
    passwordInput.focus();
  }
});

document.querySelectorAll("[data-section]").forEach(function (button) {
  button.addEventListener("click", function () {
    showSection(button.dataset.section);
  });
});

function showSection(section) {
  if (section === "memories") {
    contentPanel.innerHTML = `
      <h2>Our little memories 📸</h2>
      <p>Some moments deserve their own tiny corner of the world.</p>
      <div class="memory-grid">
        <article class="memory-card">
          <img src="assets/photo1.jpg" alt="A special memory">
          <p>One of my favourite moments</p>
        </article>
        <article class="memory-card">
          <img src="assets/photo2.jpg" alt="A happy memory">
          <p>A memory that makes me smile</p>
        </article>
        <article class="memory-card">
          <img src="assets/photo3.jpg" alt="A lovely memory">
          <p>A little piece of happiness</p>
        </article>
        <article class="memory-card">
          <img src="assets/photo4.jpg" alt="A treasured memory">
          <p>One to keep forever</p>
        </article>
      </div>
    `;
  } else if (section === "wishes") {
    contentPanel.innerHTML = `
      <h2>Birthday wishes 🌷</h2>
      <p>May your new year be filled with soft mornings, happy surprises,
      beautiful memories, and people who make you feel loved.</p>
      <p>Keep dreaming big, laughing loudly, and being wonderfully yourself.</p>
      <p>Today is all about celebrating you. Happy birthday, Moonlight! 💗</p>
    `;
  } else if (section === "letter") {
    contentPanel.innerHTML = `
      <h2>A little letter 💌</h2>
      <div class="letter">
        Dear Moonlight,

        I hope you know how special you are and how much happiness you bring
        to the people around you. I hope this birthday reminds you of all the
        lovely things you deserve.

        Thank you for being you. Here's to more laughter, more memories,
        and many more reasons to smile.

        With lots of love,
        Your favourite person ✨
      </div>
    `;
  } else if (section === "quiz") {
    contentPanel.innerHTML = `
      <h2>A tiny birthday quiz 🎀</h2>
      <p>What should your birthday be filled with?</p>
      <div class="quiz-options">
        <button data-answer="wrong">Homework</button>
        <button data-answer="right">Cake, laughter & love</button>
        <button data-answer="wrong">Doing chores</button>
      </div>
      <p class="feedback" id="quizFeedback" aria-live="polite"></p>
    `;

    contentPanel.querySelectorAll("[data-answer]").forEach(function (button) {
      button.addEventListener("click", function () {
        const feedback = document.getElementById("quizFeedback");

        if (button.dataset.answer === "right") {
          feedback.textContent = "Correct! You deserve all the birthday magic 🎂";
        } else {
          feedback.textContent = "Try again—it's your special day! 💕";
        }
      });
    });
  } else if (section === "surprise") {
    contentPanel.innerHTML = `
      <h2>Your final surprise 🎁</h2>
      <div class="surprise-note">
        <p>Surprise, Moonlight!</p>
        <p>Your birthday reminder: you are loved, appreciated, and one of a kind.</p>
        <p>Make a wish, close your eyes, and let this year bring you wonderful things. ✨</p>
      </div>
    `;
  }
}
