/*Scrieți o funcție care creează un obiect 
pentru a păstra informații despre rețeta ta preferată
*/
function createRecipe(title, portions, ingredients) {
    const recipe = {
        title: title,
        portions: portions,
        ingredients: ingredients,
    };
    return recipe;
}
const myFavRecipe = createRecipe("Pizza", 3, ["ham", "cheese","ketchup"])
console.log(myFavRecipe);

//Multumesc pentru atentie