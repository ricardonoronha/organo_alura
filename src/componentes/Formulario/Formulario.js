import { useState } from "react";
import Button from "../Button";
import CampoTexto from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";

export const Formulario = ({ times, salvarColaborador }) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const handleSalvarColaboradorClick = (e) => {
        e.preventDefault();
        salvarColaborador(nome, cargo, imagem, time);
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }


    return (
        <section className="formulario">
            <form onSubmit={handleSalvarColaboradorClick}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do seu colaborador" valor={nome} setValor={setNome} />
                <CampoTexto label="Cargo" placeholder="Digite o cargo do seu colaborador" valor={cargo} setValor={setCargo} />
                <CampoTexto label="Imagem" placeholder="Digite a url da imagem do seu colaborador" valor={imagem} setValor={setImagem} />
                <ListaSuspensa
                    label="Time"
                    times={times.map(time => time.nome)}
                    valor={time}
                    setValor={setTime}
                />
                <Button>Salvar</Button>
            </form>
        </section>

    )
}
