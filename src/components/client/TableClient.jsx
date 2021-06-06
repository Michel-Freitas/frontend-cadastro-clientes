import React from 'react';
import { Table, Badge, Button } from 'react-bootstrap';
import { format } from 'date-fns';

const TableClient = (props) => {

    const { data, actions, modal } = props;
    const { detailClient, editClient } = actions;

    function formatDate(data) {
        return format(new Date(data), "dd/MM/yyyy");
    }

    function itensTableClientes() {
        return data.map(cliente => {
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
                        <Button size="sm" onClick={ () => editClient(cliente.id) } >Editar</Button> {' '}
                        <Button size="sm" variant="warning" onClick={ () => detailClient(cliente.id) }>Visualizar</Button> {' '}
                        <Button size="sm" variant="danger" onClick={ () => modal(cliente.id) }>Excluir</Button>
                    </td>
                </tr>
            )
        });
    }

    return (
        <div>
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

export default TableClient