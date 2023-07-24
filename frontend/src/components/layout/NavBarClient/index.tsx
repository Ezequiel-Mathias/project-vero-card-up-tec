import React, { useState } from 'react';
import Icon from '../../shared/Icon';

interface INavBarClient {
    titles: Array<any>
}

const NavBarClient: React.FC<INavBarClient> = ({ titles }) => {

    const [sideBar , setSideBar] = useState(false)

    const showSidebar = () => setSideBar(!sideBar)

    return (
        <header>
            <nav>
                <div className="image-logo-client-white">
                    <img src='https://firebasestorage.googleapis.com/v0/b/project-vero-card-up.appspot.com/o/Logo-Vero-Card-White.png?alt=media&token=f6ec1ceb-9e8e-4098-b969-d379b50811a8' alt="Logo up" />
                </div>
                <Icon name='menu'/>
                <ul className="nav-list">
                    {
                        titles.map((teste) => (
                            <li>{teste}</li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default NavBarClient