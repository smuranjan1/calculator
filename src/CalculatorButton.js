const CalculatorButton = (props) => {
    return (
        <button id={props.buttonId} 
        onClick={props.handleClick(props.buttonText)}>
            {props.buttonText}
        </button>
    );
};

export default CalculatorButton;