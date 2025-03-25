import React from "react";

function App() {
  return (
    <div>
      <header>
        <h1>Meu Site</h1>
      </header>

      <main>
        <h2>Seja bem-vindo!</h2>
        <p>Este é um site de exemplo.</p>

        {/* Certifique-se de que a imagem esteja na pasta "public" ou importe corretamente */}
        <img src="/imagem.jpg" alt="Imagem de Exemplo" />

        <form>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome" />

          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" placeholder="Digite seu e-mail" />

          <button type="submit">Enviar</button>
        </form>
      </main>
    </div>
  );
}

export default App;

