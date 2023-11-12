/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Bruno Amaral
 *      Student ID: 143766228
 *      Date:       November 13, 2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

const navMenu = document.getElementById("menu");

function handleNavButton(artist) {
  const button = document.createElement("button");
  button.textContent = artist.name;
  button.addEventListener("click", () => {
    musicList(artist.artistId);
    const selectedArtist = document.getElementById("selected-artist");
    if (selectedArtist) {
      selectedArtist.textContent = artist.name;

      const links = artist.urls.map((link) => {
        const icon = document.createElement("i");
        icon.classList.add(link.iconClass);
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.appendChild(icon);
        return anchor;
      });

      links.forEach((link) => selectedArtist.appendChild(link));
    } else {
      const defaultText = document.createElement("h2");
      defaultText.id = "selected-artist";
      defaultText.textContent = "Chose a Artist";
      document.querySelector("main").prepend(defaultText);
    }
  });

  navMenu.appendChild(button);
}

function resetSelectedArtist() {
  const selectedArtistElement = document.getElementById("selected-artist");
  if (selectedArtistElement) {
    selectedArtistElement.textContent = "Chose a Artist";
  } else {
    const defaultText = document.createElement("h2");
    defaultText.id = "selected-artist";
    defaultText.textContent = "Chose a Artist";
    document.querySelector("main").prepend(defaultText);
  }
}

function musicList(artistId) {
  const tableBody = document.getElementById("songs");
  tableBody.innerHTML = "";

  const artistSong = songs.filter((song) => song.artistId === artistId);

  artistSong.forEach((song) => {
    const newRow = document.createElement("tr");

    const songName = document.createElement("td");
    songName.textContent = song.title;

    const yearRecorded = document.createElement("td");
    yearRecorded.textContent = song.year;

    const duration = document.createElement("td");
    const durationInMinutes = Math.floor(song.duration / 60);
    const durationInSeconds = song.duration % 60;
    duration.textContent = `${durationInMinutes}:${durationInSeconds.toString().padStart(2, "0")}`;

    newRow.appendChild(songName);
    newRow.appendChild(yearRecorded);
    newRow.appendChild(duration);

    tableBody.appendChild(newRow);
  });
}

artists.forEach((artists) => {
  handleNavButton(artists);
});

resetSelectedArtist();

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");
