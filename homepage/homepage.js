let data = [
  {
    nama: `Bruno Mars`,
    judul: "2DSD",
    linkLagu: "2DSD.mp3",
    linkFoto: "../image/BRUNO.png",
  },
  {
    nama: `Tiara Andini`,
    judul: "Melawan Dunia",
    linkLagu: "MelawanDunia.mp3",
    linkFoto: "../image/TIARA.png",
  },
  {
    nama: "Coldplay",
    judul: "Fix You",
    linkLagu: "Fix You.mp3",
    linkFoto: "../image/COLDPLAY.png",
  },
  {
    nama: "BLACKPINK",
    judul: "Ddu Ddu Ddu",
    linkLagu: "dududu.mp3",
    linkFoto: "../image/BLACKPINK.png",
  },
  {
    nama: "Fiersa Besari",
    judul: "Garis Tedepan",
    linkLagu: "Garis Tedepan.mp3",
    linkFoto: "../image/FIERSA.png",
  },
  {
    nama: "Glenn Fredly",
    judul: "Januari",
    linkLagu: "Januari.mp3",
    linkFoto: "../image/GLENN.png",
  },
  {
    nama: "Guns N Roses",
    judul: "Sweet Child O' Mine",
    linkLagu: "Sweet Child.mp3",
    linkFoto: "../image/GUNS.png",
  },
  {
    nama: "Raisa",
    judul: "Kali Kedua",
    linkLagu: "Kali Kedua.mp3",
    linkFoto: "../image/RAISA.png",
  },
  {
    nama: "Tulus",
    judul: "Teman Hidup",
    linkLagu: "Teman Hidup.mp3",
    linkFoto: "../image/tulus.png",
  },
];

let isLove = true;
const dataFavorite = [];
function tampilDataLagu(data) {
  for (let i = 0; i < data.length; i++) {
    const row = document.getElementById("row-card");

    const colMd = document.createElement("div");
    colMd.classList.add("col-md-3");
    colMd.setAttribute("id", `card${i + 1}`);

    row.appendChild(colMd);

    const thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");
    colMd.appendChild(thumbnail);

    const img = document.createElement("img");
    img.src = `${data[i].linkFoto}`;
    img.style.width = "100%";
    thumbnail.appendChild(img);
    img.addEventListener("click", function () {
      window.location.href = "../playmusic/";
      localStorage.setItem("dataMusicPlay", JSON.stringify(data[i]));
    });

    const caption = document.createElement("div");
    caption.classList.add("caption");
    caption.classList.add("row");
    thumbnail.appendChild(caption);

    const column1 = document.createElement("div");
    column1.classList.add("col-10");
    // column1.classList.add("align-self-start");
    caption.appendChild(column1);

    const p = document.createElement("p");
    p.innerText = `${data[i].judul}`;
    column1.appendChild(p);

    const column2 = document.createElement("div");
    column2.classList.add("col-2");
    caption.appendChild(column2);

    const img1 = document.createElement("img");
    img1.setAttribute("id", `love-kosong${i + 1}`);
    img1.classList.add("love-icon");
    img1.src = "../image/heart-kosong.png";
    column2.appendChild(img1);

    const img2 = document.createElement("img");
    img2.setAttribute("id", `love-merah${i + 1}`);
    img2.classList.add("love-icon");
    img2.src = "../image/heart-merah.png";
    img2.style.display = "none";
    column2.appendChild(img2);

    img1.addEventListener("click", function () {
      const loveMerah = document.getElementById(`love-merah${i+1}`);
      const loveKosong = document.getElementById(`love-kosong${i+1}`);
      loveMerah.style.display = "inline";
      loveKosong.style.display = "none";
      data[i].indeks = i;
      dataFavorite.push(data[i]);
      console.log(dataFavorite);
    });

    img2.addEventListener("click", function () {
      const loveKosong = document.getElementById(`love-kosong${i+1}`);
      const loveMerah = document.getElementById(`love-merah${i+1}`);
      loveKosong.style.display = "inline";
      loveMerah.style.display = "none";
      const indeks = i;
      for (let j = 0; j < dataFavorite.length; j++){
        if(dataFavorite[j] === undefined){
          continue;
        } else {
          if (dataFavorite[j].indeks === indeks){
            delete dataFavorite[j];
          }
        }
      }
      console.log(dataFavorite);
    });
  }
}

document.getElementById("btn-favorite").addEventListener("click", function(){
  const result = [];
  for (let i = 0; i< dataFavorite.length; i++){
    if (dataFavorite[i] !== undefined){
      result.push(dataFavorite[i]);
    }
  }
  const username = localStorage.getItem("username");
  const obj = {}
  obj[username] =result;
  localStorage.setItem("dataFavorite", JSON.stringify(obj));
  window.location.href = "../favorite/";
})

document.getElementById("btn-logout").addEventListener("click", function(){
  window.location.href = "../login/";
})

document.getElementById("btn-homepage").addEventListener("click", function(){
  window.location.href = "../homepage/";
})

document.getElementById("btn-account").addEventListener("click", function(){
  window.location.href = "../account/";
})

tampilDataLagu(data);
