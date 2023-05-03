// Variables

const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [
  {
    quote: "“We cannot solve problems with the kind of thinking we employed when we came up with them.”",
    person: "Albert Einstein",
  },
  {
    quote: "“Learn as if you will live forever, live like you will die tomorrow.”",
    person: "Mahatma Gandhi",
  },
  {
    quote: "“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”",
    person: "Mark Twain",
  },
  {
    quote: "“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”",
    person: "Eleanor Roosevelt",
  },
  {
    quote: "“When you change your thoughts, remember to also change your world.”",
    person: "Norman Vincent Peale",
  },
  {
    quote: "“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.",
    person: "Walter Anderson",
  },
  {
    quote: "“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”",
    person: "Diane McLaren",
  },
  {
    quote: "“When you giveup remember, Aiman is always by your side. Meow Meow Meow Meow”",
    person: "Dr. Aiman Arash",
  },
  
];

console.log(quotes.length);

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
