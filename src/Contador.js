import React, { useState } from 'react';
import './App.css'

export default function Contador(){
    const [contador, setContador] = useState(0);

    const clicar = (event) => {
        event.preventDefault();
        if (contador >= 0) {
            setContador(contador + 1); 
        }
    } 

    const clicar01 = (event) =>{
        event.preventDefault();
        if (contador >= 1) {
            setContador(contador - 1); 
        }
    }
    
 return(
    <div className='App'>
       <h1>
           Contador
       </h1>
       <h2>
           Você clicou {contador} vezes!
       </h2>
       <button onClick={clicar01} className='botao1'>Decremento</button>
       <button onClick={clicar} className='botao2'>Incremento</button>
    </div>
 )
}