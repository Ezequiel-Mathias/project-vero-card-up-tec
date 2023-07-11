import React from 'react';

interface IButtonProps {
    text : string
}

const Button: React.FC<IButtonProps> = ({text}) => {
    return(
        <div className="button">
            {text}
        </div>
    )
}

export default Button;