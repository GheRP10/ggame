window.addEventListener('load', function() {
    // Adiciona um evento de mudança ao rbl
    document.querySelectorAll('input[type="radio"]').forEach(function(elem) {
        elem.addEventListener("change", function() {
            var selectedValue = document.querySelector('input[name="numJogadores"]:checked').value;
            console.log(selectedValue);
            if (selectedValue != 2) {
                document.querySelector('#divjogador2').style.display = 'none';
                jogador2Nome = "";
            } else {
                document.querySelector('#divjogador2').style.display = 'block';
            }
        });
    });

    // Adiciona um evento de clique ao botão "Começar Jogo"
    document.getElementById('jogador1Nome').addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && this.value.trim().length > 0) {
            event.preventDefault();
            document.getElementById('startButton').click();
        }
    });

    document.getElementById('jogador2Nome').addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && this.value.trim().length > 0) {
            event.preventDefault();
            document.getElementById('startButton').click();
        }
    });

    document.getElementById('startButton').addEventListener('click', function(event) {
        event.preventDefault();

        // Recupera o número de jogadores e o nome do primeiro jogador
        var numJogadores = document.querySelector('input[name="numJogadores"]:checked').value;
        var jogador1Nome = document.getElementById('jogador1Nome').value.trim();

        // Verifica se o nome do primeiro jogador é válido
        if (!jogador1Nome) {
            alert("Por favor, insira um nome para o jogador 1.");
            return;
        }

        // Redireciona para a próxima página passando os valores dos nomes dos jogadores como parâmetros de consulta
        if (numJogadores == "1") {
            var url = 'guessing_game.html?jogador1=' + encodeURIComponent(jogador1Nome) + '&numJogadores=' + encodeURIComponent(numJogadores);
            window.location.href = url;
        } else if (numJogadores == "2") {
            var jogador2Nome = document.getElementById('jogador2Nome').value.trim();
            if (!jogador2Nome) {
                alert("Por favor, insira um nome para o jogador 2.");
                return;
            }
            var url = 'guessing_game.html?jogador1=' + encodeURIComponent(jogador1Nome) + '&jogador2=' + encodeURIComponent(jogador2Nome) + '&numJogadores=' + encodeURIComponent(numJogadores);
            window.location.href = url;
        }
        console.log(jogador1Nome, jogador2Nome, numJogadores);
    });

});