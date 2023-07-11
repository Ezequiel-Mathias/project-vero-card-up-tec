import React, {useState} from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";




const PageLoguin: React.FC = () => {

    const [nameUserInput , setNameUserInput] = useState('');
    
    const [passwordUserInput , setPasswordUserInput] = useState('');

    
    
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
                            <Input info="Nome de usuario:" onChange={(text : any) => setNameUserInput(text.target.value)} />
                        </div>

                        <div className="input-password-user">
                            <Input info="Senha:" icon="visibility" onChange={(text : any) => setPasswordUserInput(text.target.value)} />
                        </div>

                        <Button text="Entrar" />

                    </div>


                </div>

            </div>

        </div>
    )
}

export default PageLoguin