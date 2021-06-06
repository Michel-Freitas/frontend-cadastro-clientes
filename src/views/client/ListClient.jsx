import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header/Header';
import TableClient from '../../components/client/TableClient';
import api from '../../config/api';
import ModalComponent from '../../components/ModalComponent';

const ListClient = props => {

    const [clientes, setClientes] = useState([]);
    const [client, setClient] = useState({});
    
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = (idClient) => {
        findClientId(idClient);
        setShowModal(true);
    };

    const history = useHistory();

    useEffect(() => {
        listClientes();
    }, []);

    async function listClientes() {
        await api.get('clientes').then(result => setClientes(result.data));
    }

    function findClientId(idClient) {
        api.get(`clientes/${idClient}`).then(result => {
            setClient(result.data);
        });
    }

    function confirmationDelete(IsValid){
        if(IsValid) {
            deleteCliente(client.id);
            handleClose();
            setClient({});
        } else {
            handleClose();
        }
    }

    function newClient() {
        history.push('registerclient');
    }

    function editClient(idClient) {
        history.push(`editclient/${idClient}`);
    }

    function detailClient(idClient){
        history.push(`detailcliente/${idClient}`);
    }

    async function deleteCliente(id){
        await api.delete(`clientes/${id}`).then(result => {
            listClientes();
            // result.status === 200 ? alert("Cliente excluído com sucesso!") : alert("Erro ao excluir cliente");
        });
    }

    function messageDeleteClient(nomeClient) {
        return (
            <span>Deseja Excluir o cliente <b>{nomeClient}</b></span>
        )
    }

    console.log(client);

    return (
        <div className="container">
            <Header title="Clientes" labelButton="Novo" actionButton={newClient} />
            <TableClient data={clientes} actions={ {detailClient, editClient} } modal={handleShow} />
            <ModalComponent title="Deletar Cliente" show={showModal} actions={ {confirmationDelete} } boby={messageDeleteClient(client.nome)}></ModalComponent>
        </div>
    )
}

export default ListClient