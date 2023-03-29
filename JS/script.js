  //Creer une clase avec une constructor
   
   class Movie {
  constructor(title, director, duration, watched, description, thumbnail) {
    this.title = title;
    this.director = director;
    this.duration = duration;
    this.watched = watched;
    this.description = description;
    this.thumbnail = thumbnail;
  }
}


//on cree une   array de objects aves les films et les info dedans
const movies = [
  new Movie( "Jumanji","Jake Kasdan", 123,123, "Le destin de quatre lycéens en retenue bascule lorsqu’ils sont aspirés dans le monde de Jumanji,Dwayne 'THE ROCK' JOHNSON.",
    "/THUMBNAIL/jumanji.jpg"),
  new Movie("The Journey","Brad Peyton", 93,60, "Sean Anderson, 17 ans, reçoit un message de détresse codé en provenance d'une île mystérieuse dont personne n'a jamais entendu parler…",
    "/THUMBNAIL/Journey2.jpg"
  ),
  new Movie( "The Hobbit","Peter Jackson", 169,60,"Dans UN VOYAGE INATTENDU, Bilbon Sacquet cherche à reprendre le Royaume perdu des Nains d'Erebor, conquis par le redoutable dragon Smaug",
    "/THUMBNAIL/thehobbit.jpg"
  ),
  new Movie( "Lord of The Rings", "Peter Jackson", 178, 120, "Dans ce chapitre de la trilogie, le jeune et timide Hobbit, Frodon Sacquet, hérite d'un anneau.",
    "/THUMBNAIL/lordoftherings.jpg"
  ),
  new Movie( "Assassin's Creed", "Justin Kurzel", 116, 20, "Grâce à une technologie révolutionnaire qui libère la mémoire génétique, Callum Lynch revit les aventures de son ancêtre Aguilar, dans l’Espagne du XVe siècle.",
    "/THUMBNAIL/assassinscreed.jpg"
  ),
  new Movie(
    "Creed","Ryan Coogler", 134, 100, "Adonis Johnson n'a jamais connu son père, le célèbre champion du monde poids lourd Apollo Creed décédé avant sa naissance.",
    "/THUMBNAIL/creed.jpg"
  )
];

console.log(movies);

const container = document.querySelector(".movie-container");

for (let i = 0; i < movies.length; i++) {
  const card = document.createElement("div");
  card.classList.add("movie-card");
  card.id = "movie-" + i;

  console.log(card.id);

  const title = document.createElement("h2");
  const director = document.createElement("p");
  const watched = document.createElement("p");
  const duration = document.createElement("p");
  const description = document.createElement("p");
  const image = document.createElement("img");

  title.textContent = movies[i].title;
  director.textContent = "From : " + movies[i].director;
  watched.textContent =
    "Percentage watched : " +
    Math.round((movies[i].watched / movies[i].duration) * 100) +
    "%";

  let durationInMinutes = movies[i].duration;
  let hours = Math.floor(durationInMinutes / 60);
  let minutes = durationInMinutes % 60;

  duration.textContent = "Duration: " + hours + "h " + minutes ;
  description.textContent = "Description : " + movies[i].description;
  
  // set the image source to the path of the image you want to use as a thumbnail
  image.src = movies[i].thumbnail;

  // set the width and height of the image to fit the card
  image.width = "300";
  image.height = "250";

  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(director);
  card.appendChild(duration);
  card.appendChild(watched);
  card.appendChild(description);

  container.appendChild(card);
}

// sélectionne la carte
for (let i = 0; i < movies.length; i++) {
  const card = document.querySelector("#movie-" + i);
  console.log(card.id);

  // crée l'élément bouton
  const button = document.createElement("button");
  button.textContent = "Go Watch";

  // ajoute addEventListener au bouton
  button.addEventListener("click", function () {
    // crée l'URL avec l'identifiant  du film
    const url =
      window.location.origin + "/HTML/movie.html?id=movie-" + i;
    // ouvre le lien dans le même onglet
    window.location.href = url;
  });

  // ajoute le bouton à la carte
  card.appendChild(button);
}

















