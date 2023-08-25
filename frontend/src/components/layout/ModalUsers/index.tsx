import React from "react";
import Input from "../../shared/Input";
import Select from "../../shared/Select";
import Button from "../../shared/Button";
import Icon from "../../shared/Icon";

interface IModalUsers{
    onClickClose : any
}

const ModalUsers: React.FC<IModalUsers> = ({onClickClose}) => {
    return (
        <div className="container-modal">
            <div className="modal">
                <div className="container-close-icon">
                    <Icon name="close" onClick={onClickClose}/>
                </div>
                <h2>Cadastrar usuario</h2>


                <div className="container-fields-user">
                    <Input info="Nome:" />
                    <Input info="Email:" />
                    <Input info="Senha:" />


                    <Select info={"Selecione o tipo de usuario:"} name="cardType" onChange={() => { }}>
                        <option selected>Selecione um tipo...</option>
                        <option value="Tarja">Normal</option>
                        <option value="Chip">Admin</option>
                    </Select>
                </div>

                <div className="container-button">
                    <Button text="Adicionar" />
                </div>


            </div>
        </div>

    )
}

export default ModalUsers