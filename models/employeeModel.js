const db = require("../config/db");

// Ambil semua pegawai
exports.getAllEmployees = (callback) => {
  db.query("SELECT * FROM pegawai", callback);
};

// Tambah pegawai
exports.addEmployee = (data, callback) => {
  db.query("INSERT INTO pegawai SET ?", data, callback);
};

// Dapatkan detail pegawai berdasarkan ID
exports.getEmployeeById = (id, callback) => {
  db.query("SELECT * FROM pegawai WHERE id = ?", [id], callback);
};

// Update pegawai
exports.updateEmployee = (id, data, callback) => {
  db.query("UPDATE pegawai SET ? WHERE id = ?", [data, id], callback);
};

// Hapus pegawai
exports.deleteEmployee = (id, callback) => {
  db.query("DELETE FROM pegawai WHERE id = ?", [id], callback);
};
