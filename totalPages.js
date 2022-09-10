const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  if(!arrayItems){
    return undefined
  }else if(!rowsPerPage || rowsPerPage===0){
    return 1
  }else{
    let page = Math.ceil((arrayItems.length)/rowsPerPage)
    return page
  }
}
module.exports = totalPages