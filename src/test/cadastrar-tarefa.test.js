import React from 'react';
import { render } from '@testing-library/react';
import CadastrarTarefa from '../cadastrar/cadastrar-tarefa';

describe('Teste do componente de cadastro de tarefa', () => {
    test('Deve renderizar o componente corretamente', () => {
        const { getByText } = render(<CadastrarTarefa />);
        const linkElement = getByText(/Cadastrar Tarefa/i);
        expect(linkElement).toBeInTheDocument();
    });
});