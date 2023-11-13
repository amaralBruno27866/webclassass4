const Card = (song) => {
  const {
    songId,
    artistId,
    title,
    year,
    duration,
    url,
    explicit,
  } = song;

  const cardContainer = document.createElement('div')
  cardContainer.className = 'cardContainer'

  const card = document.createElement('div');
  card.id = 'songCard';
  card.className = 'card';

  const cardTitle = document.createElement('div');
  cardTitle.innerHTML = `
    <h2>${title} - ${year}</h2>
  `
  card.appendChild(cardTitle)

  const songFrame = document.createElement('div');
  songFrame.id = 'songFrame';
  songFrame.innerHTML = `<iframe src="${url}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  card.appendChild(songFrame);

  cardContainer.appendChild(card)

  document.body.appendChild(cardContainer);
};


window.card = (song) => {
  Card(song)
}
