import React, { useState } from 'react';
import Icon from '../Icon';

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
    icon?: string
    isPassword?: boolean
    info?: string
    validate?: (name?: string) => boolean
    placeholder?: string
    value?: string
    clickIcon?: any
}

const Input: React.FC<IInputProps> = (props) => {

    const [isValid, setValid] = useState(true);

    const [textVisibility, setTextVisibility] = useState(false);

    const validade = () => {
        if (!props.validate) return
        setValid(props.validate(props.name))
    }

    const toggleVisibility = () => setTextVisibility(!textVisibility);

    return (
        <div className="container-input">
            <p>{props.info}</p>
            <div className={`input ${!isValid ? 'error' : ''}`} onBlur={validade}>
                <input placeholder={props.placeholder} value={props.value} type={props.icon == "visibility" ? textVisibility === true ? 'text' : 'password' : 'text'} {...props} className={(props.icon) ? 'icon-input' : ''}></input>
                {
                    props.icon == "visibility" ?

                        <Icon name={textVisibility ? "visibility" : "visibility_off"} onClick={toggleVisibility} />

                        :

                        props.icon && <Icon name={props.icon} onClick={props.clickIcon} />
                        
                }

            </div>
        </div>
    )
}

export default Input;