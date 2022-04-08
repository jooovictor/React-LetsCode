const If = ({children, condition}) => {

    if (condition) return children

    return null
}

export default If