import React from "react";
import Icon from "../Icon";

interface ISelectProps extends React.HTMLProps<HTMLSelectElement> {
    icon?: string
    onChange: any
    value?: any
    info: string
}

const Select: React.FC<ISelectProps> = (props) => {
    return (

        <div className="container-select">
            <p>{props.info}</p>
            <select value={props.value} {...props} onChange={props.onChange}>
                {props.children}
            </select>

        </div>





    )
}

export default Select