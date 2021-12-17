let songs = [
    {
      trackId: 1111,
      title: `We didn't start the fire`,
      artist: `Billy Joel`,
      releaseDate: 1989,
      genre: `rock`,
      duration: 4.47,
      path: `../music/1111.mp3`,
      cover: '../images/1111.jpg'
    }, {
      trackId: 1112,
      title: `Tainted love`,
      artist: `Soft Cell`,
      releaseDate: 1981,
      genre: `rock`,
      duration: 2.33,
      path: `../music/1112.mp3`,
      cover: '../images/1112.jpg'
    }, {
      trackId: 1113,
      title: `Venus`,
      artist: `Shocking Blue`,
      releaseDate: 1969,
      genre: `pop`,
      duration: 3.07,
      path: `../music/1113.mp3`,
      cover: '../images/1113.jpg'
    }, {
      trackId: 1114,
      title: `Season of the witch`,
      artist: `Donovan`,
      releaseDate: 1966,
      genre: `rock`,
      duration: 4.53,
      path: `../music/1114.mp3`,
      cover: '../images/1114.jpg'
    }, {
      trackId: 1115,
      title: `Wicked`,
      artist: `mansionz`,
      releaseDate: 2017,
      genre: `pop`,
      duration: 3.36,
      path: `../music/1115.mp3`,
      cover: '../images/1115.jpg'
    }, {
      trackId: 1116,
      title: `Proof`,
      artist: `Coldplay`,
      releaseDate: 2005,
      genre: `pop`,
      duration: 4.10,
      path: `../music/1116.mp3`,
      cover: '../images/1116.jpg'
    }, {
      trackId: 1117,
      title: `Yellow love`,
      artist: `Citizen`,
      releaseDate: 2015,
      genre: `alternative`,
      duration: 3.41,
      path: `../music/1117.mp3`,
      cover: '../images/1117.jpg'
    }, {
      trackId: 1118,
      title: `Save yourself`,
      artist: `Kaleo`,
      releaseDate: 2016,
      genre: `alternative`,
      duration: 4.33,
      path: `../music/1118.mp3`,
      cover: '../images/1118.jpg'
    }, {
      trackId: 1119,
      title: `Dreamland`,
      artist: `Glass animals`,
      releaseDate: 2020,
      genre: `pop`,
      duration: 3.23,
      path: `../music/1119.mp3`,
      cover: '../images/1119.jpg'
    }, {
      trackId: 1120,
      title: `Don't worry`,
      artist: `the 1975`,
      releaseDate: 2020,
      genre: `alternative`,
      duration: 4.24,
      path: `../music/1120.mp3`,
      cover: '../images/1120.jpg'
    }
  ]

  const appendTrack = function(item) {
    document.querySelector('#tracks').innerHTML += `
    <article class="tracks">
        <header>
          <img class="album-cover-image" src="images/${item.cover}" alt="${item.title}">
          <h1 class="itemTitle">${item.title}</h1>
          <h2 class="itemArtist">${item.artist}</h2>
          <ul>
            <li class="genre">${item.genre}, ${item.releaseDate}</li>
            <li class="duration">${item.duration}</li>
          </ul>
        </header>
    `
  }

const filterForm = document.querySelector(`#trackFilter`)

const filterAndPrintTracks = function() {
const nameSearch = filterForm.querySelector(`#searchName`).value || ``
const maxDuration = Number(filterForm.querySelector(`#maxDuration`).value) || -1
document.querySelector(`#tracks`).innerHTML = ``

  songs
    .filter(item => item.duration <= maxDuration || maxDuration === -1)
    .filter(item => item.title.toUpperCase().includes(nameSearch.toUpperCase()))
    .forEach(appendTrack)
}
          
// When the <form> is submit
filterForm.addEventListener(`submit`, function(event) {
  // Stop the form from redirecting/refreshing
  event.preventDefault()

  // Collect the fields, filter, and output
  filterAndPrintTracks()
})

// When there's an "input" to the "Name" field
filterForm.querySelector(`#searchName`).addEventListener(`input`, function(event) {
    console.log(`input`, event.target.value)
    filterAndPrintTracks()
  })

    // When there's a "change" to the "Max Price" field
  filterForm.querySelector(`#maxDuration`).addEventListener(`change`, function(event) {
    console.log(`change`, event.target.value)
    filterAndPrintTracks()
  })
  
  // When the document has loaded
  window.addEventListener(`load`, function(event) {
    filterAndPrintTracks()
  })


