import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Row, Col } from 'react-bootstrap';
import api from '../../../services/api';

const FormCliente = props => {

    const history = useHistory();

    const [model, setModel] = useState({
        ativo: true
    });
    const [checkAtivo, setCheckAtivo]  = useState(true);

    function updateModel(event) {
        setModel({
            ...model,
            [event.target.name]: event.target.value
        });
    }

    async function onSubmit(event) {
        event.preventDefault();
        await api.post('clientes', model);
    }

    function backToClientList(){
        history.goBack();
    }

    return (
        <div className="container">
            <br />
            <div className="cliente-header">
                <h2> Cadastrar Clientes </h2>
                <Button size="sm" onClick={backToClientList}>Volta</Button>
            </div>
            <br />
            <div className="container">
                <Form onSubmit={e => onSubmit(e)} >
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" name="nome" onChange={e => updateModel(e)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email" onChange={e => updateModel(e)}/>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>CPF</Form.Label>
                                <Form.Control type="text" name="cpf" onChange={e => updateModel(e)}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Data Nascimento</Form.Label>
                                <Form.Control type="date" name="dataNascimento" onChange={e => updateModel(e)}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group>
                        <Form.Check type="checkbox" name="ativo" value={checkAtivo} checked={checkAtivo} label="Ativo" onChange={() => {
                            setCheckAtivo(!checkAtivo);
                            setModel({
                                ...model,
                                ativo: !checkAtivo
                            });
                        }}/>
                    </Form.Group>
                    <Button type="submit">Salvar</Button>
                </Form>
            </div>
        </div>
    )
}

export default FormCliente