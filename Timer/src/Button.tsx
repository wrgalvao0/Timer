import { ButtonContainer, ButtonCor } from './Button.styles'
interface ButtonProps{
    cor?: ButtonCor; 
}
export function Button({cor = 'primaria'}: ButtonProps) {
    return(
        <ButtonContainer cor={cor}>Enviar</ButtonContainer>
    )
}