/*


 class Movie {
    constructor(title, director, duration, watched, description, video) {
      this.title = title;
      this.director = director;
      this.duration = duration;
      this.watched = watched;
      this.description = description;
      this.video = video;
    }
  }

  const movies = [
    new Movie("Jumanji", "Jake Kasdan", 123, 123, "Le destin de quatre lycéens en retenue bascule lorsqu’ils sont aspirés dans le monde de Jumanji,Dwayne 'THE ROCK' JOHNSON." ,"/VIDEOS/Jumanji Bienvenue dans la jungle - Bande-annonce 1 - VF.mp4" ),
    new Movie("The Journey", "Brad Peyton", 93, 60, "Sean Anderson, 17 ans, reçoit un message de détresse codé en provenance d'une île mystérieuse dont personne n'a jamais entendu parler…","/VIDEOS/Journey To The Center Of The Earth HD Trailer.mp4"),
    new Movie("The Hobbit", "Peter Jackson", 169, 60, "Dans UN VOYAGE INATTENDU, Bilbon Sacquet cherche à reprendre le Royaume perdu des Nains d'Erebor, conquis par le redoutable dragon Smaug","/VIDEOS/The Hobbit Official Trailer .mp4"),
    new Movie("Lord of The Rings", "Peter Jackson", 178, 120, "Dans ce chapitre de la trilogie, le jeune et timide Hobbit, Frodon Sacquet, hérite d'un anneau.","/VIDEOS/The Lord of the Rings The Fellowship of the Ring Official Trailer .mp4"),
    new Movie("Assassin's Creed", "Justin Kurzel", 116, 20, "Grâce à une technologie révolutionnaire qui libère la mémoire génétique, Callum Lynch revit les aventures de son ancêtre Aguilar, dans l’Espagne du XVe siècle.","/VIDEOS/Assassin's Creed Mirage Trailer d'annonce [OFFICIEL] VF .mp4"),
    new Movie("Creed", "Ryan Coogler", 134, 100, "Adonis Johnson n'a jamais connu son père, le célèbre champion du monde poids lourd Apollo Creed décédé avant sa naissance.","/VIDEOS/Creed - Official Trailer [HD].mp4")
  ];
  
   console.log(movies);

  //afcher les objects dans la console
  for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title + ": " + movies[i].duration + " minutes");
  }
  

  
  for (let i = 0; i < movies.length; i++) {
    const percentageWatched = Math.round((movies[i].watched / movies[i].duration) * 100);//trouver le percentage duree/vissione
    let emoji = "" ;                      //pour mettre des emoji en condition du la percentage (good ,sad etc)
     if (percentageWatched === 100) { 
       emoji = " "; 
      } else if (percentageWatched >= 75) { 
         emoji = " "; 
        } else if (percentageWatched >= 50) { 
          emoji = " ";
          } else if (percentageWatched >= 25) {
             emoji = " ";
             } else {  emoji = " ";} 
             
             console.log(movies[i].title + ": " + movies[i].duration + " minutes" + " (" + percentageWatched + "% watched " + emoji + ")");
            }


  const container = document.querySelector(".movie-container");
  

//creer le divs
  for (let i = 0; i < movies.length; i++) {
    const card = document.createElement("div");
    card.classList.add("movie-card");  // mettre les class pour les cards
    card.id = "movie-"+ i;  // mettre le id diff pour les cards

    console.log(card.id);


    // creer les elements pour mettre tous les details pour les films dans les div avec le classe card
    const title = document.createElement("h2");
    const director = document.createElement("p");
    const watched = document.createElement("p");
    const duration = document.createElement("p");
    const description = document.createElement("p");
    const video = document.createElement("video"); 
  


    // mettre les details de Movies dans les elements cree 
    title.textContent = movies[i].title;
    director.textContent = "From : " + movies[i].director;
    watched.textContent =
      "Percentage watched : " +
      Math.round((movies[i].watched / movies[i].duration) * 100) +
      "%";




    // turner les min en h et min
      let durationInMinutes = movies[i].duration;
      let hours = Math.floor(durationInMinutes / 60);
      let minutes = durationInMinutes % 60;
      
      duration.textContent = "Duration: " + hours + "h " + minutes + "min";
      

    //duration.textContent = "Duration: " + ( movies[i].duration )+ " minutes";
    description.textContent ="Description : " + movies[i].description;
  



    //le path pour les videos
    video.src = movies[i].video;
    video.controls = true; //activer les cotrols pour les videos
  



// append tous les elemns dans le card
    card.appendChild(title);
    card.appendChild(video);
    card.appendChild(director);
    card.appendChild(duration);
    card.appendChild(watched);
    card.appendChild(description);
   
    



  //mettre les cards que on a cree dans le div avec le class container
    container.appendChild(card);
  }



  console.log("============================loggggg================================================================================");




// selectioner le card
for(let i = 0; i < movies.length; i++) 
{ const card = document.querySelector("#movie-" + i);
console.log(card.id);
// creer button el  
const button = document.createElement("button");
 button.textContent = "Go Watch";
 // ajouter event listener au button 
 button.addEventListener("click", function() {
// creer url avec id + titre du film     
 const url = window.location.origin + '/HTML/movie.html?id=movie-' + i;
  // ouvrir le lien dans le meme tab   
window.location.href = url;
 });
// append le button sur le card   
card.appendChild(button);
};






*/




