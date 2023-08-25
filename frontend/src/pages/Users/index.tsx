import React, { useEffect, useState } from "react";
import NavBarClient from "../../components/layout/NavBarClient";
import DefaultHeader from "../../components/layout/DefaultHeader";
import Input from "../../components/shared/Input";
import Table from "../../components/shared/Table";
import DownloadFacilitators from "../../components/layout/DownloadFacilitators";
import Icon from "../../components/shared/Icon";
import api from "../../connectionAPI";


const PageUsers: React.FC = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        const UsersPageRequests = async () => {

            await api.get('/users')
                .then((data) => {
                    setUsers(data.data);
                }).catch(() => {

                });
        }

        UsersPageRequests()

    }, []);



    return (

        <div className="container-page-users">

            <DefaultHeader sessionTheme="Admin users" />

            <div className="container-input-search">

                <Input info="Pesquisar:" icon="search" />

            </div>

            <div className="table-container">

                <div className="scroll-table">
                    <table >
                        <tr>
                            <td>Nome</td>
                            <td>Email</td>
                            <td>Senha</td>
                            <td>Deletar</td>
                            <td>Editar</td>

                        </tr>

                        {
                            users &&

                            users.map((user : any) =>
                                <tr>

                                    <td>{user.nome}</td>
                                    <td>{user.email}</td>
                                    <td>{user.senha}</td>
                                    <td><Icon name="delete" /></td>
                                    <td><Icon name="edit" /></td>

                                </tr>
                            )


                        }


                    </table>
                </div>


            </div>


            <DownloadFacilitators />

        </div>

    )
}

export default PageUsers