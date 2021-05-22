import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Card, Badge  } from 'react-bootstrap';
import api from '../../../services/api';
import { format } from 'date-fns';

const ClientView = props => {

    const history = useHistory();
    const { id } = useParams();
    const [client, setClient] = useState([]);

    useEffect(() => {
        if (id != undefined) {
            findClientId(id);
        }
    }, [id]);

    async function findClientId(idClient) {
        await api.get(`clientes/${idClient}`).then(result => setClient(result.data));
    }

    function formatDate(data) {
        if(data != undefined)  {
            return format(new Date(data), "dd/MM/yyyy");
        }
    }

    function backToClientList() {
        history.goBack();
    }

    console.log(client);

    return (
        <div className="container">
            <br />
            <div className="cliente-header">
                <h2>Visualizar Cliente</h2>
                <Button size="sm" onClick={backToClientList} >Voltar</Button>
            </div>
            <br />
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{client.nome} <Badge variant={ client.ativo ? "success" : "danger"}>{ client.ativo ? "Ativo" : "Inativo"}</Badge> </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{client.email}</Card.Subtitle>
                        <Card.Text>
                            <strong>Data de Nascimento: </strong>
                            {formatDate(client.dataNascimento)}
                        </Card.Text>
                        <Card.Text>
                            <strong> Data de Cadastro: </strong>
                            {formatDate(client.dataCadastro)}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default ClientView