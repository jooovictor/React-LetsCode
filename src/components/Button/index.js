import { PropTypes } from "prop-types";

const Button = ({ children, onClick }) => (// Sempre ter um return, e chamar a fille de index
//props objeto que traz para a função os atributos do componente
//const {text} = props // pegando text de props, isso pode ser feito direto nos argumentos
    <>  {/*o Fragment pode ser omitido, e não tem representação no dom */ }
    <button onClick={onClick}> 
        {children}
    </button>
    </>
)

Button.propTypes = {
    onClick: PropTypes.func.isRequired 
}

export default Button