import React, { useState } from 'react';
import Icon from '../Icon';

interface IInputProps extends React.HTMLProps<HTMLInputElement>{
    icon?: string,
    isPassword?: boolean,
    info?: string
}

const Input: React.FC<IInputProps> = (props) => {
    
    const [textVisibility , setTextVisibility] = useState(false);

    const toggleVisibility = () => setTextVisibility(!textVisibility);
    return (
        <div className="container-input">
         <p>{props.info}</p>
        <div className="input">
            <input value={props.value} type={ props.icon == "visibility" ? textVisibility === true ? 'text' : 'password' : 'text'} {...props} className={(props.icon) ? 'icon-input' : ''}></input>
            {
                props.icon == "visibility" ?

                <Icon name={textVisibility ? "visibility" : "visibility_off"} onClick={toggleVisibility}/>

                :
                props.icon && <Icon name={props.icon} />
            }
            
        </div>
        
        </div>
        
        

    )
}

export default Input;