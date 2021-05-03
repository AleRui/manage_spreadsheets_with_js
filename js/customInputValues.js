function modifyInputAccordingNameField(type, value) {
  let modifiedValue = '';
  
  if (type) {
    switch (type) {
      case 'nombre':
      case 'apellidos':
        if (value) {
          modifiedValue = "'" + value.trim().replace(/[^a-zA-Z\s]/g, '') + "'";
        }
        break;
      case 'valor2':
        break;
      case 'valorN':
        break;
      default:
        break;
    }
  }
  
  return modifiedValue;
}