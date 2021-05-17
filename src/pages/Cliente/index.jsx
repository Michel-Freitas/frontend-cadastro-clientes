import React, { useState, useEffect } from 'react';
import { Table, Badge, Button } from 'react-bootstrap';
import api from './../../services/api';
import { format } from 'date-fns';

const Cliente = props => {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        listClientes();
    }, []);

    async function listClientes() {
        await api.get('clientes').then(result => setClientes(result.data));
    }

    function formatDate(data) {
        return format(new Date(data), "dd/MM/yyyy");
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
                        <Button size="sm">Editar</Button> {' '}
                        <Button size="sm" variant="danger">Desativar</Button>
                    </td>
                </tr>
            )
        });
    }

    return (
        <div className="container">
            <br />
            <h2> Clientes </h2>
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