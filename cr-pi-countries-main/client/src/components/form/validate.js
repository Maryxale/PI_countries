function validate (input) {
    let errors = {};  //expresion regular
    if (!input.name || !/^[a-zA-Z\s]*$/.test(input.name) || input.name.length < 3 || input.name.length >= 25) errors.name = 'Debe contener de 3 a 25 caracteres, sólo letras'; //Verifica si name existe, si tiene solo letras y espacios, si su longitud está entre 3 y 25 caracteres.
    if (!input.difficulty) errors.difficulty = 'Se requiere dificultad';
    if (!input.duration) errors.duration = 'Duración requerida';
    if (!input.season) errors.season = 'Se requiere temporada';
    if (input.countryId.length < 1) errors.countryId = 'Debe seleccionar al menos 1 país';
    return errors;
}
//se realiza validaciones especificas para garantizar que ciertos campos cumplan con ciertos criterios.

export default validate;