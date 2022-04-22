import "./button.scss";

const Button = (props) => (
    <button
        className={`btn ${props.className}`}
        onClick={props.onClick ? () => props.onClick() : null}
    >
        {props.children}
    </button>
);

export const OutlineButton = (props) => (
    <Button
        className={`btn-outline ${props.className}`}
        onClick={props.onClick ? () => props.onClick() : null}
    >
        {props.children}
    </Button>
);

export const UnderlineButton = (props) => (
    <OutlineButton
        className={`btn-underline ${props.className}`}
        onClick={props.onClick ? () => props.onClick() : null}
    >
        {props.children}
    </OutlineButton>
);

export default Button;
