// on prend le id et en cherche dans le deuxieme page pour les memes info avec le meme id dans le url
const params = new URLSearchParams(window.location.search);
const movieId = params.get('id');
const movieDetails = document.getElementById('movie-details');




//creer le classe avec les extras information pour aficher quand on click sur le butto dans la premiere page,creer le constructor

class Movie {
  constructor(title, duration, description, video) {
    this.title = title;
    this.duration = duration;
    this.description = description;
    this.video = video;
  }
}

const movies = [
  new Movie("Jumanji", "1h 3", "Le destin de quatre lycéens en retenue bascule lorsqu’ils sont aspirés dans le monde de Jumanji. Après avoir découvert une vieille console contenant un jeu vidéo dont ils n’avaient jamais entendu parler, les quatre jeunes se retrouvent mystérieusement propulsés au cœur de la jungle de Jumanji, dans le corps de leurs avatars. Ils vont rapidement découvrir que l’on ne joue pas à Jumanji, c’est le jeu qui joue avec vous… Pour revenir dans le monde réel, il va leur falloir affronter les pires dangers et triompher de l’ultime aventure. Sinon, ils resteront à jamais prisonniers de Jumanji…" ,"/VIDEOS/Jumanji Bienvenue dans la jungle - Bande-annonce 1 - VF.mp4" ),
  new Movie("The Journey 2",  "1h 30", "Quatre ans après son voyage au centre de la Terre, Sean (Josh Hutcherson), garçon difficile, capte un mystérieux signal envoyé par son grand-père Alexander Anderson (Michael Caine), disparu depuis plusieurs années. Avec l'aide de son beau-père, Hank Parson (Dwayne Johnson), Sean parvient à décrypter le message ce qui lui permet de découvrir la position exacte de l'Île mystérieuse décrite par Jules Verne dans son roman. Sean annonce alors son intention de partir aux Palaos pour rechercher l'île. Son beau-père, qui ne croit pas à cette histoire d'île, décide néanmoins de saisir l'occasion de ce voyage pour se rapprocher de son beau-fils. Arrivés aux Palaos, Hank et Sean recrutent le pilote d'hélicoptère Gabato (Luis Guzmán) et sa fille Kailani (Vanessa Hudgens) pour les conduire à l'emplacement supposé de l'île, une région balayée par d'incessantes tempêtes et où aucun autre habitant des Palaos n'ose s'aventurer.","/VIDEOS/Journey To The Center Of The Earth HD Trailer.mp4"),
  new Movie("The Hobbit", "2h 49", "Bilbon Sacquet, oncle de Frodon, est un hobbit comme les autres : il évite le danger, l'action, l'aventure ainsi que les autres races que les hobbits. Il apprécie le plaisir simple de se sentir bien au chaud dans sa demeure, mais un soir, treize nains (Thorin et ses compagnons) font leur entrée chez lui, accompagnés du magicien Gandalf le Gris. Ce dernier lui propose de les suivre pour un long et dangereux voyage vers la Montagne Solitaire où se trouve un trésor gardé par le redoutable Smaug qui a pris Erebor. Bien que Bilbon se désintéresse dans un premier temps de ce voyage, les nains et Gandalf finissent par le convaincre de les accompagner.Lors de leur périlleux voyage, ils rencontrent de nombreuses difficultés, et participent à la bataille des Cinq Armées. Par accident, Bilbon croise la route de la créature nommée Gollum et s'empare de son trésor, un anneau magique qui permet de devenir invisible ce qui lui permettra par moments de mieux aider ses amis et de réussir sa mission.","/VIDEOS/The Hobbit Official Trailer .mp4"),
  new Movie("Lord of The Rings",  "2h 58", "Sauron, le Seigneur des Ténèbres, a réuni tous les Anneaux de Pouvoir - les moyens par lesquels il a l'intention de gouverner la Terre du Milieu. Tout ce qui lui manque dans ses plans de domination est l'Anneau Unique - l'anneau qui les gouverne tous - qui est tombé entre les mains du hobbit, Bilbo Baggins. Dans un village endormi de la Comté, le jeune Frodo Baggins se retrouve face à une tâche immense, alors que son vieux cousin Bilbo lui confie l'Anneau. Frodon doit quitter sa maison et faire un voyage périlleux à travers la Terre du Milieu jusqu'aux Cracks of Doom, là pour détruire l'Anneau et déjouer le Seigneur des Ténèbres dans son dessein diabolique. Imprégné d'une magie et d'un autre monde inégalés, sa fantaisie radicale a touché le cœur des jeunes et des moins jeunes.","/VIDEOS/The Lord of the Rings The Fellowship of the Ring Official Trailer .mp4"),
  new Movie("Assassin's Creed",  "1h 56", "Grâce à une technologie révolutionnaire qui libère la mémoire génétique, Callum Lynch revit les aventures de son ancêtre Aguilar, dans l’Espagne du XVe siècle.","/VIDEOS/Assassin's Creed Mirage Trailer d'annonce [OFFICIEL] VF .mp4"),
  new Movie("Creed",  "2h 14", "Adonis Johnson n'a jamais connu son père, le célèbre champion du monde poids lourd Apollo Creed décédé avant sa naissance.","/VIDEOS/Creed - Official Trailer [HD].mp4")
];



