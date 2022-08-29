/**
 * randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে। 


 */
const loadUser = () =>{
    fetch("https://randomuser.me/api/?results=50")
    .then(res => res.json())
    .then(data => displayUser(data.results))
}
const displayUser = users =>{
    const userContainer = document.getElementById("user-container");
    users.forEach(element => {
        console.log(element)
        const userDiv = document.createElement('div');
        userDiv.classList.add('card');
        userDiv.innerHTML = `
        <img src="${element.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.name.title} ${element.name.first}</h5>
            <p class="card-text">Location; ${element.location.city} ${element.location.state} ${element.location.country}</p>
            <p>${element.phone}</p>
            <a href="#" class="btn btn-primary">See More</a>
        </div>
        `;
        userContainer.appendChild(userDiv)
    });
}

loadUser();