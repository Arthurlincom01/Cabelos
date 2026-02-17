<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Studio Elegance</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #f4f4f4;
    color: #333;
}

header {
    background: linear-gradient(135deg, #1d1d1d, #444);
    color: white;
    padding: 50px 20px;
    text-align: center;
}

header h1 {
    font-size: 36px;
    font-weight: 600;
}

header p {
    margin-top: 10px;
    font-weight: 300;
    opacity: 0.8;
}

.container {
    max-width: 1100px;
    margin: auto;
    padding: 40px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}

.card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.card h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.price {
    font-size: 22px;
    font-weight: 600;
    color: #111;
    margin-bottom: 15px;
}

button {
    background: #111;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: 0.3s;
}

button:hover {
    background: #c59d5f;
}

footer {
    background: #111;
    color: white;
    text-align: center;
    padding: 25px;
    margin-top: 40px;
    font-size: 14px;
}
</style>
</head>

<body>

<header>
    <h1>Studio Elegance</h1>
    <p>Beleza, cuidado e transformação</p>
</header>

<section class="container">

<div class="card">
    <h3>Sobrancelha Simples</h3>
    <div class="price">R$ 15,00</div>
    <button onclick="comprar('Sobrancelha Simples - R$ 15,00')">Compre Agora</button>
</div>

<div class="card">
    <h3>Sobrancelha Simples com Henna</h3>
    <div class="price">R$ 30,00</div>
    <button onclick="comprar('Sobrancelha Simples com Henna - R$ 30,00')">Compre Agora</button>
</div>

<div class="card">
    <h3>Escova</h3>
    <div class="price">R$ 50,00</div>
    <button onclick="comprar('Escova - R$ 50,00')">Compre Agora</button>
</div>

<div class="card">
    <h3>Hidratação</h3>
    <div class="price">R$ 60,00</div>
    <button onclick="comprar('Hidratação - R$ 60,00')">Compre Agora</button>
</div>

<div class="card">
    <h3>Botox</h3>
    <div class="price">R$ 70,00</div>
    <button onclick="comprar('Botox - R$ 70,00')">Compre Agora</button>
</div>

<div class="card">
    <h3>Selagem</h3>
    <div class="price">R$ 80,00</div>
    <button onclick="comprar('Selagem - R$ 80,00')">Compre Agora</button>
</div>

<div class="card">
    <h3>Progressiva</h3>
    <div class="price">R$ 100,00</div>
    <button onclick="comprar('Progressiva - R$ 100,00')">Compre Agora</button>
</div>

<div class="card">
    <h3>Luzes na Touca</h3>
    <div class="price">R$ 200,00</div>
    <button onclick="comprar('Luzes na Touca - R$ 200,00')">Compre Agora</button>
</div>

</section>

<footer>
📍 Endereço: Rua Manoel das Costas Laranjeira, número 55 – Portão Marrom  
<br><br>
📞 Atendimento 