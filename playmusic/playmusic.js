const dataString = localStorage.getItem('dataMusicPlay');
const data = JSON.parse(dataString);

const {nama, judul, linkLagu, linkFoto} = data;

const judulLagu = document.getElementById("judul-lagu");
const fotoArtist = document.getElementById("foto-artist");
const lagu = document.getElementById("lagu");
const srcLagu = document.getElementById("source-lagu");

judulLagu.innerText = `${nama} - ${judul}`;
fotoArtist.src = `${linkFoto}`;
lagu.src = `../music/${linkLagu}`;
srcLagu.type = 'audio/mpeg';
