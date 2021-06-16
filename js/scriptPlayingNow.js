let request = new XMLHttpRequest();
request.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=cc4f52faa1832bb06186f10c2ef88f2b&language=en-US&page=1");
request.send();

//https://api.themoviedb.org/3/movie/76341?api_key=cc4f52faa1832bb06186f10c2ef88f2b


let movies = [];
request.addEventListener("readystatechange", function(){
     if(request.readyState == 4){
        movies = JSON.parse(request.responseText);
        console.log(movies.results);
       showMoviesPosters(movies.results);
     }
});

function showMoviesPosters(data){
   let htmlData = document.querySelector(".row");
    let toHTML = "";
    data.forEach((d)=>{
       toHTML +=`
       <div class="col-lg-4">
            <div class="card mb-3 h-card">
               <img src="https://image.tmdb.org/t/p/w500${d.backdrop_path}" class="card-img-top" alt="${d.title} movie">
               <div class="card-body">
                  <h5 class="card-title">${d.original_title}</h5>
                  <p class="card-text">${d.overview}</p>
                  <p class="card-text bg-dark text-white rounded p-1">Release Date: ${d.release_date}</p>
               </div>
            </div>
       </div>
                `; 
    });
 
   //  console.log(toHTML) 
    
    htmlData.innerHTML = toHTML;
}


