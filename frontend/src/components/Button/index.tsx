import React from 'react';
import {useEffect, useRef} from 'react';

interface IButtonProps {
    text: string
    onClick?: any,
    onKeyDown?: any
}



const Button: React.FC<IButtonProps> = ({ text, onClick, onKeyDown }) => {

    


    return (
        <div className="button" onClick={onClick} onKeyUp={onKeyDown}>
            <p>{text}</p>
        </div>
    )
}

export default Button;