import styled from 'styled-components'

export const Container = styled.article`
    
    color: rgb(136, 131, 161);
    width: 280px;
    height: 400px;
    display: flex;
    flex-direction: column;
    
    & img {
        border-radius: 50%;
        position: relative;
        display: block;
        margin: auto;
        width: 40%;
        border-style: groove;
        padding: 5px;
        border: 2px solid transparent;
        border-color: rgb(51,93,118);
    
    }

    & span {
        font-size: 11px;
        margin: 0 5px;
        border: solid;
        border-style: solid;
        border-width: 3px;
        border-color: rgb(35, 31, 58);
        margin-bottom: 3px;
        border-radius: 5%;
        padding-left: 6px;
        padding-right: 6px;
    }

`

export const BioArea = styled.div`
    background-color: rgb(35, 31, 58);
    border-radius: 5px 5px 0px 0px;
    flex: 2;
    
    
`

export const MessageButton = styled.button`
    background-color: rgb(0, 195, 194);
    border: none;
    color: rgb(35, 31, 58);
    padding: 5px 20px 5px 20px;
    border-radius: 10%;
    margin-left: 40px;
    margin-right: 5px;
    
    &:hover {
        cursor: pointer;
        opacity: 90%;
    }
`

export const SkillArea = styled.p`
    flex: 1;
    border-radius: 0px 0px 5px 5px;
    background-color: rgb(31, 27, 54);
`
export const SkillTitle = styled.p`
    font-weight: bold;
    font-size: 9px;
    margin-bottom: 0;
    padding-left: 10px;
    padding-top: 15px;

`

export const SkillsContent = styled.div`
    display: flex;
    flex-flow: wrap;    
    padding-left: 5px;
`

export const Experience = styled.p`
    color: black;
    background-color: orange;
    display: block;
    margin: 10px 10px 0px 20px;
    width: 40px;
    height: 20px;
    border-radius: 10%;
    padding-left: 7px;
`

export const Img = styled.img`
    border-radius: 50%;
`

export const Name = styled.h1`
    text-align: center;
`

export const City = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    margin-top: -10px;
`
export const Bio = styled.p`
    text-align: center;
    padding-left: 40px;
    padding-right: 40px; 
`

export const StyleButton = styled.button`
    background-color: rgb(0, 187, 211);
    border: solid;
    border-color: rgb(0, 187, 211);
    color: black;
    
`

