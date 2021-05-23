/**
 * Print form with the options.
 * @param {*} spreadsheet Headers from spreadsheet.
 */
function print_form(spreadsheet) {

  let form_match = document.createElement("form");
  form_match.id = 'form_match';
  let form_basic_info = document.createElement("form");
  form_basic_info.id = 'form_basic_info';

  /* idEmpresa */
  let container_input_idEmpresa = document.createElement("div");
  container_input_idEmpresa.id = 'cont-idEmpresa';
  container_input_idEmpresa.className = 'cont-idEmpresa';

  let input_migrationType_header_idEmpresa = document.createElement("input");
  input_migrationType_header_idEmpresa.id = 'field-idEmpresa';
  input_migrationType_header_idEmpresa.value = 'idEmpresa';
  input_migrationType_header_idEmpresa.text = 'idEmpresa';
  container_input_idEmpresa.appendChild(input_migrationType_header_idEmpresa);

  let input_idEmpresa = document.createElement("input");
  input_idEmpresa.id = 'idEmpresa-value';
  container_input_idEmpresa.appendChild(input_idEmpresa);

  form_basic_info.appendChild(container_input_idEmpresa);

  /* idFranquicia */
  let container_input_idFranquicia = document.createElement("div");
  container_input_idFranquicia.id = 'cont-idFranquicia';
  container_input_idFranquicia.className = 'cont-idFranquicia';

  let input_migrationType_header_idFranquicia = document.createElement("input");
  input_migrationType_header_idFranquicia.id = 'field-idFranquicia';
  input_migrationType_header_idFranquicia.value = 'idFranquicia';
  input_migrationType_header_idFranquicia.text = 'idFranquicia';
  container_input_idFranquicia.appendChild(input_migrationType_header_idFranquicia);

  let input_idFranquicia = document.createElement("input");
  input_idFranquicia.id = 'idFranquicia-value';
  container_input_idFranquicia.appendChild(input_idFranquicia);

  form_basic_info.appendChild(container_input_idFranquicia);

  let form_match_container = document.getElementById('form_match_fields');
  let select_spreadsheet_headers = document.createElement("select");

  /** TODO select type migration. */
  let headers = spreadsheet.headers;
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
    container_compare_fields.id = 'cont-compare-' + j;
    container_compare_fields.className = 'compare-' + j;

    let select_migrationType_headers = document.createElement("input");
    select_migrationType_headers.id = 'field-' + j;
    select_migrationType_headers.value = contacto[j];
    select_migrationType_headers.text = contacto[j];
    container_compare_fields.appendChild(select_migrationType_headers);

    let cloned_select = select_spreadsheet_headers.cloneNode(true);
    cloned_select.className = 'select_headers_spreadsheet_' + j;
    cloned_select.id = 'select-' + j;
    container_compare_fields.appendChild(cloned_select);

    form_match.appendChild(container_compare_fields)
    j++

  }

  btn_create_file = document.createElement("input");
  btn_create_file.type = 'button';
  btn_create_file.id = 'btn_form_match';
  btn_create_file.value = 'Create file SQL';
  form_match.appendChild(btn_create_file);

  // Insert Forms in DOM HTML.
  form_match_container.appendChild(form_basic_info);
  form_match_container.appendChild(form_match);

  //if (btn_create_file && createSQLfile && typeof createSQLfile == "function") {
    btn_create_file.addEventListener('click', (spreadsheat) => {
      let result_form_basic_info = document.getElementById("form_basic_info");
      let result_form_match = document.getElementById("form_match");
      createSQLfile(contacto, spreadsheet, result_form_basic_info, result_form_match);
    });
  //}
}