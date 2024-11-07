const { formatDate, formatSalary } = require("../utils/format");
const Employee = require("../models/employeeModel");

exports.listEmployees = (req, res) => {
    Employee.getAllEmployees((err, rows) => {
        if (err) throw err;

        rows.forEach ((employee) => {
            employee.tanggal_lahir = formatDate(employee.tanggal_lahir); // Format Tanggal Lahir DD-MM-YYYY
            employee.gaji = formatSalary(employee.gaji); // Format Gaji ke dalam Kurs Rupiah
        });

        res.render("employees/list", { employees: rows });
    });
};

exports.showAddForm = (req, res) => {
    res.render("employees/form");
};

exports.saveEmployee = (req, res) => {
    const data = req.body;
    Employee.addEmployee(data, (err) => {
        if (err) throw err;
        res.redirect("/employees");
    });
};

exports.showEditForm = (req, res) => {
    const id = req.params.id;
    Employee.getEmployeeById(id, (err, row) => {
        if (err) throw err;
        if (!row || row.length === 0) {
            return res.status(404).send("Employee not found!")
        }

        row[0].tanggal_lahir = formatDate(row[0].tanggal_lahir); // Format Tanggal Lahir DD-MM-YYYY
        row[0].gaji = formatSalary(row[0].gaji); // Format Gaji ke dalam Kurs Rupiah

        res.rende("employees/edit", { employee: row[0] });
    });
};

exports.updateEmployee = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Employee.updateEmployee(id, data, (err) => {
        if (err) throw err;
        res.redirect("/employees");
    });
}

exports.deleteEmployee = (req, res) => {
    const id = req.params.id;
    Employee.deleteEmployee(id, (err) => {
        if (err) throw err;
        res.redirect("/employees");
    });
};