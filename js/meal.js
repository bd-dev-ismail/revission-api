const loadMeals = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayMeals(data.meals));
}
const displayMeals = meals =>{
    const mealsContainer = document.getElementById("mealdb-container");
    mealsContainer.innerText = '';
    meals.forEach( meal =>{
        console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="col">
            <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                </div>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv)
    })
};
const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    console.log(searchText);
    loadMeals(searchText);
}

const loadMealDetail = (idMeal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayMealDetail(data.meals[0]));
    // console.log(url)
}

const displayMealDetail = mealInfo =>{
    console.log(mealInfo)
    const detailContainer  = document.getElementById('detail-container');
    detailContainer.innerHTML = '';
    const detailDiv = document.createElement('div');
    detailDiv.classList.add('card');
    detailDiv.innerHTML = `
    <img src="${mealInfo.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${mealInfo.strMeal}</h5>
        <p class="card-text">Food Area: ${mealInfo.strArea}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    detailContainer.appendChild(detailDiv)
} 
loadMeals('')