const db = require("../config/db");

// Ambil Semua Pegawai
exports.getAllEmployees = (callback) => {
    db.query("SELECT * FROM pegawai", callback);
}

// Tambah Data Pegawai
exports.addEmployee = (data, callback) => {
    db.query("INSERT INTO pegawai SET ?", data, callback);
}

// Dapatkan detail pegawai berdasarkan ID
exports.getEmployeeById = (id, callback) => {
    db.query("SELECT * FROM pegawai WHERE id = ?", [id], callback);
}

// Update Data Pegawai
exports.updateEmployee = (id, data, callback) => {
    db.query("UPDATE pegawai SET ? WHERE id = ?", [data, id], callback);
}

// Hapus Data Pegawai
exports.deleteEmployee = (id, callback) => {
    db.query("DELETE FROM pegawai WHERE id = ?", [id], callback);
}