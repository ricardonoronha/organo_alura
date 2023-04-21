import "./Button.css";

export const Button = ({ onCLick, children }) => {

    return (
        <div className="botao">
            <button onSubmit={onCLick} >
                {children}
            </button>
        </div>

    )
}