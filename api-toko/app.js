// Jalankan script saat halaman HTML sudah siap
document.addEventListener("DOMContentLoaded", function() {
    
    // Ambil data dari server (PHP)
    fetch('get_barang.php')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('daftar-barang');
            let barisTabel = '';

            // Jika database kosong
            if (data.length === 0) {
                tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">Data tidak ditemukan</td></tr>';
                return;
            }

            // Looping data dari MySQL dan masukkan ke variabel barisTabel
            data.forEach((barang, index) => {
                barisTabel += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${barang.nama_barang}</td>
                        <td>${barang.harga}</td>
                        <td>${barang.stok}</td>
                    </tr>
                `;
            });

            // Tampilkan ke layar HTML
            tbody.innerHTML = barisTabel;
        })
        .catch(error => {
            console.error('Ada masalah:', error);
            document.getElementById('daftar-barang').innerHTML = 
                '<tr><td colspan="4" style="color:red; text-align:center;">Gagal mengambil data dari server. Pastikan XAMPP menyala.</td></tr>';
        });
});