// boucle dans le tableau des films pour trouver le film avec le même ID
let movie;
for (let i = 0; i < movies.length; i++) {
  if ('movie-' + i === movieId) {
    movie = movies[i];
    break;
  }
}

// crée les éléments HTML pour afficher les détails du film
const duration = document.createElement('h3');
duration.textContent = movie.duration;
const title = document.createElement('h1');
title.textContent = movie.title;
const description = document.createElement('p');
description.textContent = movie.description;

// crée l'élément vidéo
const video = document.createElement('video');
video.src = movie.video;
video.controls = true;

// injecte les éléments dans la div movie-details
movieDetails.appendChild(video);
movieDetails.appendChild(title);
movieDetails.appendChild(duration);
movieDetails.appendChild(description);





















// movie-details.js

// get the movie ID from the URL query string

/*

class Movie {
  constructor(title, description, video) {
    this.title = title;
    this.description = description;
    this.video = video;
  }
}
//on cree une   array de objects aves les films et les info dedans
const movies = [
  new Movie("Jumanji",  "Le destin de quatre lycéens en retenue bascule lorsqu’ils sont aspirés dans le monde de Jumanji,Dwayne 'THE ROCK' JOHNSON." ,"/VIDEOS/Jumanji Bienvenue dans la jungle - Bande-annonce 1 - VF.mp4" ),
  new Movie("The Journey",  "Sean Anderson, 17 ans, reçoit un message de détresse codé en provenance d'une île mystérieuse dont personne n'a jamais entendu parler…","/VIDEOS/Journey To The Center Of The Earth HD Trailer.mp4"),
  new Movie("The Hobbit",  "Dans UN VOYAGE INATTENDU, Bilbon Sacquet cherche à reprendre le Royaume perdu des Nains d'Erebor, conquis par le redoutable dragon Smaug","/VIDEOS/The Hobbit Official Trailer .mp4"),
  new Movie("Lord of The Rings", "Dans ce chapitre de la trilogie, le jeune et timide Hobbit, Frodon Sacquet, hérite d'un anneau.","/VIDEOS/The Lord of the Rings The Fellowship of the Ring Official Trailer .mp4"),
  new Movie("Assassin's Creed",  "Grâce à une technologie révolutionnaire qui libère la mémoire génétique, Callum Lynch revit les aventures de son ancêtre Aguilar, dans l’Espagne du XVe siècle.","/VIDEOS/Assassin's Creed Mirage Trailer d'annonce [OFFICIEL] VF .mp4"),
  new Movie("Creed", "Ryan Coogler", "Adonis Johnson n'a jamais connu son père, le célèbre champion du monde poids lourd Apollo Creed décédé avant sa naissance.","/VIDEOS/Creed - Official Trailer [HD].mp4")
];
const params = new URLSearchParams(window.location.search);
const movieId = params.get('id');
const movieDetails = document.getElementById('movie-details');

// loop through the movies array to find the movie with the same ID
let movie;
for (let i = 0; i < movies.length; i++) {
  if ('movie-' + i === movieId) {
    movie = movies[i];
    break;
  }
}

// create the HTML elements to display the movie details
const title = document.createElement('h1');
title.textContent = this.title;
const director = document.createElement('p');
director.textContent = 'Directed by ' + this.director;
const description = document.createElement('p');
description.textContent = this.description;

// inject the elements into the movie-details div
movieDetails.appendChild(title);
movieDetails.appendChild(director);
movieDetails.appendChild(description);


*/



























