import React from 'react';

interface IButtonProps {
    text: string
    onClick?: any,    
}

const Button: React.FC<IButtonProps> = ({ text, onClick }) => {

    return (
        <div className={`button ${text == 'Editar' ? 'button-edit' : ''} ${text == 'Adicionar' ? 'button-add-user' : ''}`} onClick={onClick} >
            <p>{text}</p>
        </div>
    )
    
}

export default Button;