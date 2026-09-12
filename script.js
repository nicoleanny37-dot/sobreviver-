
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background: #000;
    color: #fff;
    font-family: Arial, sans-serif;
    min-height: 100vh;
}

#jogo {
    width: 100%;
    min-height: 100vh;
}

#tela-inicial {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
}

#tela-inicial h1 {
    font-size: 60px;
    letter-spacing: 8px;
    margin-bottom: 20px;
}

#tela-inicial p {
    color: #ccc;
    margin-bottom: 35px;
}

button {
    background: #222;
    color: white;
    border: 1px solid #777;
    padding: 14px 30px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.2s;
}

button:hover {
    background: #444;
}

#cena {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

#imagem-cena {
    width: 100%;
    height: 65vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #111;
}

#interface {
    padding: 25px;
    background: #0b0b0b;
}

#titulo-cena {
    margin-bottom: 12px;
}

#texto-cena {
    color: #ccc;
    line-height: 1.6;
    margin-bottom: 20px;
}

#botoes {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.oculto {
    display: none !important;
}

@media (max-width: 600px) {

    #tela-inicial h1 {
        font-size: 40px;
    }

    #imagem-cena {
        height: 55vh;
    }

    #interface {
        padding: 18px;
    }
}
