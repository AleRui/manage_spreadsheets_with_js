function createSQLfile(contacto, spreadsheet, result_form_match) {
  // console.log(contacto);
  let headers_SQL_line = createHeadersInSQL(contacto);
  // console.log(headers_SQL_line);
  let rows_SQL_line = createRowsInSQL(contacto, spreadsheet, result_form_match);
}

function createHeadersInSQL (headers) {
  /** TODO: Can choose table name. */
  let fields = '';
  for (let i = 0; i < headers.length; i++) {
    if(i + 1 == headers.length) {
      fields += headers[i];
    } else {
      fields += headers[i] + ', ';
    }    
  }
  let sql_header = "INSERT INTO contacto (" + fields + ") VALUES";
  return sql_header;
}

function createRowsInSQL(contacto, spreadsheet, result_form_match) {
  let rows = '';
  console.log(spreadsheet.rows);
  for (const key in spreadsheet.rows) {
    if (Object.hasOwnProperty.call(spreadsheet.rows, key)) {
      console.log(spreadsheet.rows[key]);
      
    }
  }
  
}