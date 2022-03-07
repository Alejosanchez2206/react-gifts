import React, { useState } from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({setcategoria}) => {
    const [inputValue, setinputValue] = useState('')
   
    const handleInputChange = (e) =>{
        setinputValue(e.target.value);
    }

    const handleSubmit =  (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setcategoria( cats => [inputValue,...cats])
            setinputValue('')
        }
        
    }    
    return (
        <form onSubmit = {handleSubmit}>
            <input
                type="text"
                placeholder="Buscar GIF"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setcategoria: propTypes.func.isRequired,
}