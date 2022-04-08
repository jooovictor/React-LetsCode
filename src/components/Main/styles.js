import styled from 'styled-components'

export const Container = styled.main`
    

    ${({bgColor, marginTop}) => `
        background: ${bgColor};
        margin-top: ${marginTop}px;
    `}

    & Button {
        background: red;
    }

    
`