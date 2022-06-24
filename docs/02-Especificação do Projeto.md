# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foram consolidados na forma de personas e histórias de usuários.  

## Personas

|   Regina da Cunha    |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pet-carona/blob/main/docs/img/personagem%20-%20regina.jpg)|**Idade:** 49 anos - **Ocupação:** Professora de inglês. Pratica teatro e toca guitarra em uma banda aos finais de semana. |**Pets:** Gata chamada Sabrina de 1 ano que faz acompanhamento veterinário uma vez por mês, pois possui cinomose. |
|**Motivações:** Regina não tem carro e precisa seguir rigorosamente as datas das consultas.  |**Frustrações:** Dificuldade de ter transporte para levá-la; Uber não aceita o transporte, pois a gata não aceita ficar na caixinha e acaba dando arranhões; Regina não tem carro e o local do veterinário é fora de mão para o transporte coletivo |**História:** Regina cuida da Gata desde seu nascimento. Ela é filhote da antiga gata de Regina que faleceu em 2021. | 

|   Jessica Oliveira    |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pet-carona/blob/main/docs/img/personagem%20-%20jessica.jpg)|**Idade:** 30 anos - **Ocupação:** Gerente de marketing na empresa Grupo GPS, localizado no bairro São José em Belo Horizonte MG. |**Pets:** Nike, craça Golden de 1 ano e 4 meses, frequenta a creche Matilha Real 5 vezes por semana em Belo Horizonte / MG. |
|**Motivações:** Jessica não possui carteira de motorista e por este motivo precisa se locomover com a Nike através dos aplicativos de transporte. |**Frustrações:** Levar a Nike em tempo hábil para a creche e buscá-la; Como os aplicativos de transportes (Uber e 99) não aceitam levar a Nike, a Jéssica acaba pagando muito caro uma corrida de taxi. O que fica aproximadamente um valor de R$31,50.  |**História:** Jéssica nascida no interior de São Paulo, na cidade de Campos do Jordão, foi morar em Belo Horizonte pois foi aprovada no SISU para o curso de Publicidade e Propaganda na UFMG. Foi na universidade que conheceu suas amigas Maya a Luiza. Entrou na empresa GPS como estagiária foi efetivada e está completando 5 anos de empresa.  Em janeiro de 2021 ganhou das suas amigas a Nike que estava com 3 meses de vida. Jéssica e Nike mora no bairro Belvedere.|

|   Carlos Magno    |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pet-carona/blob/main/docs/img/personagem%20-%20carlos.png)|**Idade:** 33 anos - **Ocupação:** Assistente administrativo de uma empresa de borracha localizada em Belo Horizonte. |**Pets:** Possui um Cadela chamada Mel, que possui 3 anos, na qual divide a guarda dela com sua ex esposa. Está em boas condições de saúde. |
|**Motivações:** Com o desejo de ter uma condição de vida melhor após anos, Carlos está cursando uma graduação para adquirir um emprego melhor. |**Frustrações:** Não possuir veículo para transportar sua cachorra para os passeios que ela tanto adora.  |**História:** Nascido em Belo Horizonte, formou o ensino médio é teve que começar a trabalhar cedo para ajudar em casa. Foi casado durante três anos, mas se separou é resolveu voltar aos estudos. Após 14 anos começou a sua graduação em Administração na PUC Minas é forma agora no final de 2024.|

|   João Francisco      |                                    |                |
|--------------------|------------------------------------|----------------------------------------|
|![](https://github.com/ICEI-PUC-Minas-PMV-ADS/pet-carona/blob/main/docs/img/personagem%20-%20joao.png)|**Idade:** 25 anos - **Ocupação:** Comerciante e responsável por uma ONG de resgate de cães de rua. Abriga cerca de 30 cães no espaço de sua ONG, com a ajuda de voluntários.  |**Pets:** Cerca de 30, todos adotados em situação de rua, em tratamento para serem disponibilizados para adoção. |
|**Motivações:** Muitos cães para levar a veterinário e tratamentos médicos; Dedicado a tentar dar o suporte necessário a esses animais em situação vulnerável. |**Frustrações:** Nem sempre está disponível na ONG para levá-los em seu carro, e nem todos os voluntários possuem carro ou CNH; Falta de recursos financeiros para manter todos os custos da instituição; Falta de mais de um veículo próprio para poder transportar todos os animais quando é necessário.  |**História:** Filho de comerciantes, João administra com os pais a loja de eletrônicos da família no centro de São Paulo. Como projeto pessoal, criou a ONG para ajudar cachorros abandonados nas ruas da capital, com recursos próprios e doações. Possui apenas um carro de passeio para transportar os cães. |

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Regina Cunha| Escolher motoristas com carros maiores.| Se sentir mais segura na viagem.|
|Jessica Oliveira Alves|Utilizar a pesquisa da localidade por motoristas disponíveis próximo ao meu bairro.|Otimizar o máximo de tempo da viagem até o meu destino.|
|Carlos Magno|Verificar os motoristas selecionados nas corridas anteriores e a disponibilidade deles.|Conseguir um processo de agendamento mais rápido, combinando corridas apenas com motoristas que topem transportar animais de grande porte.|
|João Francisco|Verificar pelo site os motoristas disponíveis para corrida.|Realizar a solicitação de corrida mais rapidamente.|
|João Francisco|Verificar os motoristas que precisam de ajuda de custo e os valores.|Poder retribuir de alguma forma a ajuda destas pessoas voluntárias.|

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues 

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve apresentar um mecanismo de busca para os passageiros pesquisarem os motoristas disponíveis.  | ALTA | 
|RF-002| O site deve apresentar um mecanismo de busca para os motoristas pesquisarem os passageiros disponíveis.  | ALTA |
|RF-003| O site deve oferecer a opção de escolher o tipo do perfil (motorista ou passageiro).  | ALTA |
|RF-004| O formulário deve apresentar as seguintes informações a serem preenchidas e editadas pelo perfil de passageiro:  endereço, bairro, CEP, e pets.   |ALTA |
|RF-005| O formulário deve apresentar as seguintes informações a serem preenchidas e editadas pelo perfil de motorista: endereço, bairro, CEP, modelo do carro, porte dos pets a serem levados, e valor da ajuda de custo necessária. | ALTA | 
|RF-006| O site deve permitir a conexão entre motoristas e passageiros, após realizada a busca, direcionando-os para o ambiente do WhatsApp com seus respectivos números cadastrados.    |BAIXA |
|RF-007| O site deve apresentar a possibilidade de se criar uma conta, realizar login e salvar as informações associadas. | ALTA |

### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender. 

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet e facilmente acessível para toda a equipe de desenvolvimento (GitHub Pages)  | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada  |  ALTA |
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade    |  MÉDIA |
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)   |  ALTA |
|RNF-005| O site deve apresentar as informações de forma visual e acessível, através de uma interface simples    |  ALTA |

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir. 

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 26 de junho de 2022.  |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Front-end.      |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.     |
