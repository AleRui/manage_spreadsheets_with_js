<?php

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Migrar Contactos</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./css/migration_data.css">
</head>
<body>
  <div>
    <label for="avatar">Choose an Excel or CSV file:</label>
    <input type="file" id="document_picker" accept=".csv,application/vnd.ms-excel,.xlt,application/vnd.ms-excel,.xla,application/vnd.ms-excel,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xltx,application/vnd.openxmlformats-officedocument.spreadsheetml.template,.xlsm,application/vnd.ms-excel.sheet.macroEnabled.12,.xltm,application/vnd.ms-excel.template.macroEnabled.12,.xlam,application/vnd.ms-excel.addin.macroEnabled.12,.xlsb,application/vnd.ms-excel.sheet.binary.macroEnabled.12">
  </div>
  <div id="form_match_fields">
    <h4>Form Space</h4>
  </div>
  <!-- JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.14.3/xlsx.full.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js"></script>
    <script src="./js/customInputValues.js"></script>
    <script src="./js/create_file.js"></script>
    <script src="./js/migrationTypes.js"></script>
    <script src="./js/match_data.js"></script>
    <script src="./js/import_data.js"></script>
</body>
</html>