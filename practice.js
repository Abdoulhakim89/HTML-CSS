function counter(callback) {
   
        for (let i = 1; i <=5; i++){
            callback(i) 
        };
    
}
function callbackf (num){
    setTimeout(() => {console.log(num)}, num * 1000)
}
counter(callbackf)
//Question 2
function formatName(firstName, lastName, callback) {

    callback(firstName,lastName);
}

function lastFirst (firstName, lastName){
    console.log( lastName +" "+firstName)
};
function firstNameInit (firstName,lastName){
    console.log(firstName[0] + '. '+ lastName)
}
function lastToCaps(firstName,lastName){
    console.log(firstName+ ' '+ lastName.toUpperCase())
}
formatName('John', 'Doe', lastToCaps)

//Question 5
function transformString(text, callback1, callback2) {
    let reverse = callback1(text);
    callback2(reverse);
}
function reverse(text){
    return text.split('').reverse().join('')
}

function toCaps(text){
    console.log(text.toUpperCase())
}
transformString('I love people',reverse,toCaps )