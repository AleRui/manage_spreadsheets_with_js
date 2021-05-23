function modifyInputAccordingNameField(type, value) {
  let modifiedValue = '';
  
  if (type) {
    switch (type) {
      case 'nombre':
      case 'apellidos':
      case 'provi':
      case 'pobla':
        if (value) {
          modifiedValue = "'" + value.trim().replace(/[^a-zA-Z\s]/g, '') + "'";
        }
        break;
      default:
        if (value && typeof(value) == "string") {
          modifiedValue = "'" + value.trim() + "'";
        }
        break;
    }
  }
  
  return modifiedValue;
}