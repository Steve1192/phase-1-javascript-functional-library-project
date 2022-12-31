

function myEach(collection, callback1)
{
let i = 0;
let collection2 = Object.values(collection)
for (const value of collection2)
{callback1(value)  }
return collection;
}



function myMap(collection, callback2) {
const collection3 = Object.values(collection).map(callback2)
    return collection3
}



function myReduce(collection, callback3, acc) {

    if (acc == 10) //it was the second equals sign, facepalm
    {
       //need object.values(collection to make an array from the object collection in both case statements)
const sumTotal = Object.values(collection).reduce(callback3, acc);
return sumTotal
}
else {
    const sumTotal = Object.values(collection).reduce(callback3)
    return sumTotal
}
}


function myFind(collection, predicate) {

return Object.values(collection).find(predicate)

}

function myFilter(collection, predicate) {

    return Object.values(collection).filter(predicate)

}

function mySize(collection) {

return Object.values(collection).length


}

function myFirst(array, n) {
    if (typeof n !== "number") {
        return array[0]
      } else {
        let newArray = []
        for (let i = 0; i < n; i++){
          newArray.push(array[i])
        }
        return newArray
      }
}//his myFirst and myLast are done


function myLast(array, n) {
    if (typeof n !== "number") {
      return array[array.length - 1]
    } else {
      let newArray = []
      for (let i = 1; i <= n; i++) {
        newArray.unshift(array[array.length-i])
      }
      return newArray
    }
  }


  function myKeys (object) {
    const arrayOfKeys = []
    for (let key in object) {
      arrayOfKeys.push(key)
    }
    return arrayOfKeys
  }
  
  function myValues (object) {
    const arrayOfValues = []
    for (let key in object) {
      arrayOfValues.push(object[key])
    }
    return arrayOfValues
  }
