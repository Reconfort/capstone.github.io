const speakers = [
  {
    id: 1,
    name: 'Yochai Benkler',
    imageName: 'user1.png',
    title:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
      'Benkler studies commons-based peer production and published his seminal book, The Wealth of Networks, in 2006',
  },
  {
    id: 2,
    name: 'Kilnam Chon',
    imageName: 'user2.png',
    title: '',
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 3,
    name: 'SohYeong Noh',
    imageName: 'user3.png',
    title: 'Director of Art Centre Nabi and a board member of CC Korea',
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 4,
    name: 'Julia Leda',
    imageName: 'user4.png',
    title: 'President of Young Pirates of Europe',
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 5,
    name: 'Lila tretikov',
    imageName: 'user5.png',
    title: 'Executive Director of the Wikimedia Foundation',
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 6,
    name: 'Ryan Merkley',
    imageName: 'user6.png',
    title: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
];

const cardContainer = document.querySelector('.speaker-container');
const cardContainer1 = document.querySelector('.speaker-container1');
let cardHTML = '';
let cardHTML1 = '';

// Limit the number of cards to 2
const limitedSpeakers = speakers.slice(0, 2);

limitedSpeakers.forEach((card) => {
  cardHTML += `
        <div class="card">
          <img src="../assets/${card.imageName}" alt="" />
          <div class="details">
            <h3 class="title">${card.name}</h3>
            <h4>
              ${card.title}
            </h4>
            <div class="line"></div>
            <p>
              ${card.description}
            </p>
          </div>
        </div>
    `;
});
speakers.forEach((card) => {
  cardHTML1 += `
        <div class="card">
          <img src="../assets/${card.imageName}" alt="" />
          <div class="details">
            <h3 class="title">${card.name}</h3>
            <h4>
              ${card.title}
            </h4>
            <div class="line"></div>
            <p>
              ${card.description}
            </p>
          </div>
        </div>
    `;
});

cardContainer.innerHTML = cardHTML;
cardContainer1.innerHTML = cardHTML1;

const more = document.querySelector('.more');
const less = document.querySelector('.less');

more.addEventListener('click', () => {
  cardContainer.style.display = 'none';
  cardContainer1.style.display = 'flex';
  more.style.display = 'none';
  less.style.display = 'block';
});

less.addEventListener('click', () => {
  less.style.display = 'none';
  more.style.display = 'block';
  cardContainer.style.display = 'flex';
  cardContainer1.style.display = 'none';
});