const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// Route untuk menampilkan daftar pegawai
router.get("/employees", employeeController.listEmployees);

// Route untuk menampilkan form penambahan pegawai
router.get("/add_employee", employeeController.showAddForm);

// Route untuk menyimpan pegawai baru
router.post("/save_employee", employeeController.saveEmployee);

// Route untuk menampilkan form edit pegawai
router.get("/edit_employee/:id", employeeController.showEditForm);

// Route untuk memperbarui data pegawai berdasarkan ID
router.post("/update_employee/:id", employeeController.updateEmployee);

// Route untuk menghapus pegawai berdasarkan ID
router.get("/delete_employee/:id", employeeController.deleteEmployee);

module.exports = router;
