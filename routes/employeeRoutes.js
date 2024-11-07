const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// Route untuk menampilkan daftar pegawai
router.get("/employees", employeeController.listEmployees);

// Route untuk menampilkan form penambahan data pegawai
router.get("/add_employee", employeeController.showAddForm);

// Route untuk menyimpan data pegawai ke dalam database
router.post("/save_employee", employeeController.saveEmployee);

// Route untuk menampilkan form pengubahan data pegawai
router.get("/edit_employee/:id", employeeController.showEditForm);

// Route untuk memperbarui data dalam database
router.post("update_employee/:id", employeeController.updateEmployee);

// Route untuk menghapus data pegawai
router.get("/delete_employee/:id", employeeController.deleteEmployee);

module.exports = router;