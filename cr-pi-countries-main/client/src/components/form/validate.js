function validate (input) {
    let errors = {};
    if (!input.name || !/^[a-zA-Z\s]*$/.test(input.name) || input.name.length < 3 || input.name.length >= 25) errors.name = 'Debe contener de 3 a 25 caracteres, sólo letras'; //patrón utilizado para buscar cadenas que consisten únicamente en caracteres alfabéticos (mayúsculas y minúsculas) y caracteres de espacio en blanco.
    if (!input.difficulty) errors.difficulty = 'Se requiere dificultad';
    if (!input.duration) errors.duration = 'Duración requerida';
    if (!input.season) errors.season = 'Se requiere temporada';
    if (input.countryId.length < 1) errors.countryId = 'Debe seleccionar al menos 1 país';
    return errors;
}

export default validate;