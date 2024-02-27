import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCountry, addActivity, getActivity, deleteActivities } from '../../redux/actions';
import validate from "./validate";  //validacion en js
import style from "./Form.module.css"

const reiniciar = () => {
    location.reload(false)  
}

const Form = () => {
    const dispatch = useDispatch();
    const nameCountry = useSelector((state) => state.countries);
    const orderCountry = nameCountry.sort((a, b) => a.name.localeCompare(b.name))
    //uso el estado countries declarado en el initialState
    const theActivities = useSelector((state) => state.activities);
    const orderActivities = theActivities.sort((a, b) => a.name.localeCompare(b.name))
    //uso el estado activities declarado en el initialState 
    //para poder ordenar

    const [input, setInput] = useState({
        name: '', 
        difficulty: '', 
        duration: '', 
        season: '',
        countryId: []
    });
    
    const [errors, setErrors] = useState({}); //validate
    
    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...input,
            [event.target.name]: event.target.value
        }))
    }
    //cuando se produce un cambio indica que se guarde dentro del estado correspondiente
    //luego se realizan las validaciones en el nuevo estado
    
    
    const handleCountry = (event) => {
        setInput({
            ...input,
            countryId: [...input.countryId, event.target.value]
        })
        setErrors(validate({
            ...input,
            countryId: [...input.countryId, event.target.value]
        }))
    }

    //para cuando se seleccione algun pais donde se realiza una actividad
    //luego se realizan las validaciones en el nuevo estado
    

    const handleSubmit = (event) => {
         event.preventDefault(); 
        const nameSalida = theActivities.find(activity => activity.name.toLowerCase() === input.name.toLowerCase()) ? 1 : 0; //por si hay alguna coincidencia en el nombre de alguna actividad
        if (nameSalida === 1) alert("El nombre de la actividad ya existe");
        else {
            dispatch(addActivity(input)) 
            alert('Actividad Creada!')//se notifica al usuario que se creo la actividad
            setInput({
                name: '', 
                difficulty: '', 
                duration: '', 
                season: '',
                countryId: []
            }) 
            reiniciar(); 
        }
    }

    //Delete Activity
    const [actDelete, setactDelete] = useState('');

    const handleDelete = (event) => {
        setactDelete(event.target.value)
    }
    //para eliminar la actividad

    const handleSubmitDelete = (event) => {
         event.preventDefault();
        dispatch(deleteActivities(actDelete));
            alert('Actividad eliminada')
            setactDelete('');
            reiniciar(); //para que se actualice de una vez en el delete la actividad 
        
    }
    
    //useEffect:para obtener lista de paises y actividades del servidor
    useEffect(() => {
        dispatch(getCountry())
    }, [dispatch]);
    
    
    useEffect(() => {
        dispatch(getActivity())
    }, [dispatch]);
    
 // con este elimino actividades 
    useEffect(() => {
        dispatch(deleteActivities())
    }, [dispatch]);
   

    
    //para crear una actividad
    return (
        <div className={style.contenedor}>
           
            <div className={style.formContainer}>
                <p className={style.titulo}>Nueva Actividad</p>
                <form onSubmit={(e) => handleSubmit(e)}>

                    
                        <div className={style.formCampo}>
                            <div className={style.unidos}>
                                <label className={style.label}>Name: </label>
                                <input className={style.formInputt} onChange={handleChange} type="text" value={input.name} name='name' placeholder="Nombre de Actividad"/>
                            </div>
                            
                            
                                {errors.name && <p className={style.formError}>{errors.name}</p>}
                            
                        </div>

                        <div className={style.formCampo}>
                                <label className={style.label}>Difficulty: </label>
                                <select className={style.formInput} onChange={handleChange} name='difficulty'>
                                    <option value="" disabled selected>Selecciona</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                           
                                {errors.difficulty && <p className={style.formError}>{errors.difficulty}</p>}
                           
                        </div>

                        <div className={style.formCampo}>
                            
                                <label className={style.label}>Duration: </label>
                                <select className={style.formInput} onChange={handleChange} name='duration'>
                                    <option value="" disabled selected>Selecciona</option>
                                    <option value="1">1 hs</option>
                                    <option value="2">2 hs</option>
                                    <option value="3">3 hs</option>
                                    <option value="4">4 hs</option>
                                    <option value="5">5 hs</option>
                                    <option value="6">6 hs</option>
                                    <option value="7">7 hs</option>
                                    <option value="8">8 hs</option>
                                    <option value="9">9 hs</option>
                                    <option value="10">10 hs</option>
                                    <option value="11">11 hs</option>
                                    <option value="12">12 hs</option>
                                    <option value="13">13 hs</option>
                                    <option value="14">14 hs</option>
                                    <option value="15">15 hs</option>
                                    <option value="16">16 hs</option>
                                    <option value="17">17 hs</option>
                                    <option value="18">18 hs</option>
                                    <option value="19">19 hs</option>
                                    <option value="20">20 hs</option>
                                    <option value="21">21 hs</option>
                                    <option value="22">22 hs</option>
                                    <option value="23">23 hs</option>
                                    <option value="24">24 hs</option>
                                </select>
                        
                                {errors.duration && <p className={style.formError}>{errors.duration}</p>}
                           
                        </div>

                        <div className={style.formCampo}>
                            
                                <label className={style.label}>Season: </label>
                                <select className={style.formInput} onChange={handleChange} name='season'>
                                    <option value="" disabled selected>Selecciona</option>
                                    <option value="Summer">Summer</option>
                                    <option value="Autumn">Autumn</option>
                                    <option value="Winter">Winter</option>
                                    <option value="Spring">Spring</option>
                                </select>
                            
                                {errors.season && <p className={style.formError}>{errors.season}</p>}
                           
                        </div>

                        <div className={style.formCampo}>
                            
                                <label className={style.label}>Country: </label>
                                <select className={style.formInput} onChange={handleCountry}>
                                    <option value="" disabled selected>Selecciona Pais</option>  
                                    {orderCountry.map((country) => (
                                        <option value={country.id}>{country.name}</option>
                                        // se generan opciones para el menú
                                    ))}
                                </select>
                                
                                {errors.countryId && <p className={style.formError}>{errors.countryId}</p>}
                        <div >
                            <ul className={style.elegidos}>
                                <p>{input.countryId.map(countrieId_input => nameCountry.map(countrie_state => {
                                if (countrie_state.id === countrieId_input) { 
                                    return countrie_state.name + ', ';
                                }
                                }))}
                                </p>
                            </ul>
                        </div>
                            {/* Se mapea las propiedades donde se guardaron los id y los nombres de paises*/}
                        </div>

                   

                    <div>
                        <button className={style.nav} type="submit" disabled={input.name === ''||input.difficulty==='' || input.duration===''||input.season===''||input.countryId.length<0||errors.name||errors.difficulty||errors.duration||errors.season||errors.countryId}>Crear</button>
                        
                    </div>
                </form>
            </div>

            {/*Delete*/}
            <div className={style.formContainerdel}>
                <div >
                <p className={style.titulo}>Eliminar Actividad</p>
                <form onSubmit={(event) => handleSubmitDelete(event)}>
                    
                        <div className={style.formCampo}>
                            <div>
                                <select className={style.formInputdel} onChange={handleDelete}>
                                    <option value="" disabled selected>Actividad</option>
                                    {orderActivities && orderActivities.map((activity) => {
                                        return (
                                            <option value={activity.name}>{activity.name}</option>
                                        )
                                    })}
                                    
                                </select>
                            </div>
                        </div>

                    <p className={style.elegidos} >Actividad a eliminar: {actDelete}</p>

                    <div>
                        <button className={style.nav} type="submit" disabled={actDelete===''}>Borrar</button>
                        
                    </div>
                </form>
                
                </div>
                
            </div>
            
        </div>
        
       
        
    )
}

export default Form;