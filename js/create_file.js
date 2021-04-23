function createSQLfile(contacto, spreadsheet, result_form_match) {

  let headers_SQL_line = createHeadersInSQL(contacto);
  let rows_SQL_line = createRowsInSQL(contacto, spreadsheet, result_form_match);
  console.log(rows_SQL_line);
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

function createRowsInSQL(contacto, spreadsheet, result_form_match) {
  let rows = '';

  // Compare "contacto field" with inputs field values form.
  let divs_form = result_form_match.children;

  // console.log(spreadsheet.rows);
  for (const key in spreadsheet.rows) {

    if (Object.hasOwnProperty.call(spreadsheet.rows, key)) {
      const element = spreadsheet.rows[key];
      // console.log(element);

      for (let j = 0; j < divs_form.length; j++) {
        let field_value_name = divs_form[j].children[1];

        if (!check_exists(field_value_name)) {
          continue;
        }
        
        let name_field_select = field_value_name.value;
        rows += element[name_field_select] + ", "

      }


      rows += "\n";
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