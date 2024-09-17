//ARRAY METHOD

let fruits: (string | number)[] = ["Mango", "Apple", "Pineapple", 1, 2, 3];
                    //   indexing     0        1          2       3  4  5
//push method 
// adding new element to the end of the array;
 fruits.push("banana");
 console.log(fruits);

// pop method
// pop method is used to remove the last element in the arrray;
let newfruits: string [] = ["Mango", "Apple", "Pineapple","kiwi"]
newfruits.pop();
console.log(newfruits);

//shift method
// shift method is used to remove begining or starting element
let myfruits: string[] = ["Apple", "Banana", "Orange", "Melon"];
myfruits.shift()
console.log(myfruits);

//unshift method
//unshift method is used to adding a element in the begining ;
let fruitsnew: string[] = ["Watermelon", "Grapes", "Orange", "Kiwi"];
fruitsnew.unshift("Pineapple", "Apple");
console.log(fruitsnew);

//slice 
// slice is used to make original array to form new  array;
let fruitsold: string[] = ["Kiwi", "Apple", "Mango", "Pineapple"];
// //                            0       1         2        3
let newarray = fruitsold.slice(0,2)
console.log(newarray);

// splice
//splice(adding, delete count,"string if you are adding the value")
//add and remove the value
let FruitHealth: string[] = ["Apple", "Mango", "Banana", "Grapes", "Kiwi"];
//no delete only add
FruitHealth.splice(2, 0, "Melon", "Orange");
console.log(FruitHealth);
//no adding , deleting 
FruitHealth.splice(0, 2,)
console.log(FruitHealth);










