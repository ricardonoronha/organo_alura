import React from "react";
import "./ListaSuspensa.css"

export const ListaSuspensa = ({ label, times, valor, setValor }) => {

    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select value={valor} onChange={e => setValor(e.target.value)}>
                <option value={""}></option>
                {times.map(time => <option key={time} value={time}>{time}</option>)}
            </select>
        </div >
    );

}
