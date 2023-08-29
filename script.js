
const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
copyBtn = document.querySelector(".copy"),
authorName = document.querySelector(".name"),
speechBtn = document.querySelector(".speech")
var quotes = [
    "We cannot solve problems with the kind of thinking we employed when we came up with them. — Albert Einstein",
    "Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too. — Mark Twain",
    "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.— Eleanor Roosevelt",
    "When you change your thoughts, remember to also change your world.—Norman Vincent Peale",
    "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson",
    "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.—Diane McLaren",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "It is better to fail in originality than to succeed in imitation. — Herman Melville",
    "The road to success and the road to failure are almost exactly the same. — Colin R. Davis",
    "Success usually comes to those who are too busy looking for it.— Henry David Thoreau",
    "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. —Dale Carnegie",
    "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind. —Mister Rogers",
    "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable. —John Wooden",
    "I never dreamed about success. I worked for it. —Estée Lauder",
    "Success is getting what you want, happiness is wanting what you get. ―W. P. Kinsella",
  ];
  
  window.addEventListener('DOMContentLoaded', function() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomVariable = quotes[randomIndex];
    var randomVariableElement = document.getElementById('quote');
    randomVariableElement.textContent = randomVariable;
    });
  // Function to generate a random quote
  function generateQuote() {
    // Get a random index from the quotes array
    var randomIndex = Math.floor(Math.random() * quotes.length);
  
    // Display the random quote
    var quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomIndex];
  }

  // Event listener for button click
  var generateBtn = document.getElementById("generateBtn");
  generateBtn.addEventListener("click", generateQuote);