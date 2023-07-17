import React from 'react';

interface INavBarClient {
    titles : Array<any>
}

const NavBarClient: React.FC<INavBarClient> = ({titles}) => {
    return (
        <header>
            <div className="image-logo-client-white">
                <img src='https://firebasestorage.googleapis.com/v0/b/project-vero-card-up.appspot.com/o/Logo-Vero-Card-White.png?alt=media&token=f6ec1ceb-9e8e-4098-b969-d379b50811a8' alt="Logo up" />
            </div>
            <nav>
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