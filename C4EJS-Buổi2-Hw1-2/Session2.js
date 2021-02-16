//11. Use JS Turtle, to draw the following shapes
//a square
/*
    for (let i=1; i <= 4; i++) {
      fd(50)
      lt(90)
    }
 b.	A triangle
for (let i = 0; i < 3; i++) {
fd(100)
rt(360/3)
}

// c. A pentagon
for (let i = 0; i< 5; i++) {
fd(100);
rt(360/5);
}

// d. A hexagon
for (let i = 0; i < 6; i++) {
 fd(100);
 rt(360/6);
}
*/
//12. Use JS Turtle to draw a polygon, the number of polygon’s edges entered by users
/*
let numberOfEdge = Number(prompt("Enter number of edges!"));
for (let i = 0; i < numberOfEdge; i++) {
fd(100);
 rt(360/numberOfEdge);
}
*/

// 3. Write a program to print out
// a. 7 numbers, starting from 0 (no user input)
//for ( let a3 = 0 ; a3 < 7 ; a3 ++){
//    console.log(a3)
//}  

//3b. n numbers, starting from 0, n entered by user
//let n = Number(prompt ("3b Enter a number?"))
//let b = 0
//while ( b < n){
 //   console.log(b++)
//}  

// let n = Number(prompt ("3b Enter a number?"))
// for(let b = 0; b<n;b++){
//     console.log(b)
// }

//3c. A sequence of numbers, starting from 3, ending before n, n entered by user
// let n = Number(prompt ("3c Enter a number?"))
// let b = 3
// while ( b < n){
//    console.log(b++)
// }   

//3d. A sequence of numbers, starting from c, ending before n, c and n entered by user
//let c = Number(prompt("3d Enter c"))
//let n = Number(prompt ("Enter n"))
//for ( let d3 = c ; d3 < n ; d3++){
//    console.log(d3)      
//}

// 3e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and
// n entered by user
// let c = Number(prompt("3e Enter c"))
// let n = Number(prompt ("Enter n"))
// for ( let e3 = c ; e3 < n ; e3 += 3){
//  console.log(e3)   
// }

// let c = Number(prompt("3e Enter c"))
// let n = Number(prompt ("Enter n"))
// while(c<n){
//   console.log(c)
//   c = c +3
// }

// let c = Number(prompt("3e Enter c"))
// let n = Number(prompt ("Enter n"))
// let e3 = c
// while(e3<n){
//     console.log(e3);
//     e3 += 3
// }

//3f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n
// and s entered by user
//c = Number(prompt("3f Enter c"))
//n = Number(prompt ("Enter n"))
//let s = Number(prompt ("Enter s"))
//for ( let f3 = c ; f3 < n ; f3 += s ){
// console.log(f3)   
//}

//4. Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
// let n = Number(prompt("4 Enter n"))
// let m = 1
// for (let e = 1; e <= n ; e++){
//    m *= e
// }
// alert("The factorial of " + n + " is " + m)  

//5. Write a program asking users their age, and then decide if they are old enough to view a
// 14+ content
//let age= Number(prompt("5 How old are you"))
//if(age<14){
//    alert("You are not old enough to view this content")
//}
//else{alert("Enjoy!")}   

//6. Write a program asking user to enter a number, x, then check if x is in the lower half or
// higher half of 0 - 9 range
//let x= Number(prompt("6. Enter a number"))
//if(0<=x && x<=9){
//if(x<=5){
 //   alert("Lower half of 9")
//}
//else{
//alert("Higher half of 9")}
//}  

//7. Write a program asking user to enter two numbers, x and n, then check if x is in lower
// half or higher half of n
// let n= Number(prompt("7. n"))
// let x= Number(prompt("x"))
// if(x>=n/2){
//   alert(x +" is in Higher half of "+n)
// }
// else{
// alert(x +" is in Lower half of "+n)
// }  

//8. Write a script to check if a number is even (divisible by 2) or odd number
//let x = Number(prompt("x"))
//if(x%2==0){
 //alert(x + " is an even number")
//}
//else{
// alert(x + " is an odd number")} 

//9. Write a program to print out
// a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
// for(let x =1; x<4;x++){
//     console.log("L")
// }
// for(let x =1; x<4;x++){
//     console.log("H")
// }

//9b. n L’s and H’s in total, n entered by user
// n = Number(prompt("Enter the total number of L and H"))
// if(n%2 ==0){
//     for( i = 0 ; i < n/2 ; i++){
//         console.log("L")
//     }
//     for( i = 0 ; i < n/2 ; i++){
//         console.log("H")
//     }
// }
// else{
//     for( i = 0 ; i < n/2 ; i++){
//         console.log("L")
//     }
//     for( i = 0 ; i < n/2 - 1 ; i++){
//         console.log("H")
//     }
// }

//9c. 8 1’s and 0’s in total, consecutively
// for(let x = 0 ; x < 4 ; x++){
//     console.log(0)
//     console.log(1)
// }

//9d. n 1’s and 0’s in total, consecutively, n entered by user
// n = Number(prompt("Enter the total number of 1 and 0"))
// if(n%2==0){
//     for(let x = 0 ; x < n/2 ; x++){
//         console.log(0)
//         console.log(1)}
// }
// else{
//     for(let x = 0 ; x < Math.floor(n/2) ; x++){
//         console.log(0)
//         console.log(1)
//     }
//     console.log(0)
// }

// let n = Number(prompt("nhap n"))
// if(n%2 ==0){
//     for(let x = 0; x<n/2 ; x++){
//         console.log(0)
//         console.log(1)
//     }
// }
// else{
//     for(let x = 0;x<n/2 - 1 ; x++){
//         console.log(0)
//         console.log(1)
// }
// console.log(0)
// }

//10. Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as
// follows
// BMI (Body Mass Index):
// BMI = mass (kg) / (height(m) x height(m))
// Note: you must do the conversion from cm to m before calculation
// And then based on the calculated BMI, tell them that they are:
// ● Severely underweight if BMI &lt; 16
// ● Underweight if BMI is between 16 and 18.5
// ● Normal if BMI is between 18.5 and 25
// ● Overweight if BMI is between 25 and 30
// ● Obese if BMI is more than 30

// x = Number(prompt("Weight"))
// y = Number(prompt("Height"))
// z = y/100
// BMI = x/(z*z)
// alert("your BMI is "+BMI)
// if(BMI<16){
//  alert("Severely underweight")
// }
// else if (16<=BMI && BMI<=18.5){
//  alert("Underweight")
// }
// else if(18.5<=BMI && BMI<=25){
//  alert("Normal")
// }
// else if(25<=BMI && BMI<=30){
//  alert("Overweight")
// }
// else {
//     alert("Obese")
// }

//BT1: nguoi dung nhap vao 1 thang trong nam, hien ra mua` cua nam
// let flat = false
// while(flat!=true){
//     let thang = prompt("nhap so thang")
//     if(0<thang && thang<13){
//         flat = true
//         if(0<thang && thang<4){
//             alert("mua xuan")
//         }
//         else if(3<thang && thang<7){
//             alert("mua he")
//         }
//         else if(6<thang && thang<10){
//             alert("mua thu")
//         } 
//         else{
//             alert("mua dong")
//         }
//     }
// }

// let thang = Number(prompt("nhap so thang"))
// while(isNaN(thang) || thang>12 || thang<1){
//   thang = prompt("nhap lai so thang cho dung")
// }
// if(1<=thang && thang<4){
//       alert("mua xuan")}
// else if(3<thang && thang<7){
//       alert("mua he")}
// else if(6<thang && thang<10){
//       alert("mua thu")}
// else{
//       alert("mua dong")}

//BT2: gia lap 1 phien dang nhap, nguoi  dung nhap id va pass chi dung khi id la mindx, pass la codethechange
// Neu id sai, bao id sai
// Neu id dung, pass sai, bao pass sai
// Neu id dung, pass dung, bao dang nhap dung
// them su dung while

// let flat = false
// while(flat !=true){
//     let id = prompt("nhap id")
//     let pass = prompt("nhap pass")
//     if(id != "mindx" ){
//         console.log("id sai")
//     }
//     else if (id == "mindx"&& pass != "codethechange"){
//         console.log("pass sai")
//     }
//     else {
//         console.log("thanh cong")
//         flat=true
//     }
// }
    
// let x= prompt("Nhập ID")
// while (x!="mindx"){
//        x = prompt("Nhap lai ID")    
// }
// let y= prompt("Nhap Pass")
// while(y!="codethechange"){
//     y=prompt("Nhap lai pass")
// }
// console.log("Thanh cong")

