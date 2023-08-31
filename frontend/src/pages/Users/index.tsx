import React, { useEffect, useState, useRef } from "react";
import NavBarClient from "../../components/layout/NavBarClient";
import DefaultHeader from "../../components/layout/DefaultHeader";
import Input from "../../components/shared/Input";
import Table from "../../components/shared/Table";
import DownloadFacilitators from "../../components/layout/DownloadFacilitators";
import Icon from "../../components/shared/Icon";
import api from "../../connectionAPI";
import ModalUsers from "../../components/layout/ModalUsers";
import Swal from "sweetalert2";
import { useDownloadExcel } from "react-export-table-to-excel";


const PageUsers: React.FC = () => {

    const [users, setUsers] = useState([]);

    const [searchUserText, setSearchUserText] = useState();

    const [editDataUser, setEditdatauser] = useState([]);

    const [modal, setModal] = useState(false);

    useEffect(() => {

        const UsersPageRequests = async () => {

            await api.post('/searchUser', {
                email: ""
            })
                .then((data) => {
                    setUsers(data.data);
                }).catch((error) => {
                    console.log(error)
                });
        }

        UsersPageRequests()

    }, []);

    const handleModal = () => setModal(!modal)

    const DeleteUser = async (id: any) => {

        Swal.fire({
            title: 'Deseja deletar esse usuário?',
            text: "Essa ação é inreversível!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar!'

        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire(
                    'Deletado!',
                    'O usuario foi deletado com sucesso.',
                    'success'
                )
                setTimeout(() => {
                    api.delete(`/users/${id}`)
                        .then(() => {
                            window.location.reload();
                        }).catch(() => {

                        });
                }, 1000);

            }
        })


    }

    const EditUser = (user: any) => {
        setEditdatauser(user)
        handleModal()

    }

    const AddUser = () => {
        setEditdatauser([])
        handleModal()
    }

    const searchUser = async () => {
        if (searchUserText) {
            setUsers([])

            await api.post('/searchUser', {
                email: searchUserText
            })
                .then((data) => {
                    setUsers(data.data);
                }).catch((error) => {
                    console.log(error)
                });
        } else {
            window.location.reload();
        }

    }

    const tableRef: any = useRef();

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "Web Users",
        sheet: "Web Users"
    })


    return (

        <div className="container-page-users">

            <DefaultHeader sessionTheme="Admin users" />

            <div className="container-input-search">

                <Input clickIcon={() => searchUser()} info="Pesquisar por email:" icon="search" onChange={(value: any) => setSearchUserText(value.target.value)} />

            </div>

            <div className="table-container">

                <div className="scroll-table">

                    <table >
                        <tr>
                            <td>Nome</td>
                            <td>Email</td>
                            <td>Senha</td>
                            <td>Adm</td>
                            <td>Deletar</td>
                            <td>Editar</td>

                        </tr>

                        {
                            users &&

                            users.map((user: any) =>
                                <tr>
                                    <td>{user.nome}</td>

                                    <td>{user.email}</td>

                                    <td>{user.senha}</td>

                                    <td>{user.admin == '0' ? 'NÃO' : 'SIM'}</td>

                                    <td><Icon name="delete" onClick={() => DeleteUser(user.id)} /></td>

                                    <td><Icon name="edit" onClick={() => EditUser(user)} /></td>

                                </tr>
                            )
                        }


                    </table>
                </div>

            </div>

            <DownloadFacilitators textButton="Criar usuario" onClickButton={() => AddUser()} />

            {
                modal &&
                <ModalUsers dataEdit={editDataUser ? editDataUser : ''} onClickClose={() => handleModal()} />
            }

        </div>

    )
}

export default PageUsers