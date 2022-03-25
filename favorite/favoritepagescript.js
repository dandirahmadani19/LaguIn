const datafavorite = localStorage.getItem('dataFavorite');
const data = JSON.parse(datafavorite);
const username = localStorage.getItem('username');

let userdata = data[username];
console.log(userdata);

function generateFavorite(userdata) {
  const main = document.querySelector('#row-card')
  
  for (let i = 0; i < userdata.length; i++) {
    const colMd = document.createElement("div");
    colMd.classList.add("col-md-3");
    colMd.setAttribute("id", `card${i+1}`);
    colMd.addEventListener("click", function(){
        window.location.href = '../playmusic/';
        localStorage.setItem('dataMusicPlay', JSON.stringify(userdata[i]));
    });
    main.appendChild(colMd);

    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    colMd.appendChild(thumbnail);

    const img = document.createElement('img');
    img.src = `${userdata[i].linkFoto}`;
    img.style.width = "100%";
    thumbnail.appendChild(img);

    const caption = document.createElement('div');
    caption.classList.add('caption');
    caption.classList.add('row');
    thumbnail.appendChild(caption);

    const column1 = document.createElement('div');
    column1.classList.add('col-10');
    caption.appendChild(column1);
    
    const p = document.createElement('p');
    p.innerText = `${userdata[i].judul}`;
    column1.appendChild(p);
  }
}

generateFavorite(userdata)

document.getElementById("btn-logout").addEventListener("click", function(){
  window.location.href = "../login/";
})

document.getElementById("btn-account").addEventListener("click", function(){
  window.location.href = "../account/";
})
