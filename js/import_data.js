// debugger;

let file = document.getElementById('document_picker');
let spreadsheet; /**Content off spreadsheet. */

file.addEventListener('change', (evt) => {
  let result = importFile(evt).then(spreadsheet => {
    print_form(spreadsheet.headers);
  });

});

/* --------- */
/* Functions */
/* --------- */

/**
 * Get info from spreadsheet file.
 * @param {*} evt Event from imput.
 * @returns object with info from spreadsheet.
 */
function importFile(evt) {
  return new Promise((resolve, reject) => {
    let file = evt.target.files[0];
    if (file) {
      let fileReader = new FileReader();
      fileReader.onload = e => {
        resolve(processExcel(e.target.result).then(response => {
          return response;
        }));
      }
      fileReader.readAsBinaryString(file);
    } else {
      reject("Failed to load file.");
    }
  });
}

/**
 * Procces spreadsheat file with the library sheetjs.
 * @param {*} data 
 * @returns object.
 */
function processExcel(data) {
  return new Promise((resolve, reject) => {
    let workbook = XLSX.read(data, {
      type: 'binary'
    });
    if (workbook) {
      resolve(to_json(workbook).then(response => {
        return response;
      }));
    } else {
      reject("Failed to read file.");
    }
  });
};

/**
 * Transform data in object with info from spreadsheet.
 * @param {*} workbook Object of sheetjs library.
 * @returns Object with ordered headers and rows from spreadsheat.
 */
function to_json(workbook) {
  return new Promise((resolve, reject) => {
    let result = {};
    workbook.SheetNames.forEach(function (sheetName) {
      let roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
        header: 1
      });
      /** Header */
      if (roa[0].length) {
        result['headers'] = roa[0];
      }
      /** Rows */
      if (roa[0].length) {
        let rows = [];
        for (let i = 1; i < roa.length; i++) {
          let setKeyEachCell = {};
          let row = roa[i];
          for (let j = 0; j < roa[i].length; j++) {
            const element = roa[i][j];
            setKeyEachCell[roa[0][j]] = element;
          }
          rows['rows-' + i] = setKeyEachCell;
        }
        result['rows'] = rows;
      }
    });
    if (result) {
      resolve(result);
    }else {
      reject("Empty result.");
    }
  });
};