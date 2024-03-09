import styled from "styled-components";

export type ButtonCor = 'primaria' | 'secundaria' | 'perigo' | 'sucesso';

interface ButtonContainerProps{
    cor: ButtonCor;
}

const buttonCor = {
    primaria: 'purple',
    secundaria: 'orange',
    perigo: 'red',
    sucesso: 'green' 
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 100px;
height: 40px;
${props => {
    return `background-color: ${buttonCor[props.cor]}`
}}
` 