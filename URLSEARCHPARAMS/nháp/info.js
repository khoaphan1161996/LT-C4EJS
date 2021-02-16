const containerEl = document.getElementById('container');
const cover = document.getElementById('cover')
const url_api = "https://5f771bd2d5c9cb0016236aca.mockapi.io/api/user";

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
console.log(myParam);


 
async function getProductById(url_api, id) {
    const res = await fetch(`${url_api}/${id}`);
    const user = await res.json();
    console.log(user);
    createProduct(user);
    
}

function createProduct(user) {
    
    const coverinnerHTML = `
    <img src="${user.image}">
    `;
    const productInnerHtml = `
    <img id="mainimg" src="${user.image}">
    <div id ="info">
        <div id="name">${user.name}</div>
        <div id="price">Giá từ:${user.price}</div>
        <button class="accordion">THIẾT KÊ</button>
            <div class="panel">
            <img class="panelimg" src="${user.des1}" alt="des1">
            <img class="panelimg" src="${user.des2}" alt="des2">
            </div>
        <button class="accordion">ĐỘNG CƠ-CÔNG NGHỆ</button>
            <div class="panel">
            <img class="panelimg" src="${user.engine}" alt"engine">
            </div>
        <button class="accordion">TIỆN ÍCH-AN TOÀN</button>
            <div class="panel">
            <img class="panelimg" src="${user.benefit1}" alt="benefit1">
            <img class="panelimg" src="${user.benefit2}" alt="benefit2">
        </div>
    </div>
    `;

    cover.insertAdjacentHTML('beforeend',coverinnerHTML)
    containerEl.insertAdjacentHTML('beforeend',productInnerHtml);
    var acc = document.getElementsByClassName("accordion");
    let mainimg = document.getElementById("mainimg");
    let panelimg = document.getElementsByClassName("panelimg");

    for(let i=0;i<5;i++){
        panelimg[i].addEventListener('click',function(){
            mainimg.src=panelimg[i].src
        })
    }

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }

        
}

getProductById(url_api, myParam);