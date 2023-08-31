import React, { useState, useContext } from 'react';
import Icon from '../../shared/Icon';
import { Link } from 'react-router-dom';
import { Context } from '../../../AuthContext/AuthContext';
const NavBarClient: React.FC = () => {

    const [sideBar, setSideBar] = useState(false);

    const { authenticatedAdmin }: any = useContext(Context);

    const showSidebar = () => setSideBar(!sideBar);

    const { handleLogout }: any = useContext(Context);

    

    return (
        <header>
            <nav>
                <div className="image-logo-client-white">
                    <img src='https://firebasestorage.googleapis.com/v0/b/project-vero-card-up.appspot.com/o/Logo-Vero-Card-White.png?alt=media&token=f6ec1ceb-9e8e-4098-b969-d379b50811a8' alt="Logo up" />
                </div>
                <Icon name='menu' onClick={showSidebar} />
                <ul className="nav-list">

                    <li><Link to={`${process.env.PUBLIC_URL}/home`}>Home</Link></li>

                    <li><Link to={`${process.env.PUBLIC_URL}/relatorio-producao`}>Relatorio de Produção</Link></li>

                    <li><Link to={`${process.env.PUBLIC_URL}/estoque`}>Estoque</Link></li>

                    {
                        authenticatedAdmin ?
                            <>
                                <li><Link to={`${process.env.PUBLIC_URL}/usuarios`}>Admin users</Link></li>
                                {/* <li><Link to={`${process.env.PUBLIC_URL}/emitidos`}>Cartões Emitidos</Link></li> */}
                            </>

                            :
                            <>

                            </>
                    }
                    <div className='container-logout-icon'>
                        <li><Icon name='logout' onClick={() => handleLogout()} /></li>
                    </div>


                </ul>
            </nav>

            {
                sideBar ?
                    <div className='container-sadbar'>

                        <div className='container-icon-close'>

                            <Icon name='close' onClick={showSidebar} />

                        </div>



                        <ul className="nav-list">

                            <li><Link to={`${process.env.PUBLIC_URL}/home`}>Home</Link></li>

                            <li><Link to={`${process.env.PUBLIC_URL}/relatorio-producao`}>Relatorio de Produção</Link></li>

                            <li><Link to={`${process.env.PUBLIC_URL}/estoque`}>Estoque</Link></li>

                            {
                                authenticatedAdmin ?
                                    <>
                                        <li><Link to={`${process.env.PUBLIC_URL}/usuarios`}>Admin users</Link></li>
                                        {/* <li><Link to={`${process.env.PUBLIC_URL}/emitidos`}>Cartões Emitidos</Link></li> */}
                                    </>
                                    :
                                    <></>
                            }

                            <li><Icon name='logout' onClick={() => handleLogout()} /></li>
                        </ul>

                    </div>

                    :

                    null
            }


        </header>
    )
}

export default NavBarClient