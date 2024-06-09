document.querySelector("button").addEventListener("click",result);

async function result(){
    try {

        var test = document.getElementById("text").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${test}`);
        var res = await data.json();
         
        console.log(res[0]);
       
        var searchContainer = document.getElementById("search_result");
        searchContainer.innerHTML = "";

        
        var search_result = document.createElement("div");


        search_result.innerHTML +=` 
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${res[0].show.image.medium}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title text-center"><b>${res[0].show.name}</b></h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><b>Genere    : </b>${res[0].show.genres}</li>
    <li class="list-group-item"><b>Language    : </b>${res[0].show.language}</li>
    <li class="list-group-item"><b>Premiered : </b>${res[0].show.premiered}</li>
    <li class="list-group-item"><b>Rating    : </b>${res[0].show.rating.average} / 10 </li>
    <li class="list-group-item"><b>Runtime   : </b>${res[0].show.runtime} mins</li>
    <li class="list-group-item"><b>Show Schedule  : </b>Every ${res[0].show.schedule.days}, ${res[0].show.schedule.time}</li>
    <li class="list-group-item"><b>Official Site  : </b>${res[0].show.officialSite}</li>
    <li class="list-group-item"><b>Network   : </b>${res[0].show.network.name}</li>

  </ul>
  <div class="card-body">
  <p class="card-text">${res[0].show.summary}.</p>
  </div>
</div>
`;


searchContainer.appendChild(search_result);



    } catch (error) {
        console.log(error);
    }
}