'use client';

import { useState } from "react";
// Importa os estilos (verifica se os caminhos estão corretos no teu projeto)
import "./page.module.css";
import './globals.css';

export default function Home() {
    // 1. Estado para controlar o que o utilizador escreve no input (tempo real)
    const [input, setInput] = useState("");

    // 2. Estado para guardar o nome que será exibido no título (apenas após o clique)
    const [nomeExibido, setNomeExibido] = useState("mundo!");

    return (
        <>
            <nav>
                <a href="/">Home</a>
                <a href="/lista">Lista</a>
            </nav>

            <main>
                {/* Aqui usamos a variável que só muda quando clicamos no botão */}
                <h1>Olá Afonso Trindade nº28292 aluno28292@ipt.pt</h1>

                <div className="action-container">
                    <button onClick={() => alert("Olá! " + input)}>
                        Clica em mim ;)
                    </button>

                    <button onClick={() => {
                        // Quando clica, o valor do input passa para o nomeExibido
                        setNomeExibido(input);
                    }}>
                        Atualiza mensagem Olá
                    </button>

                    <input
                        type="text"
                        value={input}
                        placeholder="Escreve um nome..."
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </main>
        </>
    );
}