import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CadastrarTarefa from '../cadastrar/cadastrar-tarefa';
import '@testing-library/jest-dom/extend-expect';

describe('Teste do componente de cadastro de tarefa', () => {
    test('Deve renderizar o componente corretamente', () => {
        const { getByText } = render(<CadastrarTarefa />);
        const linkElement = getByText(/Cadastrar tarefa/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Deve cadastrar uma nova tarefa', () => {
        const { getByTestId } = render(<CadastrarTarefa />);
        fireEvent.change(getByTestId('txt-tarefa'), { target: { value: 'Testar componente' }});
        fireEvent.click(getByTestId('btn-cadastrar'));
        expect(getByTestId('modal')).toHaveTextContent('Sucesso');
        expect(getByTestId('modal')).toHaveTextContent('Tarefa adicionada com sucesso!')
    });
});
