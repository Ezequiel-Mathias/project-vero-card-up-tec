import React, { useState, useContext } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Context } from '../../AuthContext/AuthContext';
import useAuth from '../../AuthContext/hooks/UseAuth';
import { isValidEmail } from "../../utils/Validation";


const PageLoguin: React.FC = () => {

    const { handleLogin }: any = useContext(Context);

    

    const [emailUserInput, setEmailUserInput] = useState('');

    const [passwordUserInput, setPasswordUserInput] = useState('');

    const isValidationPress = () => {

        if (!emailUserInput || !passwordUserInput)
            return false;

        if (!isValidEmail(emailUserInput)){
            
            return false;
        }
            

        return true
    }

    const onConfirmButtonPress = () => {

        if (!isValidationPress())
            return alert("Preencha todos os campos corretamente")

        handleLogin(emailUserInput, passwordUserInput);

    }

    return (
        <div className="container-page-login">

            <div className="container-login">

                <div className="container-style-uptechnology">

                    <div className="image-logo-up">
                        <img src='https://firebasestorage.googleapis.com/v0/b/project-vero-card-up.appspot.com/o/LogoUP.svg?alt=media&token=a4d9e086-9cc7-4d6d-846d-875f2858b698' alt="Logo up" />
                    </div>

                    <div className="greetings-up">
                        <p>Acompanhe o nosso trabalho de perto e obtenha diversas informações sobre o andamento da fabricação dos seus cartões !</p>
                    </div>

                    <div className="image-user-login">
                        <img src="https://firebasestorage.googleapis.com/v0/b/project-vero-card-up.appspot.com/o/Userlogin.svg?alt=media&token=db2d57b8-e4a4-489e-9628-0e1b00d6d15e" alt="Logo cliente" />
                    </div>

                </div>

                <div className="container-style-client">

                    <div className="image-logo-client">
                        <img src='https://firebasestorage.googleapis.com/v0/b/project-vero-card-up.appspot.com/o/LogoVerocard.svg?alt=media&token=dfa37f53-dd1d-4d6d-84ed-8a95fe4069b7' alt="Logo up" />
                    </div>

                    <h1>Entrar</h1>
                    <p>Faça login para iniciar sua sessão</p>


                    <div className="container-inputs-login">

                        <div className="input-name-user">
                            <Input info="Email:" value={emailUserInput} onChange={(text: any) => setEmailUserInput(text.target.value)} validate={() => isValidEmail(emailUserInput)} />
                            <p></p>
                        </div>

                        <div className="input-password-user">
                            <Input info="Senha:" icon="visibility" onChange={(text: any) => setPasswordUserInput(text.target.value)} />
                        </div>

                        <Button text="Entrar" onClick={onConfirmButtonPress} />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default PageLoguin