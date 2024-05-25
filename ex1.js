/*Scrieți o funcție care creează un obiect 
pentru a păstra informații despre rețeta ta preferată
*/
function CreateRecipe(title, portions, ingredients) {
    const recipe = {
        title: title,
        portions: portions,
        ingredients: ingredients,
    };
    return recipe;
}
const MyFavRecipe = CreateRecipe("Pizza", 3, ["ham", "cheese","ketchup"])
console.log(MyFavRecipe);

//Pentru a afisa obiectul fara functie 
const recipe ={
    title : "Pizza",
    portions: 3,
    ingredients: ["ham", "cheese","ketchup"],
}
console.log(recipe);

//Multumesc pentru atentie