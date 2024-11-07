function formatDate(date) {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Date(date).toLocaleDateString("id-ID", options);
}

function formatSalary(salary) {
  const numberFormat = new Intl.NumberFormat("id-ID");
  return `Rp. ${numberFormat.format(salary)}`;
}

module.exports = {
  formatDate,
  formatSalary,
};
