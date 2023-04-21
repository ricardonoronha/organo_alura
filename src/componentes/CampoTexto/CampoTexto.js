import "./CampoTexto.css";

export const CampoTexto = ({ label, placeholder, valor, setValor }) => {
    return (
        <div className="campo-texto">
            <label label>{label ?? "label"}</label>
            <input placeholder={placeholder ?? "placeholder"} value={valor} onChange={e => setValor(e.target.value)} />
        </div>
    );
}