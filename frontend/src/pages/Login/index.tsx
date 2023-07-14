import React, { useState, useContext , useEffect} from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Context } from '../../AuthContext/AuthContext';
import useAuth from '../../AuthContext/hooks/UseAuth';
import { isValidEmail } from "../../utils/Validation";
import Swal from 'sweetalert2';



const PageLoguin: React.FC = () => {

    const { handleLogin }: any = useContext(Context);

    const [emailVerification, setEmailVerification] = useState(true);

    const [teste , seTeste] = useState(true);

    const [passwordVerification, setPasswordVerification] = useState(true);

    const [emailUserInput, setEmailUserInput] = useState('');

    const [passwordUserInput, setPasswordUserInput] = useState('');

    const ValidateEmail = () => {

        if (!isValidEmail(emailUserInput)) {

            setEmailVerification(false);

            return false
        }

        setEmailVerification(true);

        return true;
    }

    const ValidatePassword = () => {

        if (passwordUserInput.length < 6) {

            setPasswordVerification(false);

            return false
        }

        setPasswordVerification(true);

        return true;
    }

    const isValidationLogin = () => {

        if (!emailUserInput || !passwordUserInput) {
            Swal.fire({
                icon: 'error',
                title: 'Campos vazios...',
                text: 'Preencha todos os campos para efetuar o login.',
            });
            return false;
        }

        if (!ValidateEmail() || !ValidatePassword())
            return false;

        return true;
    }

    const onConfirmButtonPress = (event : any) => {

        
              
            if (!isValidationLogin())
            return;


        handleLogin(emailUserInput, passwordUserInput);
       

        


    }


 /*    useEffect(() => {

        window.addEventListener("keydown", (event) => {
           if(event.key === 'Enter'){
            return onConfirmButtonPress(event.key)
           }
           
           
        });
    
        return () => {
          window.removeEventListener("keydown", onConfirmButtonPress);
        };
      }, []); */

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
                            <Input info="Email:" value={emailUserInput} onChange={(text: any) => setEmailUserInput(text.target.value)} validate={() => ValidateEmail()} />
                            <div className="message-error-verification">
                                {!emailVerification ? <p>O e-mail inserido não é valido.</p> : null}
                            </div>

                        </div>

                        <div className="input-password-user">
                            <Input info="Senha:" icon="visibility" onChange={(text: any) => setPasswordUserInput(text.target.value)} validate={() => ValidatePassword()} />
                            <div className="message-error-verification">
                                {!passwordVerification ? <p>A senha deve conter mais de 5 digitos</p> : null}
                            </div>

                        </div>

                        <Button text="Entrar" onClick={onConfirmButtonPress}  />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default PageLoguin