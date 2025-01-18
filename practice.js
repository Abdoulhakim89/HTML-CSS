// // function counter(callback) {
   
// //         for (let i = 1; i <=5; i++){
// //             callback(i) 
// //         };
    
// // }
// // function callbackf (num){
// //     setTimeout(() => {console.log(num)}, num * 1000)
// // }
// // counter(callbackf)
// // //Question 2
// // function formatName(firstName, lastName, callback) {

// //     callback(firstName,lastName);
// // }

// // function lastFirst (firstName, lastName){
// //     console.log( lastName +" "+firstName)
// // };
// // function firstNameInit (firstName,lastName){
// //     console.log(firstName[0] + '. '+ lastName)
// // }
// // function lastToCaps(firstName,lastName){
// //     console.log(firstName+ ' '+ lastName.toUpperCase())
// // }
// // formatName('John', 'Doe', lastToCaps)

// // //Question 5
// // function transformString(text, callback1, callback2) {
// //     let reverse = callback1(text);
// //     callback2(reverse);
// // }
// // function reverse(text){
// //     return text.split('').reverse().join('')
// // }

// // function toCaps(text){
// //     console.log(text.toUpperCase())
// // }
// // transformString('I love people',reverse,toCaps )

// //Promises Exercises
//  //   1.Create a Promise that resolves with the message "Success!" after 1 second or rejects with "Failure!" after 1 second, based on a random condition.

//  function itsSunny(weather){
//     return new Promise ((resolve) =>{
//         setTimeout(()=>{
//             if(weather == "Sunny"){
//                resolve('It\'s sunny outside') 
//             } else {
//                 throw Error('No weather updates')
//             }
//         }, 1000)
//   } )
// }
//  itsSunny("Sunny").then(value => console.log(value))
//             .catch(error => console.error(error));


const url = "https://pokeapi.co/api/v2/pokemon/pikachu"
async function getData(){
    try{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.sprites.other['dream_world']['front_default'])
    }
    catch(error){
        console.error(error)
    }
    
}
getData();
 
// Promises Exercises No 3
// const url = "https://jsonplaceholder.typicode.com/todos"
// function fetchUrl(){
//   return new Promise(async (resolve,reject)=> {
//     let returnFetch ;
//     returnFetch = await fetch(url)//.json();

//     if(returnFetch){
//         resolve(returnFetch)
//     } else { throw new Error ('Unable to fetch')}
//  } )}

  
// fetchUrl().then(res => res.json())
//             .then((data)=> console.log(data))
//             .catch(error => console.error(error));

