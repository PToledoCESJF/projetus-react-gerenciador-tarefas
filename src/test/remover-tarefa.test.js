import React from 'react';
import ReactDOM from 'react-dom';
import RemoverTarefa from '../listar/remover-tarefa';
import Tarefa from '../models/tarefa-model';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Teste do componente de remoção de tarefas', () => {

  const nomeTarefa = 'Tarefa de teste';
  const tarefa = new Tarefa(1, nomeTarefa, false);

  test('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <RemoverTarefa
        tarefa={tarefa}
        recarregarTarefas={() => false} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('deve exibir a modal', () => {
    const { getByTestId } = render(
      <RemoverTarefa
        tarefa={tarefa}
        recarregarTarefas={() => false} />
    );
    fireEvent.click(getByTestId('btn-abrir-modal'));
    expect(getByTestId('modal')).toHaveTextContent(nomeTarefa);
  });

  test('deve remover uma tarefa', () => {
    localStorage['tarefas'] = JSON.stringify([tarefa]);
    const { getByTestId } = render(
      <RemoverTarefa
        tarefa={tarefa}
        recarregarTarefas={() => false} />
    );
    fireEvent.click(getByTestId('btn-abrir-modal'));
    fireEvent.click(getByTestId('btn-remover'));
    const tarefasDb = JSON.parse(localStorage['tarefas']);
    expect(tarefasDb.length).toBe(0);
  });

});
