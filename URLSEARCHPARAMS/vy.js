// console.log("hello world");

// // aX + b = 0;
// // X = -b / a;



// let a = 2;
// let b = 4;
// let X = -b / a;

// console.log(X);


const root_api = "https://reqres.in/api/users?page=1";
const rootEl = document.getElementById('root');

async function getUsers(url) {
    const res = await fetch(url);
    const data = await res.json();
    const users = data.data;
    console.log(users);
    createUsers(users);
}

function createUsers(users) {
    const usersInnerHtml = users.map(user => {
        return `
            <div class="user">
                <div class="avatar">
                    <img src="${user.avatar}" />
                </div>
                <div class="info">
                    <h1>${user.first_name} ${user.last_name}</h1>
                    <h3>${user.email}</h3>
                    <a href="./info.html?username=admin&id=${user.id}">Show info</a>
                </div>
            </div>
        `
    });
    rootEl.insertAdjacentHTML('beforeend', usersInnerHtml.join(""));
}

getUsers(root_api);