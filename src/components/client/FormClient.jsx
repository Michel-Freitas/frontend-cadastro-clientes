import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { format } from 'date-fns';

const FormClient = props => {

    const { validate, payload } = props;
    
    function formatDate(data) {
        if(data !== undefined) {
            if(data.indexOf("T") === -1){
                data += "T00:00:00";
                return format(new Date(data), "yyyy-MM-dd")
            }
            return format(new Date(data), "yyyy-MM-dd")
        }
    }

    return (
        <div>
            <Form onSubmit={e => props.submit(e)} noValidate validated={validate} >
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" name="nome" required value={payload.nome} onChange={e => props.setPayload(e)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" required value={payload.email}  onChange={e => props.setPayload(e)}/>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" name="cpf" required value={payload.cpf}  onChange={e => props.setPayload(e)}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Data Nascimento</Form.Label>
                            <Form.Control type="date" name="dataNascimento" required value={formatDate(payload.dataNascimento)} onChange={e => props.setPayload(e)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Check type="checkbox" label="Ativo" name="ativo" value={payload.ativo} checked={payload.ativo} onChange={e => props.setPayload(e)}/>
                </Form.Group>
                <Button type="submit">Salvar</Button>
            </Form>
        </div>
    )
}

export default FormClient