// Câu 1:Viết 1 chương trình nhận vào 1 số để thực thi console.log() xuất ra hình tam giác
// let n=Number(prompt("Nhap so dong ngoi sao"))
// while( isNaN(n)||n<=0){ n = prompt("Nhap so lai")}
// let x =1
// let a = ""
// while(x<=n){
//    console.log(a+="*")  // a+= "*" chinh la a=a+"*"
//     x++
// }

// Câu 2:Viết chương trình sử dụng console.log để in tất cả các số từ 1 đến 100, với các trường hợp. Các số nào chia hết cho 3, in ra "Fizz". Các số nào chia hết cho 5 thì in ra "Buzz". Các số nào chia hết cho cả 5 vs 3 thì in ra "FizzBuzz". Các số nào không thỏa mãn yêu cầu trên thì in ra chính nó.
// for(let x=1; x<=100;x++){
//     if(x%3==0 && x%5 ==0){
//         console.log("FizzBuzz")
//     }
//     else if(x%3 == 0){
//         console.log("Fizz")
//     }
//     else if(x%5 == 0){
//         console.log("Buzz")
//     }
//     else{
//         console.log(x)
//     }
// }

//Câu 3A:Nhập vào 1 số n, kiểm tra số đó có phải là số nguyên tố hay là không? Nếu có thì in ra "n là số nguyên tố", ngược lại thì in ra "n không phải là số nguyên tố".
// let n = Number(prompt("nhập số nguyên tố"))
// let a = 0
// while(isNaN(n) || n<1){
//   n = Number(prompt("nhập số nguyên tố cho đúng"))
// }
//   for(let i = 2 ;i<n ; i++ ){
//     if(n%i ==0 ){
//       a=1
//     }
//   }
// if(a==0){
//   console.log(n+" là số nguyên tố")
// }

// else if(a==1){
//   console.log(n+" không phải là số nguyên tố")
// }

// let n = Number(prompt("nhap n"))
// let x = 2
// let m = n%x
// while(Number.isInteger(n)==false||n<2){
//   n = Number(prompt("nhap so nguyen duong n"))
// }
// if(n==2){console.log(n+" la so nguyen to")}
// else {
// while(x<n){
//     if(m==0){
//       console.log(n+" không phải là số nguyên tố")
//     }
//       else{
//         console.log(n+" la so nguyen to")
//       }  
//     x++   
//     }
//   }

//Câu 3B:Nhập vào 1 số nguyên n, in ra tất cả các số nguyên tố từ 1 đến n.

// let n =Number(prompt("Nhap so de kiem tra"))
// let a = 0
// for(i = 2; i<=n; i++){
//   for( let j = 2; j<=i-1; j ++){
//     if(i%j==0){
//       a = 1
//     }
//   }
//     if( a == 0){
//       console.log(i)
//     }
//     else a = 0    
// }

// let n =Number(prompt("Nhap so de kiem tra"))
// let count = 0
// for(i = 2; i<=n; i++){
//   for( let j = 2; j<=i-1; j ++){
//     if(i%j==0){
//       count ++
//     }
//   }
//     if( count==0){
//       console.log(i)
//       count = 0
//     }
//   else count = 0
// }

// Câu 4: Tính tổng các số chẵn và các số lẻ từ 1-100
// let m = 0
// for(x=1;x<=100; x++){
//     if(x%2 == 0){
//     m += x
// }
// }
// console.log("Tong so chan "+m)
// let n = 0
// for(y=1;y<=100; y++){
//     if(y%2 != 0){
//     n += y
// }
// }
// console.log("Tong so le "+n)


// Câu 5:Giải pt bậc 2
// let a = Number(prompt("nhap a"))
// while(isNaN(a) || a==0 ){
//       a = prompt("nhap lai a");
// }
// let b = Number(prompt("nhap b"))
// while(isNaN(b)){
//       b = prompt("nhap lai b");
// }
// let c = Number(prompt("nhap c"))
// while(isNaN(c)){
//       c = prompt("nhap lai c");
// }
// let delta = (b*b)-(4*a*c)
// if(delta>0){
//     console.log("Phuong trinh co 2 nghiem phan biet");
//     console.log("x1 = "+ ((-b+Math.sqrt(delta))/(2*a)))
//     console.log("x2 = "+ ((-b-Math.sqrt(delta))/(2*a)))
// }
// else if(delta == 0){
//     console.log("Phuong trinh co 1 nghiem duy nhat")
//     console.log("x1 = "+ (-b/(2*a)))
// }
// else{
//     console.log("Phuong trinh vo nghiem")
// } 