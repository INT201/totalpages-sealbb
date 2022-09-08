// ให้เขียน Function ชื่อ totalPages (arrayItems, rowsPerPage) โดยที่ arrayItems คือ array ของรายการ Items ทั้งหมด และ rowsPerPage คือ จำนวนรายการ Item ที่จะแสดงต่อ 1 Page โดยฟังก์ชันจะ return จำนวน page ที่คำนวณได้
// กรณี arrayItems เป็น null หรือ undefined ให้ return undefined

// กรณี rowsPerPage เป็น null หรือ undefined หรือเป็น 0 จะ return 1

// ตัวอย่างเช่น

// I.arrayItems = [item1, item2, item3,…, item35] , rowsPerPage = 15 return 3
// II.arrayItems = [item1, item2, item3,…, item10] , rowsPerPage = 20 return 1
// III.arrayItems = [item1, item2, item3,…, item40] , rowsPerPage = 10 return 4
// IV.arrayItems = [item1, item2, item3,…, item25] , rowsPerPage = 0 return 1
// V.arrayItems = [item1, item2, item3,…, item25] , rowsPerPage = null return 1
// VI.arrayItems = [item1, item2, item3,…, item25] , rowsPerPage = undefined return 1
// VII.arrayItems = null, rowsPerPage = 20 return undefined
// VIII.arrayItems = undefined, rowsPerPage = 20 return undefined

const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
}
module.exports = totalPages
