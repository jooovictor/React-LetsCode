import { useState } from "react"
import { StyledBtn } from "./style"


const FollowButton = ({children}) => {
  
    const [checked, setChecked] = useState(false)

    const toggleCheck = () => {
        setChecked(!checked)
    }
    return(
        <StyledBtn checked={checked} onClick={toggleCheck} >{
            checked
            ? 'Following'
            : 'Follow'
        }</StyledBtn>
)}

export default FollowButton;
