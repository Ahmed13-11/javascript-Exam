let row = document.querySelector('.container .row')
let row2 =document.querySelector('#details .row')
let home = document.querySelector('#home')
let details = document.querySelector('#details')
let Loading_Screen = document.querySelector('.loading')
let searchScreen = document.querySelector('#search')
let search_home = document.querySelector('#search_home')
let contactSreen = document.querySelector('#contact')
let navSection = document.querySelector('#realnav')
let arrOfPages = [searchScreen , details , home,Loading_Screen , contactSreen , search_home]

window.onload=async()=> {
    await  genericRequestIntoHomePage('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    getPage("home")
   
}



function ShowMealsFromArray(result , searchflag=false){
    result.meals.forEach(meal => {

        var chosenrow = searchflag ? document.querySelector("#search_home .row") : row 
        
        chosenrow.innerHTML+=`
            <div class='meal col-3'     onclick="getmeals(${meal.idMeal})">
                <img src='${meal.strMealThumb}' alt="">
                <div class="after"><p class="fs-2 w-bold">${meal.strMeal}</p></div>
            </div>
    `
    });
   
}

async function getmeals(id){
    getPage("details")
    row2.innerHTML=""
    let data = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
    let result = await data.json();
    let meal = result.meals[0]
    let recips = ""

    for(let i=1 ; i<=20 ; i++){
        
        if(meal[`strMeasure${i}`]!=" " && meal[`strMeasure${i}`]!=""){
            recips += `<span class=" alert alert-info">${meal[`strMeasure${i}`]}</span>`
        }
    }
    row2.innerHTML+=`
    <div class="col-4">
        <img src='${meal.strMealThumb}' alt="" style="width:100%">
        <h1>${meal.strMeal}</h1>
    </div>
    <div class="col-8">
        <h1>Instructions</h1>
        <p>${meal.strInstructions}</p>
        <h2>Area : ${meal.strArea}</h2>
        <h2>Category : ${meal.strCategory}</h2>
        <h2>Recipes :</h2>
        <div class="recipes">
            ${recips}
        </div>
        <h2>Tags :</h2>
        <span style="display: block">${meal.strTags}</span>
        <a class="btn btn-primary" href='${meal.strSource}'>Source</a>
        <a class="btn btn-danger" href='${meal.strYoutube}'>Youtube</a>
    </div>

    `
}



 async function searchByName(str) { 

    await genericRequestIntoHomePage('https://www.themealdb.com/api/json/v1/1/search.php?s='+str , true);
    getPage("search","search_home")

}

async function genericRequestIntoHomePage(url , searchflag=false) { 
    if(!searchflag){

        getPage("loading" )
    }else{
        getPage("loading", "search")
    }
    let data = await fetch(url);
    let result = await data.json();
    row.innerHTML = ""
    ShowMealsFromArray(result , searchflag)
 }

async function SearchByFstLetter(str) { 
    document.querySelector("#search_home .row").innerHTML=""
   await genericRequestIntoHomePage('https://www.themealdb.com/api/json/v1/1/search.php?f='+str , true);

   getPage("search","search_home")

}

// async function getCategory(str){
//     let data = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+str );
//     let result = await data.json();
//     row.innerHTML = ""
//     ShowMealsFromArray(result)
// }

async function GrapCategories() { 
    getPage("loading")
    let data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    let result = await data.json();
    row.innerHTML = ""
    result.categories.forEach(categorie => {
        row.innerHTML+=`
            <div class='meal col-3' onclick="genericRequestIntoHomePage('https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie.strCategory}');getPage('home')">
                <img src='${categorie.strCategoryThumb}' alt="">
                <div class="after">
                <h2 class="fs-3 w-bold text-center">${categorie.strCategory}</h2>
                <h6 class=" w-bold py-3 text-center">${categorie.strCategoryDescription.substring(0,100)}</h6>
                </div>
            </div>
    `
    });
    getPage("home")

}

async function getMealsForArea(meal_area){
   await genericRequestIntoHomePage('https://www.themealdb.com/api/json/v1/1/filter.php?a='+meal_area);
   getPage("home")
}
async function GetAreas() { 
    getPage("loading")
    let data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    let result = await data.json();
    row.innerHTML = ""
    result.meals.forEach(area => {
        row.innerHTML+=`
        <div class="col-md-3  text-white">
            <div onclick="getMealsForArea('${area.strArea}')" class="rounded-2 text-center cursor-pointer">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h3>${area.strArea}</h3>
            </div>
        </div>
    `
    });
    getPage("home")
}

async function getMealsForIngredient(ing_name){
 await  genericRequestIntoHomePage('https://www.themealdb.com/api/json/v1/1/filter.php?i='+ing_name);
 getPage("home")
  
}

async function GetIngredients() { 
    getPage("loading")

    let data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    let result = await data.json();

    row.innerHTML = ""
    result.meals.forEach(ing => {
        row.innerHTML+=`
        <div class="col-md-3 text-white">
                <div onclick="getMealsForIngredient('${ing.strIngredient}')" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${ing.strIngredient}</h3>
                        <p>${ing.strDescription ? ing.strDescription.substring(0,100) : ""}</p>
                </div>
        </div>
    `
    });
    getPage('home')

}

function OpenMenu() { 
    document.querySelector(".navsider .firstdiv").classList.toggle("openMenu")

 }



  function getPage(){
    
    console.log([...arguments] , arrOfPages)
    arrOfPages.forEach(page => {
        page.style.display = "none"
        
        if([...arguments].includes(page.id)){
            if(page.id == "contact"){
                page.style.display="flex"
            }else{

                page.style.display="block"
            }
        }
       
    })
  }

  $('#Enter').click(function() {
    if ($('.navsider').css('left') === '0px') {
        $('.navsider').css({ left: '-200px', transition: 'all 1s' });

        document.querySelectorAll(".navlinks button").forEach(button => {
            button.style.opacity = 0
            button.style.top = "300px"
        })
        $('#Enter').removeClass('fa-solid fa-circle-xmark fa-lg').addClass('fa-solid fa-bars fa-xl');
    } else {
        var counter = .2
        $('.navsider').css({ left: '0px', transition: 'all 1s' });
        $('#Enter').removeClass('fa-solid fa-bars fa-xl').addClass('fa-solid fa-circle-xmark fa-lg');
        document.querySelectorAll(".navlinks button").forEach(button => {
            counter += .2
            button.setAttribute("style" , `transition: all ${counter}s;`)
            button.style.opacity = 1
            button.style.top = "0px"
           // button.setAttribute('data-aos' , "fade-up")
            //$('.navsider').css({ left: '-200px', transition: 'all 1s' });
        })
        counter = .2
    }
});

const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 01 - (2 or 5 or 0) followed by 8 numbers
const phoneNumberRegex = /^01[250]\d{8}$/;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]|:;"'<>,.?/~])[A-Za-z\d!@#$%^&*()_+{}[\]|:;"'<>,.?/~]{8,}$/;
var flags = Array.from({length:6} , () => false);
function inputsValidation (e)  {
 //   console.log(e.id , e.value)

    switch(e.id){
        case "nameInput":
            if(!usernameRegex.test(e.value)){
              
                document.querySelector("#nameAlert").style.display = "block"
                flags[0] = false
            }else{
                flags[0] = true
                document.querySelector("#nameAlert").style.display = "none"

            }
            break;

            case "emailInput":
                if(!emailRegex.test(e.value)){
                    flags[1] = false
                    document.querySelector("#emailAlert").style.display = "block"
                }else{
                    flags[1] = true
                    document.querySelector("#emailAlert").style.display = "none"
    
                }
                break;

        case "phoneInput":
            if(!phoneNumberRegex.test(e.value)){
                flags[2] = false
                document.querySelector("#phoneAlert").style.display = "block"
            }else{
                flags[2] = true
                document.querySelector("#phoneAlert").style.display = "none"

            }
            break;

        case "ageInput":
            if( Number(e.value) < 0){
                flags[3] = false
                document.querySelector("#ageAlert").style.display = "block"
            }else{
                flags[3] = true
                document.querySelector("#ageAlert").style.display = "none"

            }
            break;
        case "passwordInput":
            if(!passwordRegex.test(e.value)){
                flags[4] = false
                document.querySelector("#passwordAlert").style.display = "block"
            }else{
                flags[4] = true
                document.querySelector("#passwordAlert").style.display = "none"

            }
            break;

        case "repasswordInput":
            const pass = document.getElementById('passwordInput').value;
            console.log(pass)
            if(pass != e.value){
                flags[5] = false
                document.querySelector("#repasswordAlert").style.display = "block"
            }else{
                flags[5] = true
                document.querySelector("#repasswordAlert").style.display = "none"

            }
            break;
    }
    console.log(flags)
    document.getElementById("submitBtn").disabled=flags.includes(false)
}
