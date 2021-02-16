                                            // PHẦN KHÔNG CẦN THIẾT
// EX
// function diCho(tacDuong){
//     // return trả về 1 thứ gì đó
//     return new Promise (function(resolve, reject){
//         console.log("Dang di cho")
//         // resolve("Thit Heo")
//         // reject("Khong con thit heo me oi")
//         if(tacDuong==true){
//             reject("khong mua duoc me oi")
//         }
//         else {
//             resolve("Thit heo")
//         }
//     })
// }

// diCho(false).then(function(item){  // khi hàm resolve dc gọi
//     console.log(item)    
// }).catch(function (err){   // khi hàm reject dc gọi
//     console.log(err)  
// })

// Cách lấy dữ liệu sever, dùng hàm fetch(), fetch() đã là promise sẵn
// const url = "https://5f71cb3c64a3720016e60e83.mockapi.io/api/members"
// C1
// fetch(url).then(function(item){
//     return item.json()
// }).then(function(data){
//     console.log(data)
// }).catch(function(err){
//     console(err)
// })
// C2 dễ hơn
// const url = "https://5f71cb3c64a3720016e60e83.mockapi.io/api/members"
// async function getData(){
//    const respone = await fetch(url)  // để dùng await cần async; away đợi fetch xong mới hành động 2
//    const data = await respone.json()  
//    console.log(data)
// }
// getData()


                                    // BT làm chơi
// let A = [1,'abc','tam',21,-1]
// function kiemtra(text){
// let obj = {}
// for(let i = 0;i<text.length; i++){
//     if(typeof((text[i]))=="number"){
//         obj[`${text[i]}`]="number"
//     }
//     else if(typeof(text[i])=="string"){
//         obj[`${text[i]}`]="string"
//     }
// }
// console.log(obj)
// }
// kiemtra(A)

// let text = prompt("nhập array")
// let n = text.split(",")
// function kiemtra(text){
// let obj = {}
// for(let i = 0;i<n.length; i++){
//   console.log(Number(n[i]))
//     // if(Number.isNaN(Number(n[i]))){
//     if(isNaN(Number(n[i]))){
//         obj[`${n[i]}`]="string"
//     }
//     else {obj[`${n[i]}`]="Number"
//          }
// }
// console.log(obj)
// }
// kiemtra(n)



                                     // TỔNG HỢP KIẾN THỨC NETWORKING
// const root_url = "https://5f71cb3c64a3720016e60e83.mockapi.io/api/members";

// GET
// async function getAllMembers() {
//     const res = await fetch(root_url);
//     const list_members = await res.json();
//   console.log(list_members)
// }

// getAllMembers()

// POST
// async function postMember(member) {
//     await fetch(root_url, {
//         method: 'POST',
//         body: JSON.stringify(member),
//         headers: {
//             'Content-type': 'application/json'
//         }
//     });
// }

// let person = {
//     name: 'Nguyễn Văn A',
//     role: 'Student'
// }

// postMember(person)

// PUT ( Update ) , PUT sẽ dựa theo id muốn PUT và data cần update là gì
// async function updateMember(id, data) {
//     const url_update = root_url + `/${id}`;
//     console.log('update member: ', url_update) // xem màn hình console nó ra gì là hiểu
//     await fetch(url_update, {
//         method: 'PUT',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-type': 'application/json'
//         }
//     })
// }

// let person = {
//     name: 'Nguyễn Văn A',
//     role: 'Student'
// }

// updateMember(1,person)


// DELETE , xoá thì sẽ xoá theo id, giống như PUT
// async function deleteMember(id) {
//     const url_delete = root_url + `/${id}`;
//     console.log('update member: ', url_update) // xem màn hình console nó ra gì là hiểu
//     await fetch(url_delete, {
//         method: 'DELETE'
//     })
// }

// deleteMember(1) // 1 là id 


                                                // BẮT ĐẦU TỪ ĐÂY
// const root_url = "https://5f794a3ee402340016f93000.mockapi.io/api/members"

// async function getAllMembers(){
//     const res = await fetch(root_url)
//     const list_members = await res.json()
//     console.log(list_members)
// }
// getAllMembers()


// async function postMember(member){
//     await fetch(root_url, {
//         method: 'POST',
//         body: JSON.stringify(member),
//         headers: {
//             'Content-type':'application/json'
//         }
//     })
// }

// let data = {
//         name: "vinh",
//         role: "ban"
//     }

// postMember(data)


// async function deleteMember(id){
//     const root_url_delete = root_url + `/${id}` ; 
//     console.log('delete member:' , root_url_delete)
//     await fetch ( root_url_delete,{
//         method:'DELETE'
//     })
// }

// deleteMember(4)


// async function updateMember(id,data){
//     const root_url_update = root_url + `/${id}`;
//     console.log('update member:', root_url_update)
//     await fetch(root_url_update,{
//         method:'PUT',
//         body:JSON.stringify(data),
//         headers:{
//             'Content-type':'application/json'
//         }
//     })
// }

// let person = {
//     name: "phu",
//     role:"ban cu"
// }

// updateMember(3,person)

// BT post lên khi điền vào xong ấn nút thì post lên
// const root_url  = "https://5f794a3ee402340016f93000.mockapi.io/api/members"
// async function postMember(member){
//     await fetch(root_url, {
//         method: 'POST',
//         body: JSON.stringify(member),
//         headers:{
//             'Content-type':'application/json'
//         }
//     })
// }

// let fullName = document.getElementById("fullName")
// let role = document.getElementById("role")
// let btn = document.getElementById("btn")

// btn.addEventListener('click', function(){
//     try{
//         let fullName_value = fullName.value ;
//         let role_vale = role.value ; 
//         let data = {
//             name: fullName_value,
//             role: role_vale
//         }
//         postMember(data)
//     } catch(err){
//         console.log(err)
//     }
// })


// BT Get dữ liệu về sau đó nhét dữ liệu vào cho vừa khung
// Đầu tiên get về, sau đó làm html mẫu, sau đó xóa html mẫu rồi chèn vào

const url = "https://5f794a3ee402340016f93000.mockapi.io/api/members"
const members=document.getElementById("member")

async function getData(){
   const respone = await fetch(url)  // để dùng await cần async; away đợi fetch xong mới hành động 2
   const data = await respone.json()  
   console.log(data)
   console.log(createMembers(data))
   members.insertAdjacentHTML('beforeend',createMembers(data).join(""))
}
getData()

   function createMembers(list_member){
      return list_member.map(function(member){
         return `
         <div class="member">
         <h1>${member.name}</h1>
         <h2>${member.role}</h2>
         </div>
         `
      })
   }


   //    let array = []
   //    for(let i = 0; i<list_member.length ; i++){
   //       array.push(`<div class="member">
   //       <h1>${list_member[i].name}</h1>
   //       <h2>${list_member[i].role}</h2>
   //       </div>
   //       `)
   //    }
   //    return array
   // }
