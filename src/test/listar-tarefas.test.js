import React from 'react';
import { render } from '@testing-library/react';
import ListarTarefas from '../listar/listar-tarefas';

describe('Teste do componente de listagem de tarefas', () => {
    test('Deve renderizar o componente corretamente', () => {
        const { getByText } = render(<ListarTarefas />);
        const linkElement = getByText(/Listagem de Tarefas/i);
        expect(linkElement).toBeInTheDocument();
    });
});