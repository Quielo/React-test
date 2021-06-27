

const ArrowTest = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

ArrowTest.defaultProps = {
    title: 'Hola'
}

export default ArrowTest