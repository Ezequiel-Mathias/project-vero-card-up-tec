import React, { useState } from "react";
import Input from "../../shared/Input";
import Select from "../../shared/Select";
import Button from "../../shared/Button";
import Icon from "../../shared/Icon";
import api from "../../../connectionAPI";
import Swal from "sweetalert2";
import { isValidEmail } from "../../../utils/Validation";

interface IModalUsers {
    onClickClose: any,
    dataEdit: any
}

const ModalUsers: React.FC<IModalUsers> = ({ onClickClose, dataEdit }) => {

    const [comfirmEmail, setComfirmEmail] = useState(false)

    const [formValues, setFormValues] = useState({
        Name: `${dataEdit.nome === undefined ? '' : dataEdit.nome}`,
        Email: `${dataEdit.email === undefined ? '' : dataEdit.email}`,
        Password: `${dataEdit.senha === undefined ? '' : dataEdit.senha}`,
        ConfirmPassword: `${dataEdit.nome === undefined ? '' : dataEdit.senha}`,
        UserType: ""
    });



    const handleChange = (e: any) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }


    const ValidateEmail = () => {

        if (!isValidEmail(formValues.Email)) {
            Swal.fire({
                icon: 'error',
                title: 'Email invalido...',
                text: 'Insira um email valido.',
                preConfirm: Button
            });
            return false
        }
        return true
    }


    const isValidationCreateUser = () => {

        if (!formValues.Name || !formValues.Email || !formValues.ConfirmPassword
            || !formValues.Password || !formValues.UserType || formValues.UserType == 'Tipo de usuario...') {

            Swal.fire({
                icon: 'error',
                title: 'Campos vazios...',
                text: 'Preencha os campos necessarios para criar um usuario.',
                preConfirm: Button
            });

            return false;

        } else if (formValues.Password.length < 6 || formValues.ConfirmPassword.length < 6) {

            Swal.fire({
                icon: 'error',
                title: 'Senha invalida...',
                text: 'Adicione uma senha de mais de 5 digitos.',
                preConfirm: Button
            });

            return false;

        } else if (formValues.Password != formValues.ConfirmPassword) {

            Swal.fire({
                icon: 'error',
                title: 'A senha não confere...',
                text: 'Senha não confere, confira os campos de senha.',
                preConfirm: Button
            });

            return false;

        }

        return true;
    }

    const EditUser = async () => {

    }

    const CreateUser = async () => {

        if (!isValidationCreateUser() || !ValidateEmail()) {
            return
        }

        await api.post('confirmEmail', {
            email: formValues.Email,
        }).then((data) => {
            if(data.data === true){
                setComfirmEmail(true)
            }else{
                setComfirmEmail(false)
            }
            
        }).catch(() => {
            console.log("deu ruim ")
        });

        if (dataEdit.length === 0) {
            console.log(comfirmEmail);
            if (comfirmEmail === false) {
                await api.post('/users', {
                    nome: formValues.Name,
                    email: formValues.Email,
                    senha: formValues.Password,
                    admin: formValues.UserType == "Normal" ? '0' : '1',
                }).then(() => {
                    onClickClose();
                    window.location.reload();
                }).catch(() => {
                    console.clear();
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Este email já existe...',
                    text: 'Crie um usuário com um email que ainda não exista..',
                    preConfirm: Button
                });
            }
        } else {
            
                await api.put('/users', {
                    id: dataEdit.id ,
                    nome: formValues.Name,
                    email: formValues.Email,
                    senha: formValues.Password,
                    admin: formValues.UserType == "Normal" ? '0' : '1',
                }).then(() => {
                    onClickClose();
                    console.clear();
                    window.location.reload();
                }).catch((error) => {
                    console.clear();
                });
          
            }

    }

    return (

        <div className="container-modal">

            <div className="modal">

                <div className="container-close-icon">
                    <Icon name="close" onClick={onClickClose} />
                </div>

                <h2>Cadastrar usuario</h2>

                <div className="container-fields-user">

                    <Input value={formValues.Name} info="Nome:" name="Name" onChange={handleChange} />

                    <Input value={formValues.Email} info="Email:" name="Email" onChange={handleChange} validate={() => ValidateEmail()} />

                    <Input value={formValues.Password} info="Senha:" name="Password" icon="visibility" onChange={handleChange} />

                    <Input  info="Confirmar senha:" icon="visibility" name="ConfirmPassword" onChange={handleChange} />

                    <Select info={"Selecione o tipo de usuario:"} name="UserType" onChange={handleChange} >
                        <option selected>Tipo de usuario...</option>
                        <option value="Normal">Normal</option>
                        <option value="Admin">Admin</option>
                    </Select>
                </div>

                <div className="container-button">
                    <Button text={dataEdit.length === 0 ? "Adicionar" : "Editar"} onClick={() => CreateUser()} />
                </div>

            </div>
        </div>

    )
}

export default ModalUsers