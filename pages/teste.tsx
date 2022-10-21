import { useState } from "react"

export default function Teste(){
    let [numero, queroNumero] = useState(0)

    function AumentaNumero(){
        queroNumero(numero + 1)
    }
    
    return (
        <div>
             <button onClick={AumentaNumero}>Aumenta {numero}</button>   
        </div>
    )
}