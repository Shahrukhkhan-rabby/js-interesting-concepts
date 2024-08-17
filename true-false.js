/*
Falsy:
0
empty string 
undifined
null
NaN

---------------------
Truthy:
any Number (positive negative)
any string including space '0' 'false' []
anything else that is not falsy will truthy
*/


let x = {};
console.log('value of x', x)
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is Falsy');
}