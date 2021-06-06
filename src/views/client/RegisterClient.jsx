import React, { useState, useEffect }  from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../config/api';
import Header from '../../components/header/Header';
import FormClient from '../../components/client/FormClient';

const RegisterClient = props => {

    const history = useHistory();
    const { idClient } = useParams();
    const [validateForm, setValidateForm] = useState(false);
    const [model, setModel] = useState({
        ativo: true
    });

    useEffect(() => {
        if(idClient !== undefined) {
            findClientId(idClient);
        }
    }, [idClient]);

    function updateModel(event) {
        if(event.target.type !== "checkbox") {
            setModel({
                ...model,
                [event.target.name]: event.target.value
            });
        } else {
            setModel({
                ...model,
                ativo: !model.ativo
            });
        }
    }

    async function onSubmit(event) {
        if(event.currentTarget.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidateForm(true);

        if(event.currentTarget.checkValidity() === true) {
            event.preventDefault();
            if(idClient !== undefined) {
                await api.put(`clientes/${idClient}`, model).then(result => {
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

    return (
        <div className="container">
            <Header title="Cadastro de Cliente" labelButton="Voltar" actionButton={backToClientList}/>
            <FormClient submit={onSubmit} validate={validateForm} payload={model} setPayload={updateModel} />
        </div>
    )
}

export default RegisterClient