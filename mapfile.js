//map - creates a new array from calling a function for every array element
//map - calls a function once for each element in an array

const initialArray = [1,2,3,4,5]
const mappedArray = []

const mapfunction = (arr,anyfunction) => {
for(let i=0; i < arr.length; i++){
    let eachValue = anyfunction(arr[i])
    mappedArray.push(eachValue)
}
return mappedArray
}

const callbackAction = (number) =>{
    return number**2;
}

const finalArray = mapfunction(initialArray,callbackAction);

console.log(finalArray)