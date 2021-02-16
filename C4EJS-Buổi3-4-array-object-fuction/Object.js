// let person = {   //init
//     name: "Quan",
//     age: 22,
//     location: "Ha Noi",
//     height: 170,
//     weight: 60
//     }
// person.yearOfBirth = 1996;      //create
// person[`status`] = `Single`
// console.log(person)
// console.log(person.yearOfBirth)  

// let person = {             //read
//     name: "Quan",
//     age: 22,
//     location: "Ha Noi",
//     height: 170,
//     weight: 60
//     }
// console.log(person.name)
// console.log(person[`name`])

// let person = {       //update
//     name: "Quan",
//     age: 22,
//     location: "Ha Noi",
//     height: 170,
//     weight: 60
//     }
// person.name = "Don";
// person[`name`] = "Don";
// console.log(person)

// let person = {        //delete
//     name: "Quan",
//     age: 22,
//     location: "Ha Noi",
//     height: 170,
//     weight: 60
//     }
// delete person.age;
// delete person[`age`]
// console.log(person)

// let person1 = {         //Array chứa Object
//     name: `Nam`,
//     age: 18,
// }
// let person2 = {
//     name: `Duc`,
//     age: 24,
// }
// let personArr = []
// console.log(personArr)
// personArr.push(person1)
// personArr.push(person2)
// console.log(personArr)
// C1
// console.log(personArr[0])
// let p = personArr[0];
// console.log(p)
// console.log(p[`name`])
//C2
// console.log(personArr[0].name)

// for ( let i =0; i<personArr.length;i++){    // vòng lặp for
//     let p = personArr[i]
//     console.log(p)
//     console.log(p.age)
// }

// let person ={           //Object chứa Array
//     name: `Nam`,
//     age: 18,
//     favs: [`Netflix`, `Cafe`, `Code`]
// }
// console.log(person)
// console.log(person.favs[1])
// for(let i = 0; i<person.favs.length; i++){    //For
//     console.log(person.favs[i])
// }
// person.favs.push(`Macbook`)
// console.log(person)