/*

//Creer une clase avec une constructor
class Movie {
  constructor(title, description, video) {
    this.title = title;
    this.description = description;
    this.video = video;
  }
}
//on cree une   array de objects aves les films et les info dedans
const movies = [
  new Movie("Jumanji",  "Le destin de quatre lycéens en retenue bascule lorsqu’ils sont aspirés dans le monde de Jumanji,Dwayne 'THE ROCK' JOHNSON." ,"/VIDEOS/Jumanji Bienvenue dans la jungle - Bande-annonce 1 - VF.mp4" ),
  new Movie("The Journey",  "Sean Anderson, 17 ans, reçoit un message de détresse codé en provenance d'une île mystérieuse dont personne n'a jamais entendu parler…","/VIDEOS/Journey To The Center Of The Earth HD Trailer.mp4"),
  new Movie("The Hobbit",  "Dans UN VOYAGE INATTENDU, Bilbon Sacquet cherche à reprendre le Royaume perdu des Nains d'Erebor, conquis par le redoutable dragon Smaug","/VIDEOS/The Hobbit Official Trailer .mp4"),
  new Movie("Lord of The Rings", "Dans ce chapitre de la trilogie, le jeune et timide Hobbit, Frodon Sacquet, hérite d'un anneau.","/VIDEOS/The Lord of the Rings The Fellowship of the Ring Official Trailer .mp4"),
  new Movie("Assassin's Creed",  "Grâce à une technologie révolutionnaire qui libère la mémoire génétique, Callum Lynch revit les aventures de son ancêtre Aguilar, dans l’Espagne du XVe siècle.","/VIDEOS/Assassin's Creed Mirage Trailer d'annonce [OFFICIEL] VF .mp4"),
  new Movie("Creed", "Ryan Coogler", "Adonis Johnson n'a jamais connu son père, le célèbre champion du monde poids lourd Apollo Creed décédé avant sa naissance.","/VIDEOS/Creed - Official Trailer [HD].mp4")
];


const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get(id);

// Find the corresponding movie object
//const movie = movies.find(m => m.title.replace(/\s+/g, '-').toLowerCase() === movieId.toLowerCase());



if (movie) {
	// Update the video source and title
	const video = document.querySelector('film-container');
	video.src = this.video;
	document.querySelector('h1').textContent = this.title;
  
}

*/ /*

for (let i = 0; i < movies.length; i++) {
  const div1 = document.createElement("div");
  div1.id = "movie-" + i;
*/
/*
  // creer les elements pour mettre tous les details pour les films dans les div avec le classe card
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const video = document.createElement("video"); 

*/
/*
  // mettre les details de Movies dans les elements cree 
  title.textContent = movies[i].title;
 
//duration.textContent = "Duration: " + ( movies[i].duration )+ " minutes";
  description.textContent ="Description : " + movies[i].description;

  //le path pour les videos
  video.src = movies[i].video;
  video.controls = true; //activer les cotrols pour les videos

// append tous les elemns dans le card
  div1.appendChild(title);
  div1.appendChild(video);
  div1.appendChild(description);
 
//mettre les cards que on a cree dans le div avec le class container
  body.appendChild(div1);
}





/*

// get the id parameter value from URL 
const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("movie-" + i);
// check if the id parameter exists
if (id !== null && id < movies.length) {

    // select the relevant movie from the movies array based on the id 
     const movieDetails = movies[i];
     movieDetails.id = "movie-" + i ;
    // display the movie details on the web page   
      const movieTitle = document.createElement("h1");

     movieTitle.textContent = this.title;

     document.querySelector("body").appendChild(movieTitle);

     const movieDescription = document.createElement("p");

    movieDescription.textContent = this.description;

    document.querySelector("body").appendChild(movieDescription);

       } else {
        // handle invalid id parameter 
         const errorText = document.createElement("p");

          errorText.textContent = "Invalid movie ID";

           document.querySelector("body").appendChild(errorText);
        }
        */