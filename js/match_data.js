/**
 * Print form with the options.
 * @param {*} headers Headers from spreadsheet.
 */
function print_form(headers) {
  
  let form_match_container = document.getElementById('form_match_fileds');
  let select = document.createElement("select");

  let i = 0;
  while (i < headers.length) {
    
    let option = document.createElement("option");
    option.value = headers[i];
    option.text = headers[i];
    select.add(option, null);
    i++

}

  form_match_container.appendChild(select);
}