import { default as MyButton } from '../Button'
import { AiFillPlusCircle } from "react-icons/ai";
import If from '../If'
import { Button} from "antd";
import { Container } from "./styles";

const Main = () => {


    return (
        <Container bgColor='black' marginTop={20}>
            <h2>Listagem</h2>
            <Button icon={<AiFillPlusCircle />} onClick={() => {}}>
                Cadastrar item
            </Button>
            <MyButton onClick={() => {}}>
                do foda {/* Tudo criado entre a abertura e fechamento entra em Children */} 
            </MyButton>
            <div>
            <If condition={5 < 10}> 
                O numero é menor do que 10
            </If>
            </div>
        </Container>
)
    }

export default Main