import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { format } from 'date-fns';
import api from '../../../services/api';

const FormCliente = props => {

    const history = useHistory();
    const { id } = useParams();
    const [validateForm, setValidateForm] = useState(false);
    const [model, setModel] = useState({
        ativo: true
    });

    useEffect(() => {
        if(id !== undefined) {
            findClientId(id);
        }
    }, [id]);

    function updateModel(event) {
        setModel({
            ...model,
            [event.target.name]: event.target.value
        });
    }

    async function onSubmit(event) {
        if(event.currentTarget.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidateForm(true);

        if(event.currentTarget.checkValidity() === true) {
            event.preventDefault();
            if(id !== undefined) {
                await api.put(`clientes/${id}`, model).then(result => {
                    result.status === 200 ? alert("Edição finalizada com Sucesso!") : alert("Erro ao editar cliente")
                });
            } else {
                await api.post('clientes', model).then(result => {
                    result.status === 200 ? alert("Cadastro finalizado com Sucesso!") : alert("Erro ao cadastrar cliente")
                });
            }
            backToClientList();
        }
    }

    async function findClientId(idClient) {
        await api.get(`clientes/${idClient}`).then(result => setModel({
            id: result.data.id,
            nome: result.data.nome,
            email: result.data.email,
            cpf: result.data.cpf,
            dataNascimento: result.data.dataNascimento,
            dataCadastro: result.data.dataCadastro,
            ativo: result.data.ativo
        }));
    }

    function backToClientList(){
        history.goBack();
    }

    function formatDate(data) {
        if(data !== undefined) {
            return format(new Date(data), "yyyy-MM-dd")
        }
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
                <Form onSubmit={e => onSubmit(e)} noValidate validated={validateForm} >
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" name="nome" required value={model.nome} onChange={e => updateModel(e)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" required value={model.email} onChange={e => updateModel(e)}/>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>CPF</Form.Label>
                                <Form.Control type="text" name="cpf" required value={model.cpf} onChange={e => updateModel(e)}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Data Nascimento</Form.Label>
                                <Form.Control type="date" name="dataNascimento" required value={formatDate(model.dataNascimento)} onChange={e => updateModel(e)}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group>
                        <Form.Check type="checkbox" name="ativo" value={model.ativo} checked={model.ativo} label="Ativo" onChange={() => {
                            setModel({
                                ...model,
                                ativo: !model.ativo
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