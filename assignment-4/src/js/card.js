const Card = () => {
  //Creating the div for a card
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.display = "none";

  //Creating the content for a card inside the div
  const header = document.createElement("header");

  const title = document.createElement("h2");

  const btClose = document.createElement("i");
  btClose.classList.add("ri-close-circle-fill");

  const youtube = document.createElement("iframe");
  youtube.width = "560";
  youtube.height = "315";
  youtube.src = "#";
  youtube.title = "YouTube video player";
  youtube.frameborder = "0";
  youtube.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  youtube.allowfullscreen = true;

  const info = document.createElement("section");

  const detail = document.createElement("aside");

  const year = document.createElement("p");

  const explicit = document.createElement("p");

  const duration = document.createElement("p");

  const footer = document.createElement("footer");

  const artist = document.createElement("h3");

  header.appendChild(title);
  header.appendChild(btClose);

  detail.appendChild(year);
  detail.appendChild(explicit);
  detail.appendChild(duration);

  card.appendChild(header);
  card.appendChild(youtube);
  card.appendChild(info);
  card.appendChild(detail);
  card.appendChild(footer);

  footer.appendChild(artist);

  return card;
};

const card = Card();
document.body.appendChild(card);
