const chatbot = document.querySelector(".chatbot-widget");
const toggleBtn = document.querySelector(".chatbot-toggle");
const closeBtn = document.querySelector(".close-chat");
const startSellingBtn = document.querySelector("#start-selling");

// Toggle chatbot with button
toggleBtn.addEventListener("click", () => {
  chatbot.classList.toggle("hidden");
});

// Close chatbot
closeBtn.addEventListener("click", () => {
  chatbot.classList.add("hidden");
});

// Open chatbot on "Start Selling Now"
startSellingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  chatbot.classList.remove("hidden");
});
