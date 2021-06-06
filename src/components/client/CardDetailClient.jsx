import React from 'react';
import { format } from 'date-fns';
import { Card, Badge } from 'react-bootstrap';

const CardDetailsClient = props => {

    const { payload } = props;

    function formatDate(data) {
        if(data !== undefined)  {
            return format(new Date(data), "dd/MM/yyyy");
        }
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>{ payload.nome } <Badge variant={ payload.ativo ? "success" : "danger"}>{ payload.ativo ? "Ativo" : "Inativo"}</Badge> </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{ payload.email }</Card.Subtitle>
                <Card.Text>
                    <strong>Data de Nascimento: </strong>
                    { formatDate(payload.dataNascimento) }
                </Card.Text>
                <Card.Text>
                    <strong> Data de Cadastro: </strong>
                    { formatDate(payload.dataCadastro) }
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardDetailsClient