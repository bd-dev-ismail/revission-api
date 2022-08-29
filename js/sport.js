const loadSport = (search) =>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySport(data.player));
}
const displaySport = teams =>{
    const sportContainer = document.getElementById("sport-container");
    sportContainer.innerHTML = '';
    teams.forEach(element => {
        // console.log(element)
        const teamDiv = document.createElement('div');
        teamDiv.classList.add('col');
        teamDiv.innerHTML = `
        <div onclick="loadDetail(${element.idPlayer})" class="card">
        <img src="${
          element.strThumb ? element.strThumb : "No Images Found"
        }" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Player Name: ${element.strPlayer}</h5>
            <p class="card-text">Team Name: ${element.strTeam}</p>
            <p>From: ${element.strNationality}</p>
        </div>
        </div>
        `;
        sportContainer.appendChild(teamDiv);
    });
}
const loadSearch = () =>{
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    searchField.value = '';
    loadSport(searchText);
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'none';
}
const loadDetail = player =>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${player}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayDetail(data.players[0]));
}
const displayDetail = playerInfo =>{
    // console.log(playerInfo)
    const detailContainer = document.getElementById("detail-container");
    detailContainer.innerHTML = '';
    const detailDiv = document.createElement('div')
    detailDiv.classList.add('card')
    detailDiv.innerHTML = `
    <img src="${playerInfo.strThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${playerInfo.strPlayer}</h5>
        <p class="card-text">${playerInfo.strTeam}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    detailContainer.appendChild(detailDiv)
}
// loadSport('') ;