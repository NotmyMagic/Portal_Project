let cardsList = document.querySelector(".cards");
let cards = [];

const card = { title: "temporary", url: "./project_1/index.html" };
cards.push(card);
cards.push(card);
cards.push(card);

cards.map((item) => {
  cardsList.innerHTML += `<div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h2>${card.title}</h2>
        </div>
        <div class="flip-card-back">
          <a class="dark-link" href="${card.url}">Project Link</a>
        </div>
      </div>
    </div>
  `;
});

console.log(cards);
