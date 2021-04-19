/**
 * Print form with the options.
 * @param {*} headers Headers from spreadsheet.
 */
function print_form(headers) {

  let total_inputs = document.createElement("div");
  let form_match_container = document.getElementById('form_match_fields');
  let select_spreadsheet_headers = document.createElement("select");

  /** TODO select type migration. */

  let i = 0;
  while (i < headers.length) {
    let option = document.createElement("option");
    option.value = headers[i];
    option.text = headers[i];
    select_spreadsheet_headers.add(option, null);
    i++
  }

  let j = 0;
  while (j < contacto.length) {
    let container_compare_fields = document.createElement("div");
    container_compare_fields.className = 'compare-' + j;

    let select_migrationType_headers = document.createElement("input");
    select_migrationType_headers.value = contacto[j];
    select_migrationType_headers.text = contacto[j];
    container_compare_fields.appendChild(select_migrationType_headers);

    let cloned_select = select_spreadsheet_headers.cloneNode(true);
    cloned_select.className = 'select_headers_spreadsheet_' + j;
    container_compare_fields.appendChild(cloned_select);

    total_inputs.appendChild(container_compare_fields)
    j++

  }

  form_match_container.appendChild(total_inputs);
}