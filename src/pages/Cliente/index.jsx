import './index.css';

import React, { useState, useEffect } from 'react';
import { Table, Badge, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from './../../services/api';
import { format } from 'date-fns';

const Cliente = props => {

    const [clientes, setClientes] = useState([]);
    const history = useHistory();

    useEffect(() => {
        listClientes();
    }, []);

    function formatDate(data) {
        return format(new Date(data), "dd/MM/yyyy");
    }

    async function listClientes() {
        await api.get('clientes').then(result => setClientes(result.data));
    }

    async function deleteCliente(id){
        await api.delete(`clientes/${id}`).then(result => {
            listClientes();
            result.status === 200 ? alert("Cliente excluído com sucesso!") : alert("Erro ao excluir cliente");
        });
    }

    function newClient() {
        history.push('clientes_cadastro');
    }

    function editClient(id) {
        history.push(`clientes_cadastro/${id}`);
    }

    function viewClient(id){
        history.push(`cliente/${id}`);
    }

    function itensTableClientes() {
        return clientes.map(cliente => {
            return (
                <tr key={ cliente.id }>
                    <td>{ cliente.nome }</td>
                    <td>{ cliente.email }</td>
                    <td>{ cliente.cpf }</td>
                    <td>{ formatDate(cliente.dataNascimento) }</td>
                    <td>{ formatDate(cliente.dataCadastro) }</td>
                    <td>
                        <Badge variant={ cliente.ativo ? "success" : "danger" }>
                            { cliente.ativo ? "Ativo" : "Inativo" }
                        </Badge>
                    </td>
                    <td>
                        <Button size="sm" onClick={() => editClient(cliente.id)} >Editar</Button> {' '}
                        <Button size="sm" variant="warning" onClick={() => viewClient(cliente.id)} >Visualizar</Button> {' '}
                        <Button size="sm" variant="danger" onClick={() => deleteCliente(cliente.id)}>Excluir</Button>
                    </td>
                </tr>
            )
        });
    }

    return (
        <div className="container">
            <br />
            <div className="cliente-header">
                <h2> Clientes </h2>
                <Button variant="success" size="sm" onClick={newClient} >Novo Cliente</Button>
            </div>
            <br />
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Data Nascimento</th>
                        <th>Data Cadastro</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { itensTableClientes() }
                </tbody>
            </Table>
        </div>
    )
}

export default Cliente