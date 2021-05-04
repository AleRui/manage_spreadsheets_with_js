function createSQLfile(contacto, spreadsheet, result_form_match) {

  let headers_SQL_line = createHeadersInSQL(contacto);
  let rows_SQL_line = createRowsInSQL(spreadsheet, result_form_match);
  console.log(rows_SQL_line);
  /* ----------- CREATE FILE ------------- */
  
  var blob = new Blob([
    headers_SQL_line,
    "\n",
    rows_SQL_line
  ], {
    type: "text/plain;charset=utf-8"
  });
  saveAs(blob, "namefile.sql");
  
}

function createHeadersInSQL(headers) {
  /** TODO: Can choose table name. */
  let fields = '';
  for (let i = 0; i < headers.length; i++) {
    if (i + 1 == headers.length) {
      fields += headers[i];
    } else {
      fields += headers[i] + ', ';
    }
  }
  let sql_header = "INSERT INTO contacto (" + fields + ") VALUES";
  return sql_header;
}

function createRowsInSQL(spreadsheet, result_form_match) {
  let rows = '';
  
  let idEmpresa = result_form_match[1].value;
  let idFranquicia = result_form_match[3].value;

  // Compare "contacto field" with inputs field values form.
  let divs_form = result_form_match.children; // Atention! input button is a child too.
  
  for (const key in spreadsheet.rows) {

    if (Object.hasOwnProperty.call(spreadsheet.rows, key)) {
      const element = spreadsheet.rows[key];

      rows += "(" + idEmpresa + "," + idFranquicia + ",";

      for (let j = 0; j < divs_form.length; j++) {
        let field_value_name = divs_form[j].children[1];

        if (!check_exists(field_value_name)) {
          continue;
        }

        let result_Modified_name_field
          = modifyInputAccordingNameField(
            field_value_name.value,
            element[field_value_name.value]
        );
        
        rows += (result_Modified_name_field) ? result_Modified_name_field : "''";
        
        endRow = (divs_form.length - 2 == j) ? "" : ", "; // -2 because divs childs get input button.
        rows += endRow;

      }


      rows += "),\n";
    }
  }


  return rows;

}

function check_exists(element) {
  return (element &&
    element != 'undefined' &&
    element != '' &&
    element != null);
}