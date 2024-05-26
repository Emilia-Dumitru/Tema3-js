//Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate

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

