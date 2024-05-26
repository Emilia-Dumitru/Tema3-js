/*Creați un șir de obiecte în care fiecare obiect descrie o 
carte și are proprietăți precum titlu 
(un șir de caractere - string), autor 
(un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o).

*/

function ifiRead (title , author, read) {
    if (read ===true){
        console.log("Ai citit deja "+ title + " de " + author+".");

    } else {
        console.log("Trebuie sa citesti "+ title +" de "+ author+".")
    }
}
const book = {
    title: "Hobbitul",
    author: "J.R.R. Tolkien",
    read: false,
}
ifiRead(book.title, book.author, book.read);
