const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

let genero = {};

for (let i = 0; i < tracks.length; i++){
    if(genero[tracks[i].genre]){
        genero[tracks[i].genre].push(tracks[i].title);
    } else {
        genero[tracks[i].genre] = [tracks[i].title];
    }
}

console.log(genero);



















/* let resultado = {};


for (let i = 0; i < starWarsMovies.length; i++){
  let decada = Math.floor(starWarsMovies[i].releaseYear / 10) * 10;

  if(resultado[decada]){
    resultado[decada].push(starWarsMovies[i].title);
  } else {
    resultado[decada] = [starWarsMovies[i].title];
  }
} */