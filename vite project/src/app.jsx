import React from 'react';

function App() {
  return (
   <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de HTML</title>
</head>
<body>

<header>
    <h1>Meu Site</h1>
</header>

<main>
    <h2>Seja bem-vindo!</h2>
    <p>Este é um site de exemplo.</p>

    <img src="imagem.jpg" alt="Imagem de Exemplo">

    <form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome">
        
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" placeholder="Digite seu e-mail">
        
        <button type="submit">Enviar</button>
    </form>
</main>

</body>
</html>


export default App;
