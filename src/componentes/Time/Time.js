import "./Time.css";
import { ColaboradorCard } from "../ColaboradorCard/ColaboradorCard";

export const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
    const css = { backgroundColor: corSecundaria };

    return (
        colaboradores.length > 0 && <section className="time" style={css}>
            <h3 style={{ borderBottomColor: corPrimaria }}>{nome}</h3>
            <div className="divisor" style={{ backgroundColor: corPrimaria }} />
            <div className='colaboradores'>
                {colaboradores.map(colaborador => <ColaboradorCard nome={colaborador.nome} time={colaborador.time} cargo={colaborador.cargo} imagem={colaborador.imagem} corPrimaria={corPrimaria} />)}
            </div>
        </section>
    );
}