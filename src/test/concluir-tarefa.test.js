import React from 'react';
import ReactDOM from 'react-dom';
import ConcluirTarefa from '../listar/concluir-tarefa';
import Tarefa from '../models/tarefa-model';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Teste do componente de conclusão de tarefas', () => {
    
    const nomeTarefa = 'Tarefa de teste';
    const tarefa = new Tarefa(1, nomeTarefa, false);

    test('Deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ConcluirTarefa tarefa={tarefa} recarregarTarefas={() => false} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('Deve exibir a modal', () => {
        const { getByTestId } = render(<ConcluirTarefa tarefa={tarefa} recarregarTarefas={() => false} />);
        fireEvent.click(getByTestId('btn-abrir-modal'));
        expect(getByTestId('modal')).toHaveTextContent(nomeTarefa);
    });

    test('Deve concluir uma tarefa', () => {

        localStorage['tarefas'] = JSON.stringify([tarefa]);
        const { getByTestId } = render(<ConcluirTarefa tarefa={tarefa} recarregarTarefas={() => false} />);
        fireEvent.click(getByTestId('btn-abrir-modal')); 
        fireEvent.click(getByTestId('btn-concluir')); 
        const tarefasDb = JSON.parse(localStorage['tarefas']);
        expect(tarefasDb[0].concluida).toBeTruthy();
    });
});