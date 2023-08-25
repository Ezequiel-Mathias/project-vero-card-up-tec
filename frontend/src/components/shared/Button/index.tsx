import React from 'react';

interface IButtonProps {
    text: string
    onClick?: any,    
}

const Button: React.FC<IButtonProps> = ({ text, onClick }) => {

    return (
        <div className='button' onClick={onClick} >
            <p>{text}</p>
        </div>
    )
    
}

export default Button;