// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

function openCocktail(name) {
    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+name, true);

    request.onload =  function(){
        document.querySelector('.CSSgal').innerHTML = ""
        // Begin accessing JSON data here
        var data = JSON.parse(this.response); 
        console.log(data);
        var cocktails = data.drinks
        var bannerSlides = document.querySelector('.CSSgal')
    
        for (let index = 1; index < cocktails.length+1; index++) {
            bannerSlides.innerHTML += '<s id="s'+index+'"></s>'
        }
    
        bannerSlides.innerHTML += '<div class="cocktailSlider"></div><div class="prevNext"></div><div class="bullets"></div>'
    
        for (let index = 1; index < cocktails.length+1; index++) {
            var prevnext = bannerSlides.querySelector(".prevNext")
            if (index == 1) {
                prevnext.innerHTML = '<div><a href="#s'+(cocktails.length)+'"></a><a href="#s'+(index+1)+'"></a></div>'
            }
            else if (index == cocktails.length) {
                prevnext.innerHTML += '<div><a href="#s'+(index-1)+'"></a><a href="#s'+1+'"></a></div>'
            }
            else{
                prevnext.innerHTML += '<div><a href="#s'+(index-1)+'"></a><a href="#s'+(index+1)+'"></a></div>'
            }
        }
    
        for (let index = 1; index < cocktails.length+1; index++) {
            var bullets = bannerSlides.querySelector(".bullets")
            bullets.innerHTML += '<a href="#s'+index+'">'+index+'</a>'
        }
    
        cocktails.forEach(cocktail => {
            var htmlingredient = ""
            if (cocktail.strMeasure1 != null) {
                htmlingredient += '<li>'+cocktail.strMeasure1+' of '+cocktail.strIngredient1+'</li>'
            }
            if (cocktail.strIngredient != null) {
                htmlingredient += '<li>'+cocktail.strMeasure2+' of '+cocktail.strIngredient2+'</li>'
            }
            if (cocktail.strMeasure3 != null) {
                htmlingredient += '<li>'+cocktail.strMeasure3+' of '+cocktail.strIngredient3+'</li>'
            }
            if (cocktail.strMeasure4 != null) {
                htmlingredient += '<li>'+cocktail.strMeasure4+' of '+cocktail.strIngredient4+'</li>'
            }
            if (cocktail.strMeasure5 != null) {
                htmlingredient += '<li>'+cocktail.strMeasure5+' of '+cocktail.strIngredient5+'</li>'
            }
            if (cocktail.strMeasure6 != null) {
                htmlingredient += '<li>'+cocktail.strMeasure6+' of '+cocktail.strIngredient6+'</li>'
            }
            if (cocktail.strMeasure7 != null) {
                htmlingredient += '<li>'+cocktail.strMeasure7+' of '+cocktail.strIngredient7+'</li>'
            }
            if (cocktail.strMeasure8 != null) {
                htmlingredient += '<li>'+cocktail.strMeasure8+' of '+cocktail.strIngredient8+'</li>'
            }
            if (cocktail.strMeasure9 != null) {
                 htmlingredient += '<li>'+cocktail.strMeasure9+' of '+cocktail.strIngredient9+'</li>'
            }
            if (cocktail.strMeasure10 != null) {
                htmlingredient += '<li>'+cocktail.strMeasure10+' of '+cocktail.strIngredient10+'</li>'
            }
            if (cocktail.strMeasure11 != null) {
                htmlingredient += '<li>'+cocktail.strMeasure11+' of '+cocktail.strIngredient11+'</li>'
            }
            if (cocktail.strMeasure12 != null) {
                htmlingredient += '<li>'+cocktail.strMeasure12+' of '+cocktail.strIngredient12+'</li>'
            }
            if (cocktail.strMeasure13 != null) {
                htmlingredient += '<li>'+cocktail.strMeasure13+' of '+cocktail.strIngredient13+'</li>'
            }
            if (cocktail.strMeasure14 != null) {
                htmlingredient += '<li>'+cocktail.strMeasure14+' of '+cocktail.strIngredient14+'</li>'
            }
            if (cocktail.strMeasure15 != null) {
                 htmlingredient += '<li>'+cocktail.strMeasure15+' of '+cocktail.strIngredient15+'</li>'
            }
    
            console.log(htmlingredient)
            var slide = document.querySelector('.cocktailSlider')
            slide.innerHTML += '<div><img class="iconCocktail" src="'+cocktail.strDrinkThumb+'/preview'+'"><h1 class="cocktailTitle">'+cocktail.strDrink+'</h1><div class="cocktailBadge">'+cocktail.strCategory+'  |  '+cocktail.strAlcoholic+'</div><div class="cocktailDescription">'+cocktail.strInstructions+'</div><div class="cocktailIngredient"><ul>'+htmlingredient+'</ul></div></div>'
        });
    }
    
    // Send request
    request.send();
    
    // Begin accessing JSON data here
}

function getVal() {
    const val = document.querySelector('.searchCocktailBar').value;
    console.log(val);
    openCocktail(val);
}

function key_down(e) {
    if(e.keyCode === 13) {
        getVal();
    }
  }

openCocktail("margarita")
