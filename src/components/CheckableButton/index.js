import { message } from 'antd'
import { useState } from 'react'
import { StyledBtn } from './styles'
import { PropTypes } from "prop-types";


const CheckableButton = ({children}) => {
    //const [Nome da constante listada no estado, Função que manipula a constante no estado] = useState(false)
    const [checked, setChecked] = useState(false)

    // checked = true // Errado
    // setChecked(true)  // Usa a função de manipulação para manipular o estado.

    const toggleCheck = () => {
        setChecked(!checked) // Toggle check
        console.log(checked)
    }
    return(
        <StyledBtn checked={checked} onClick={toggleCheck} >{
            checked
            ? 'checked'
            : 'not checked'
        }</StyledBtn>
)}





export default CheckableButton





/*

 Carro

 props
    - cor
    - marca
    - modelo
    - ano

 state - tudo oque pode variar   
    - ligado
    - vidrosAbertos
    - portaFechada
    - velocidade
    - farolLigado
    



*/