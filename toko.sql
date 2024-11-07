CREATE TABLE pegawai (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR (100),
    jenis_kelamin ENUM ('L', 'P'),
    tanggal_lahir DATE,
    alamat TEXT,
    email VARCHAR (100),
    nomor_telepon VARCHAR (20),
    posisi VARCHAR (50),
    gaji DECIMAL (20, 2)
);