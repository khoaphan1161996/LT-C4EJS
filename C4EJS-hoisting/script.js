a() 
// hoisting : là đem những dòng khai báo = function window và var lên trước
//fuction
// window b=2 luôn ưu tiên hơn var , ra luôn giá trị
// b co ton tai nho window va var

console.log(b)  // b=2
function a(){
    window.b =2
    console.log("hello")
}
var b =1  // báo với hoisting là đã khai báo b nhưng trả ra underfined vì chưa có báo giá trị
console.log(b) //   b =1

// hoisting với let , let vòng for thứ 2 tự hiểu let đã khai báo i và dùng i
for(let i=0;i<2;i++){
    console.log(i)
}

for(i=0;i<2;i++){
    console.log("a")  // 2 chữ a
}


// a()
// console.log(b)