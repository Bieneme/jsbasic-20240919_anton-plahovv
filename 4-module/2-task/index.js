function makeDiagonalRed(table) {
  // ваш код...
  // rows, cells
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
  }
}
