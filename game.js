    // Recupera o nome dos jogadores a partir da URL
    const params = new URLSearchParams(window.location.search);
    const jogador1Nome = params.get('jogador1');
    const jogador2Nome = params.get('jogador2');
    const JogadoresNum = params.get('numJogadores');

    // Verifica a quantidade de jogadores e exibe o nome correspondente no display
    if (jogador2Nome && jogador2Nome.trim().length > 0) {
        document.getElementById('jogador1NomeDisplay').textContent = jogador1Nome;
        document.getElementById('jogador2NomeDisplay').textContent = jogador2Nome;
        document.getElementById('divinforTentativa').textContent = 'Cada jogador tem 5 tentativas';

    } else {
        document.getElementById('jogador1NomeDisplay').textContent = 'Jogador';
        document.getElementById('divjogador2Display').style.display = 'none';
    }

    // Configura o nome dos jogadores na página
    document.getElementById('jogador1NomeDisplay').innerText = jogador1Nome;
    if (jogador2Nome && jogador2Nome.trim().length > 0) {
        document.getElementById('jogador2NomeDisplay').innerText = jogador2Nome;
    } else {
        document.getElementById('jogador2NomeDisplay').style.display = 'none';
    }

    if (JogadoresNum == 1) {
        // Configura as variáveis do jogo
        var resposta = Math.floor(Math.random() * 100) + 1; // Número aleatório entre 1 e 100
        var turno = 1;
        var jogador1Score = 0;

        // Configura o indicador de turno na página
        document.getElementById('turnoIndicador').innerText = 'Comece o jogo';

        // Adiciona um evento de clique ao botão "Palpite"
        document.getElementById('palpiteInput').addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && this.value.trim().length > 0) {
                event.preventDefault();
                document.getElementById('palpiteButton').click();
            }
        });

        document.getElementById('palpiteButton').addEventListener('click', function(event) {
            event.preventDefault();

            // Recupera o palpite do jogador atual
            var palpite = parseInt(document.getElementById('palpiteInput').value);

            // Verifica se o palpite é válido
            if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
                alert('Por favor, digite um número entre 1 e 100');
                return;
            }

            // Verifica se o palpite está certo
            if (palpite === resposta) {
                // Atualiza a pontuação do jogador atual
                jogador1Score++;
                document.getElementById('jogador1Score').innerText = jogador1Score;

                // Exibe a mensagem de acerto e prepara o jogo para uma nova rodada
                alert('Parabéns, ' + jogador1Nome + '! Você acertou o número em ' + turno + ' tentativas.');
                resposta = Math.floor(Math.random() * 100) + 1;
                turno = 1;
                document.getElementById('turnoIndicador').innerText = 'Comece o jogo';
                document.getElementById('resultText').innerText = '';
                document.getElementById('palpiteInput').value = '';
                document.getElementById('divbordaPiscante').style.display = 'none';
            } else {
                // Exibe a mensagem de erro e prepara o jogo para o próximo palpite
                document.getElementById('divbordaPiscante').style.display = 'block';
                var resultText = 'Errou! ' + (palpite < resposta ? 'Tente um número maior que ' + palpite : ' Tente um número menor que ' + palpite);
                document.getElementById('resultText').innerText = resultText;
                turno++;
                document.getElementById('turnoIndicador').innerText = 'Tentativa ' + turno;
                document.getElementById('palpiteInput').value = '';
            }

            // Verifica se o jogo acabou
            if (turno > 10) {
                alert('Fim de jogo! Você não conseguiu acertar o número em 10 tentativas. O número era: ' + resposta);
                resposta = Math.floor(Math.random() * 100) + 1;
                turno = 1;
                document.getElementById('turnoIndicador').innerText = 'Comece o jogo';
                document.getElementById('resultText').innerText = '';
                document.getElementById('palpiteInput').value = '';
            }
        });
    }
    if (JogadoresNum == 2) {
        // Configura as variáveis do jogo
        var resposta = Math.floor(Math.random() * 100) + 1; // Número aleatório entre 1 e 100
        var turno = 1;
        var jogador1Score = 0;
        var jogador2Score = 0;
        jogador1Tentativas = 1;
        jogador2Tentativas = 0;

        // Configura o indicador de turno na página
        document.getElementById('turnoIndicador').innerText = jogador1Nome + ' começa o jogo. Tentativa: ' + jogador1Tentativas;

        // Adiciona um evento de clique ao botão "Palpite"
        document.getElementById('palpiteInput').addEventListener('keydown', function(event) {
            if (event.key === 'Enter' && this.value.trim().length > 0) {
                event.preventDefault();
                document.getElementById('palpiteButton').click();
            }
        });
        document.getElementById('palpiteButton').addEventListener('click', function(event) {
            event.preventDefault();

            // Recupera o palpite do jogador atual
            var palpite = parseInt(document.getElementById('palpiteInput').value);

            // Verifica se o palpite é válido
            if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
                alert('Por favor, digite um número entre 1 e 100');
                return;
            }

            // Verifica se o palpite está certo
            if (palpite === resposta) {
                // Atualiza a pontuação do jogador atual
                if (turno % 2 === 1) {
                    jogador1Score++;
                    document.getElementById('jogador1Score').innerText = jogador1Score;
                } else {
                    jogador2Score++;
                    document.getElementById('jogador2Score').innerText = jogador2Score;
                }

                // Exibe a mensagem de acerto e prepara o jogo para uma nova rodada
                alert('Parabéns, ' + (turno % 2 === 1 ? jogador1Nome : jogador2Nome) + '! Você acertou o número em ' + (turno % 2 === 1 ? jogador1Tentativas : jogador2Tentativas) + ' tentativas.');
                resposta = Math.floor(Math.random() * 100) + 1;
                turno = 1;
                jogador1Tentativas = 1;
                jogador2Tentativas = 0;
                document.getElementById('divbordaPiscante').style.display = 'none';
                document.getElementById('turnoIndicador').innerText = jogador1Nome + ' começa o jogo. Tentativa: ' + jogador1Tentativas;
                document.getElementById('resultText').innerText = '';
                document.getElementById('palpiteInput').value = '';
            } else {
                // Exibe a mensagem de erro e prepara o jogo para o próximo palpite
                document.getElementById('divbordaPiscante').style.display = 'block';
                var resultText = 'Errou! ' + (palpite < resposta ? 'Tente um número maior que ' + palpite : ' Tente um número menor que ' + palpite);
                document.getElementById('resultText').innerText = resultText;
                turno++;
                if (turno % 2 === 1) {
                    jogador1Tentativas++;
                    document.getElementById('turnoIndicador').innerText = jogador1Nome + ' é sua vez de jogar. Tentativa: ' + jogador1Tentativas;
                } else {
                    jogador2Tentativas++;
                    document.getElementById('turnoIndicador').innerText = jogador2Nome + ' é sua vez de jogar. Tentativa: ' + jogador2Tentativas;
                }
                document.getElementById('palpiteInput').value = '';
            }

            // Verifica se o jogo acabou (apenas um jogador)
            if (turno > 10) {
                alert('Fim de jogo! Vocês não conseguiram acertar o número em 10 tentativas. O número era: ' + resposta);
                resposta = Math.floor(Math.random() * 100) + 1;
                turno = 1;
                document.getElementById('turnoIndicador').innerText = jogador1Nome + ' começa o jogo. Tentativa: ' + jogador1Tentativas;
                document.getElementById('resultText').innerText = '';
                document.getElementById('palpiteInput').value = '';
                jogador1Tentativas = 0;
                jogador2Tentativas = 0;
            }
        });
    }