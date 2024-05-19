//Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate
   
//First method without a function
const my_object = {
    a: 1,
    b: 2,
}
delete my_object.b;
console.log(my_object);

//Method with a function 
function returnObj(obj, prop) {
    const newObj = {...obj};
    delete newObj[prop];
    return newObj;
}
const my_object = {
    a: 1,
    b: 2,
};
const propRemove = "b";
const newObj = returnObj(my_object, propRemove);
console.log(newObj);

