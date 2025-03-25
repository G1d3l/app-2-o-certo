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

        <img src="/imagem.jpg" alt="Imagem de Exemplo" />

        <form>
          <label htmlFor="combustivel"> combustivel:</label>
          <input type="text" id="combustivel" name="combustivel" placeholder="combustivel" />

          <label htmlFor="combustivel">combustivel:</label>
          <input type="email" id="combustivel" name="combustivel" placeholder="combustivel" />

          <button type="submit">Enviar</button>
        </form>
      </main>
    </div>
  );
}

export default App;

