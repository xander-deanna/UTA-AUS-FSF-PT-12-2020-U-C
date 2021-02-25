// music should be an object with title, artist, and album properties
const music = {
  title: "I Write Sins Not Tragedies",
  artist: "Panic! At The Disco",
  album: "A Fever You Can't Sweat Out",
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
    <h2>Title: ${music.title}</h2>
    <h3>Artist: ${music.artist}</h3>
    <h3>Album: ${music.album}</h3>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

