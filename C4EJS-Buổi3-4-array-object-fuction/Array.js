// let an = ["com", "ca" ,"thit" , "trung"] //array
// let soluongmonan = an.length

// an.push("bun dau")    //create
// console.log(an)

// let an = ["com", "ca" ,"thit" , "trung"]    //create doi cho nao cung dc
// an.splice(1,1,"a","b","c")                  // 1 là vị trí muốn , 1 là số chữ cần xóa, nếu chỉ cần chèn ko xóa thì 0
// console.log(an)
// "com" ,"a", "b", "c","thit" , "trung"

// an.splice(1,0,"a","b","c")                 
// console.log(an)
// "com" ,"a", "b", "c","ca","thit" , "trung"

// let monanthu2 = an[1]  //read
// console.log(monanthu2)

// let monan = ["com", "ca" ,"thit" , "trung"]   //read
// for (let x = 0 ; x< monan.length; x++){
//     console.log(x)
// }

// let monan = ["com", "ca" ,"thit" , "trung"]   //read
// for (let x = 0 ; x< monan.length; x++){
//     console.log(monan[x])
// }

// let an = ["com", "ca" ,"thit" , "trung"]  //update
// an[2] = "banhcuon"
// console.log(an)

// let an = ["com", "ca" ,"thit" , "trung"]   //delete
// an.splice(0, 2)   // splice(0, 2) hãy xóa từ vị trí 0 2 đối tượng
// console.log(an)


                           //BAI TAP
// let tencauthu = ["cr7", "m10" , "neymar"]   //create
// alert(tencauthu)
// let nhapthem = prompt("nhap them ten cau thu khong Y or N")
// if(nhapthem == "Y"){
//     cauthumoi = prompt("ten cau thu la gi")
//     tencauthu.push(cauthumoi)
//     console.log(tencauthu)
// }
// else if(nhapthem == "N"){
//     alert("Good bye")
// }

// let tenxe = ["Audi", "Bentley", "BMW", "Bugatti", "Ferrari", "Ford"]   //read
// for(let x = 0 ; x<tenxe.length ; x++){
//     console.log(tenxe[x])
// }

// let tencauthu = ["cr7", "m10" , "neymar"]    //update
// alert(tencauthu)
// let nhapthem = prompt("nhap them ten cau thu khong Y or N")
// if(nhapthem == "Y"){
//     let vitri = prompt("vi tri cau thu muon doi ten")
//     let tencauthumoi = prompt("ten cau thu moi")
//     tencauthu[vitri] = tencauthumoi
//     console.log(tencauthu)
// }
// else if(nhapthem == "N"){
//     alert("Good bye")
// }

// let tencauthu = ["cr7", "m10" , "neymar"]    //delete
// alert(tencauthu)
// let nhapthem = prompt("nhap them ten cau thu khong Y or N")
// if(nhapthem == "Y"){
//     let vitri = prompt("vi tri cau thu muon xoa")
//     tencauthu.splice(vitri, 1)
//     console.log(tencauthu)
// }
// else if(nhapthem == "N"){
//     alert("Good bye")
// }




//Init
// let tenphim = ["Doremon", "LOTR","Tayduki"]
// console.log(tenphim)

//Create
// let tenphim = ["Doremon", "LOTR","Tayduki"]
// let newMovie = ("phimma")
// tenphim.push(newMovie)
// console.log(tenphim)

//Read
// let tenphim = ["Doremon", "LOTR","Tayduki"]
// let i = prompt("nhap i ")
// console.log(tenphim[i])

//Update
//Câu 1
// let tenphim = ["Doremon", "LOTR","Tayduki"]
// let movieTitle = prompt("nhap ten phim")
// tenphim[0]=movieTitle
// console.log(tenphim)

//Câu 2
// let tenphim = ["Doremon", "LOTR","Tayduki"]
// let movieTitle = prompt("nhap ten phim")
// let i = prompt("nhap i ")
// tenphim[i]=movieTitle
// console.log(tenphim)

//Delete
//Câu 1
// let tenphim = ["Doremon", "LOTR","Tayduki"]
// let i = prompt("nhap i ")
// tenphim.splice(i ,1)
// console.log(tenphim)

//Câu 2
// let tenphim = ["Doremon", "LOTR","Tayduki"]
// let i = prompt("nhap i ")
// let n = prompt("nhap n ")
// tenphim.splice(i ,n)
// console.log(tenphim)

//Read all
//Câu 1
// let tenphim = ["Doremon", "LOTR","Tayduki"]
// for(let x = 0; x<tenphim.length; x++){
//     console.log(tenphim[x])
// }

//Câu 2
// let tenphim = ["Doremon", "LOTR","Tayduki"]
// for(let x = 0; x<=(tenphim.length)/2; x++){
//     console.log(tenphim[x])
// }

//Câu 3
// let tenphim = ["Doremon", "LOTR","Tayduki"]
// for(let x = 0; x<tenphim.length; x++){
//     console.log(x+1+". " + tenphim[x])
// }

//Update all
// let tenphim = ["Doremon", "LOTR","Tayduki"]
// for(let x = 0; x<tenphim.length; x++){
//     console.log(tenphim[x].toLocaleLowerCase())
// }

// let usename = prompt("nhap ten")
// if(usename.length>15){
// alert("dai qua nhap lại")
// }
// else{
// alert("enjoy")
// }

// alert("Câu hỏi: nhện có bao nhiêu chân")
// let dapan = ["1. None", "2. 4 chân", "3. 8 chân", " 12 chân"]
// for(i=0;i<dapan.length;i++){
//     alert(dapan[i])
// }
// let n = Number(prompt("nhập đáp án"))
// while(isNaN(n) || n<1 || n >4){
//     n = Number(prompt("nhập lại đáp án cho đúng ( từ 1-4)")) 
// }
// if(n == 3){
//     alert("chuẩn")
// }
// else{
//     alert("lần sau cố lên nhé sai cmnr")
// }
