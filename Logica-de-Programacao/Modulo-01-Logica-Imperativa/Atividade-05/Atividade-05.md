## Desafio

Na tabela em anexo, encontramos dados de 4 jogadores de um game que contemplam os pontos e moedas obtidos durante as partidas e se conseguiram lutar ou não com o chefe.

![tabela](./img/Atividade05.png)

Baseado nos dados desses jogadores, foram construídas algumas expressões. Avalie cada expressão abaixo, observando as condições de cada jogador, descrito na tabela acima. Marque com V( Verdadeiro) ou F(Falso) o resultado de cada expressão.

Dica: Lembre-se de substituir as variáveis "pontos", "moedas" e "enfrentou_chefe" pelos valores correspondentes para cada jogador.

Expressões:<br>
(  ) Jogador 1: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Sim)<br>
( ) Jogador 2: (pontos >= 100) and (moedas >= 5) and (enfrentou_chefe == Não)<br>
(  ) Jogador 3: (pontos < 100) or (moedas < 5) or (enfrentou_chefe == Sim)<br>
(  ) Jogador 4: (pontos != 100) or (moedas != 5) or not(enfrentou_chefe == Não)<br>

## Resolução

( V ) Jogador 1: (120 >= 100) and (15 >= 5) and (Sim == Sim)<br>
( F ) Jogador 2: (99 >= 100) and (200 >= 5) and (Não == Não)<br>
( V ) Jogador 3: (100 < 100) or (5 < 5) or (Sim == Sim)<br>
( F ) Jogador 4: (101 != 100) or (4 != 5) or not(Não == Não) <br>

