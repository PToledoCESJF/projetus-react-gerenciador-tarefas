import React from 'react';
import { render } from '@testing-library/react';
import AtualizarTarefa from '../atualizar/atualizar-tarefa';

describe('Teste do componente de atualização de tarefa', () => {
    test('Deve renderizar o componente corretamente', () => {
        const { getByText } = render(<AtualizarTarefa />);
        const linkElement = getByText(/Atualizar Tarefa/i);
        expect(linkElement).toBeInTheDocument();
    });
});