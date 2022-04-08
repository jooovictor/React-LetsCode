import profile from './profile.json'
import { BioArea, Container, Experience, Img, SkillArea, Name, City, Bio, StyleButton, SkillsContent, SkillTitle, MessageButton } from './Conteiner/styles'
import CheckableButton from '../CheckableButton'
import { StyledBtn } from './Buttons/FollowButton/style'
import FollowButton from './Buttons/FollowButton'


const Product = () => (
    <Container>
        <BioArea>
        <Experience> 
            {profile.experience.toUpperCase()} 
        </Experience>
        <img src={profile.img}/>
        <Name>
            {profile.name}
        </Name>

        <City>
            {profile.city.toUpperCase()}
        </City>

        <Bio>
            {profile.bio}
        </Bio>
        
        <MessageButton>Message</MessageButton>
        <FollowButton></FollowButton>
        

        </BioArea>
        
        <SkillArea>

            <SkillTitle>SKILLS</SkillTitle>
            <SkillsContent>
                {profile.skills.map(skills => <span>{skills}</span>)}
            </SkillsContent>

        </SkillArea>
    </Container>
)

export default Product