/*
// selectioner le card
  for (let i = 0; i < movies.length; i++) { 
  const card = document.querySelector("#movie-" + i);

   // creer button el
   const button = document.createElement("button");
   button.textContent = "Go Watch"; 

   // ajouter event listener au button
    button.addEventListener("click", function() {

     
       // creer url avec title + id + description du film 
      const url = window.location.origin +  "/HTML/movie" + "-" + card.id ; 


      // ouvrir le lien dans le meme tab 
      window.location.href = url  
       });

        // append le button sur le card 
       card.appendChild(button);
    }
    

  /*

// ajouter button a chaque card de film avec for loop
for (let i = 0; i < movies.length; i++) {
  const card = document.querySelector("#movie-card-" + i);
  
  // creer button el
  const button = document.createElement("button");
  button.textContent = "More info";
  
  // ajouter event listener au button
  button.addEventListener("click", function() {
    // creer url avec title + id + description du film
    const url = window.location.origin + "/movie/"+ movies[i].description + movies[i].title.replace(/ /g, "-") + "-" + i;
    
    // ouvrir une nuveau tab avec le URL
    window.open(url, "_blank");
  });
  
  // append le button sur le card
  card.appendChild(button)
}


*/




  /*
  function addMovieCardIds() {
    let movieCards = document.querySelectorAll('movie-card');
    for (let i = 0; i < movieCards.length; i++) {
      
      
    }
  }

*/


/*
  const containerDiv = document.querySelector('.m');
  for (var i = 0; i < 5; i++) {
    var newDiv = document.createElement('div');
    newDiv.className = 'inner-div';
    newDiv.id = 'inner-div-' + i; // concatenate loop variable with static string
    containerDiv.appendChild(newDiv);
  }
  

/*

const parentDiv = document. getElementsByClassName('movie-container');


const childDivs = parentDiv.getElementsByClassName('movie-card');


for (let i = 0; i < childDivs.length; i++) {
  childDivs[i].setAttribute('id', 'childDiv-' + i);
}





  /*
  for (let i = 0; i < movies.length; i++) {
    const card = document.createElement("div");
    card.classList.add("movie-card");
  
    const title = document.createElement("h2");
    const director = document.createElement("p");
    const watched = document.createElement("p");
    const duration = document.createElement("p");
    const description = document.createElement("p");
  
    title.textContent = movies[i].title;
    director.textContent = "Director: " + movies[i].director;
    watched.textContent = "Percentage watched: " + Math.round((movies[i].watched / movies[i].duration) * 100) + "%";
    duration.textContent = "Duration: " + movies[i].duration + " minutes";
    description.textContent = movies[i].description;
  
    card.appendChild(title);
    card.appendChild(director);
    card.appendChild(watched);
    card.appendChild(duration);
    card.appendChild(description);
  
    container.appendChild(card);
  }
 
  
  const container = document.querySelector(".movie-container");
  
  for (let i = 0; i < movies.length; i++) {
    const card = document.createElement("div");
    card.classList.add("movie-card");
  
    const title = document.createElement("h2");
    const director = document.createElement("p");
    const watched = document.createElement("p");
    const duration = document.createElement("p");
    const description = document.createElement("p");
    const video = document.createElement("video"); // create new video element
  
    title.textContent = movies[i].title;
    director.textContent = "Director: " + movies[i].director;
    watched.textContent =
      "Percentage watched: " +
      Math.round((movies[i].watched / movies[i].duration) * 100) +
      "%";
    duration.textContent = "Duration: " + movies[i].duration + " minutes";
    description.textContent = movies[i].description;
  
    // set the source of the video element to the videoPath specified in the Movie object
    video.src = movies[i].videoPath;
    video.controls = true; // add controls to the video player
  
    card.appendChild(title);
    card.appendChild(director);
    card.appendChild(watched);
    card.appendChild(duration);
    card.appendChild(description);
    card.appendChild(video); // append the video element to the card
  
    container.appendChild(card);
  }
  
  */

/*
  const movies = [
    { title: "Movie 1", videoSrc: "url-to-your-video-1.mp4" },
    { title: "Movie 2", videoSrc: "url-to-your-video-2.mp4" },
    { title: "Movie 3", videoSrc: "url-to-your-video-3.mp4" }
  ];
  
  const movieCardsContainer = document.getElementById("movie-cards-container");
  
  movies.forEach(function(movie) {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = '<video width="100%" height="auto" controls><source src="' + movie.videoSrc + '" type="video/mp4"></video><h2>' + movie.title + '</h2>';
    movieCardsContainer.appendChild(movieCard);
  });
  
  
  */
  
