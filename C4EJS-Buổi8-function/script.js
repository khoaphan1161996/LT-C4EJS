// 1 : chào
// function chao(){
//     console.log("hello")
// }

// 2 : tính tổng
// function sumnumber(a,b){
//     console.log(a+b)
// }
// let number1 =Number(prompt("Enter your number"))
// let number2 =Number(prompt("Enter your number"))
// sumnumber(number1,number2)

// Checkpoint4
// let movie ={
//     title:"The dark night rises",
//     year: 2012,
//     rate: 8.4
// }

// Read
// // C1
// function read(){
//     for(let i in movie){
//         console.log(movie[i])
//     }
// }
// read()
// // C2
// function read(property){
//     console.log(movie[property])
// }
// let n=prompt("nhập thứ muốn biết")
// read(n)

// Update
// function update(a,b){
//     movie[a]=b
// }
// let up = prompt("what do you want to update")
// let newtitle = prompt("what is the update")
// update(up, newtitle)
// read()

// Coffee : sau 3s thì pha cf và xong thì đi ship
// function makecoffee(callback){
//     setTimeout(function(){
//         console.log("đã pha xong cf")
//         callback()
//     },3000)
// }
// function shipcoffee(){
//     console.log("đang ship")
// }
// makecoffee(shipcoffee)

// Con cừu : 
// let myflock = [5,7,300,90,24,50,75]
// let f = ""
// for(let i=0; i<myflock.length;i++){
//     f += myflock[i]+" "
// }
// console.log("hello, my name is Phuong Nam and here is my sheep sizes: " + f)
// console.log(`Now my biggest sheep has size ${Math.max(...myflock)}, let's shave it`)

// Dùng function để cứ 5s là giết thịt
// let myflock = [5,7,300,90,24,50,75] 
// function read(callback,flocks){
//     setTimeout (function(){
//         let res = ""
//         for(let i =0;i<flocks.length;i++){
//             res = res + flocks[i]+ " "
//         }
//         console.log("hello, my name is Phuong Nam and here is my sheep sizes: " + res)
//     },5000)
//     callback()
// }

// function catLong(flocks){
//     // C1
//     let max = 0
//     for(let i=0;i<flocks.length;i++){
//         if(max<flocks[i]) max=flocks[i]
//     }
//     flocks[flocks.indexOf(max)]=8
//     // C2
//     // let max = Math.max(...flocks)
//     // flocks[flocks.indexOf(max)]=8
// }

// read(catLong(myflock),myflock)
