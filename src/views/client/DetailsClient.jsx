import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../config/api';
import Header from '../../components/header/Header';
import CardDetailsClient from '../../components/client/CardDetailClient';
import TableAddress from '../../components/address/TableAddress';

const DetailsClient = props => {

    const history = useHistory();
    const { idClient } = useParams();
    const [client, setClient] = useState([]);

    useEffect(() => {
        if(idClient !== undefined){
            findClientId(idClient);
        }
    }, [idClient]);

    async function findClientId(idClient) {
        await api.get(`clientes/${idClient}`).then(result => {
            setClient(result.data);
        });
    }

    function backToClientList() {
        history.goBack();
    }

    return (
        <div className="container">
            <Header title="Detalhes do Cliente" labelButton="Voltar" actionButton={backToClientList}/>
            <CardDetailsClient payload={client} />
            <Header title="Endereços" labelButton="Novo" actionButton={backToClientList}/>
            <TableAddress payload={client.enderecos} />
        </div>
    )
}

export default DetailsClient