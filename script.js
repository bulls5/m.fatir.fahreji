const form = document.getElementById('form-pengaduan');
const daftar = document.getElementById('daftar-pengaduan');

form.addEventListener('submit',
function(e) {
  e.preventDefault();
  
  const nama = document.getElementById('nama').value;
  const pesan = document.getElementById('pesan').value;

  const item = document.createElement('li');
  item.textContent = ${nama} berkata: ${pesan};
  daftar.appendChild(item);

  form.reset();
});
