import React from 'react';
import {Button, Table  } from 'react-bootstrap';

const TableAddress = props => {

    const { payload } = props;

    function itensTableAddress() {
        if( payload !== undefined && payload.length >= 1) {
            return payload.map(model => {
                return (
                    <tr key={ model.id }>
                        <td>{ model.estado }</td>
                        <td>{ model.cidade }</td>
                        <td>{ model.bairro }</td>
                        <td>{ model.logradouro }</td>
                        <td>{ model.numero }</td>
                        <td>{ model.cep }</td>
                        <td>{ model.complemento }</td>
                        <td>
                            <Button size="sm">Editar</Button> {' '}
                            <Button size="sm" variant="warning">Visualizar</Button> {' '}
                        </td>
                    </tr>
                )
            });
        }
    }

    return (
        <Table striped bordered hover className="text-center">
            <thead>
                <tr>
                    <th>Estado</th>
                    <th>Cidade</th>
                    <th>Bairro</th>
                    <th>Logradouro</th>
                    <th>Número</th>
                    <th>CEP</th>
                    <th>Complemento</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                { itensTableAddress() }
            </tbody>
        </Table>
    )
}

export default TableAddress