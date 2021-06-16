import React, {useState} from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ( {setCategorias} ) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
        
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if (inputValue.trim().length > 2 ) {
            setCategorias( cats => [inputValue, ...cats]);
            setInputValue('');
        } else {
            alert('La categoria debe contener al menos 2 caracteres');
        }

    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={inputValue}
                placeholder="Que gif quieres buscar?"
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.PropType = {
    setCategorias: PropTypes.func.isRequired
}