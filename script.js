function ubahCellpadding() {
    var table = document.getElementById("tabel");
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth <= 200) {
    // Jika lebar layar <= 720px, ubah nilai cellpadding menjadi 10
    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].style.padding = "1px";
        }
    }
    } else {
    // Jika lebar layar > 720px, kembalikan nilai cellpadding menjadi 20
    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].style.padding = "20px";
        }
    }
    }
}


const toggleBtn = document.getElementById('show');
const daftarDiv = document.getElementById('daftarDiv');
toggleBtn.addEventListener('click', function() {
    // Toggle class "slide-down" untuk animasi slide down
    // Toggle display none/block untuk munculkan/div
    if (daftarDiv.style.display === 'block') {
        daftarDiv.style.display = 'none';
    } else {
        daftarDiv.style.display = 'block';
    }
});