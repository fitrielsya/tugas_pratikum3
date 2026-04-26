<?php
// Mengizinkan format JSON
header('Content-Type: application/json');

// Koneksi ke Database XAMPP bawaan (username: root, password: kosong)
$conn = new mysqli("localhost", "root", "", "toko_db");

// Cek koneksi
if ($conn->connect_error) {
    die(json_encode(["error" => "Koneksi ke database gagal!"]));
}

// Ambil data
$sql = "SELECT * FROM barang";
$result = $conn->query($sql);

$data_barang = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data_barang[] = $row;
    }
}

$conn->close();

// Tampilkan sebagai JSON
echo json_encode($data_barang);
?>