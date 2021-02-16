const containerEl = document.getElementById('container');
const url_api = "https://reqres.in/api/users?page=1";

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
const myParamusername = urlParams.get('username');
console.log(myParam);
console.log( myParamusername)

async function getUserById(url_api, id) {
    const res = await fetch(`${url_api}&id=${id}`);
    const user = await res.json();
    console.log(user);
    createUser(user);
}

function createUser(user) {
    const userInnerHtml = `
            <div class="user">
                <div class="avatar">
                    <img src="${user.data.avatar}" />
                </div>
                <div class="info">
                    <h1>Full name: ${user.data.first_name} ${user.data.last_name}</h1>
                    <h3>Email: ${user.data.email}</h3>
                    <h3>Company: ${user.ad.company}</h3>
                    <h3>Status: ${user.ad.text}</h3>
                </div>
            </div>`;
    containerEl.insertAdjacentHTML('beforeend', userInnerHtml);
}

getUserById(url_api, myParam);