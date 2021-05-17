import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
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
                    <td>{ cliente.status }</td>
                    <td></td>
                    <td></td>
                </tr>
            )
        });
    }

    return (
        <div className="container">
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                        <th>Data Nascimento</th>
                        <th>Data Cadastro</th>
                        <th>Status</th>
                        <th colSpan="2">Ações</th>
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