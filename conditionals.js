/*Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen. */
let int1 = 364
let int2 = 455
if(int1 > int2){
    console.log(int1)
} else {
    console.log(int2)
}
/*Write a JavaScript conditional statement to find the sign of the product of three numbers.*/
let one = 7
let two = 8
let three = 6
const numberProduct = one * two * three

if (numberProduct < 0) 
{console.log('The sign of the product is -');

} else {console.log('The sign of the product is +');

}
/*3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.*/

let num1 =-5
let num2 = -4
let num3 =0
if (num1 > num2 && num1 > num3){
    if(num2 > num3){
        console.log(num1,num2,num3);
    } else {console.log(num1,num3,num2);};
    } else if (num2 > num1 && num2 > num3) {
        if(num1 > num3) {
            console.log(num2,num1,num3);
        } else {console.log(num2,num3,num1);} 
    } else if(num3 > num1 && num3 > num2) {
            if(num1>num2){
                console.log(num3,num1,num2);
            } else {console.log(num3,num2,num1)

            };
        };
    

/*4. Wite a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results. */
let a = 5
let b = -2
let c = -6
let d = 0
let e = -1
if(a>b && a>c && a>d && a>e) {
    console.log(a)
 } else if (b>a && b>c && b>d && b>e){
    console.log(b)
 } else if(c>a && a>b && c>d && c>e){
    console.log(c)
} else if(d>a && d>b && d>c && d>e) {
    console.log(d)
} else {console.log(e)};

/*5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen. */
for (let i=0;i <=15; i++)
    if(i % 2 === 0){
        console.log(`${i} is even`)
    } else if (i % 2 !== 0) {
        console.log(`${i} is odd`)
    };
/*6. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade. */
 let studentMark = 0
 if(studentMark <= 60){
    console.log('F');
 } else if (studentMark <= 70 && studentMark> 60 ){
    console.log('D');
 } else if (studentMark <= 80 && studentMark > 70) {
    console.log('C');
 } else if (studentMark <= 90 && studentMark > 80){
    console.log('B');
 } else {
    console.log('A')
 }


