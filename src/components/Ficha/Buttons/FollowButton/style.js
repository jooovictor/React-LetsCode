import styled from 'styled-components'

export const StyledBtn = styled.button`
    background-color: rgb(0, 195, 194);
    border: transparent;
    color: rgb(35, 31, 58);
    padding: 5px 20px 5px 20px;
    border-radius: 10%;

    ${({ checked }) => checked && `
        padding: 3px 18px 3px 18px;
        border-radius: 10%;
        background-color: rgb(35,31,58);
        color: rgb(0,195,194);
        border: solid;
        border-color: rgb(0,195,194);
    `}

    &:hover {
        cursor: pointer;
        opacity: 90%;
    }


`