import React from 'react';
import { render } from '@testing-library/react';
import GerenciadorTarefas from '../gerenciador-tarefas';

test('Deve renderizar o projeto corretamente', () => {
  const { getByText } = render(<GerenciadorTarefas />);
  const linkElement = getByText(/Tarefas a fazer/i);
  expect(linkElement).toBeInTheDocument();
});
