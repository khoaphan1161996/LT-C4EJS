// Read
// Truy cập vào text: textContent, innerHTML. innerText

// Truy cập vào id
// let input = document.getElementById("text").textContent
// console.log(input)

// Truy cập vào class
// let input2 = document.getElementsByClassName("div2")
// console.log(input2[0].textContent)
// console.log(input2[1].style.backgroundColor = "red")

// truy cập vào selector
// let input3 = document.getElementsByTagName("div")
// console.log(input3[0].innerHTML)

// Update
// Id
// let a = document.getElementById("div1")
// a.textContent="Đã được thay đổi"
// Class
// let a = document.getElementsByClassName("div2")
// a[0].textContent="Đã được thay đổi"

// Event
// Có 3 cách: click,hover,listen
// let a = document.getElementById("msg")
// a.addEventListener("click", function(){
//     a.textContent = "Thay đổi rùi nè"
// })
// Cách viết gọn
// a.addEventListener("click",()=>{
//     a.textContent = "Thay đổi rùi nè"
// })

// Create
// let a = document.getElementById("msg")
// a.insertAdjacentHTML('beforeend','<div>Create</div>')
// Note
// beforebegin và afterend nằm ngoài content 
// afterbegin và beforeend nằm trong content

                    // BÀI TẬP
// BT Count
// function up(Num){
//     let a = Number(document.getElementById("ketqua").textContent)
//     a += Num
//     document.getElementById("ketqua").textContent = a
// }

// BT click vào mất ảnh và viền ảnh
// function none(){
//     document.getElementById("img").style.display="none"
// }
// function border(){
//     document.getElementById("img").style.border="thick solid #0000FF"
// }

// BT click vào hiện chó mèo
// function cat(){
//     document.getElementById("img").src="https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"
// }
// function dog(){
//     document.getElementById("img").src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
// }

// BT đồng hồ đếm ngược
// Khi chỉ có start không có stop
// function start(){
//     // 1. lấy dc input
//     let input =document.getElementById("input").value //dùng value
//     console.log(input)
//     // parameter đầu tiên là function 2 là time
//     var x = setInterval(function(){  // đặt id cho dòng thời gian của mình:x 
//         // count down
//         // update 
//         document.getElementById("res").innerHTML = input
//         input -- 
//         if (input<0) {
//             clearInterval(x)
//         }
//     },1000)
// }

// Khi có thêm stop
// function start(){
//     let input = document.getElementById("input").value
//     window.x = setInterval(() => {
//         document.getElementById("res").textContent = input
//         input --
//         if(input<0){
//             clearInterval(x)
//         }
//     }, 1000);
// }
// function stop(){
//     clearInterval(window.x)
// }


// Đồng hồ đếm ngược bằng event
// btn_start.addEventListener('click', function(){
//     let input = document.getElementById("input").value
//     window.x = setInterval(() => {
//         document.getElementById("res").textContent=input
//         input--
//         if(input<0){
//             clearInterval(x)
//         }
//     }, 1000);
// })

// btn_stop.addEventListener('click', function(){
//     clearInterval(x)
// })
