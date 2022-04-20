# Arquitetura da Solução

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução.

## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na figura abaixo.

![Diagramad de Componentes](https://github.com/ICEI-PUC-Minas-PMV-ADS/pet-carona/blob/main/docs/img/arquitetura.PNG)
<center>Figura - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Passageiros** - registro de usuários cadastrados com esse perfil.
     - **MMotoristas** - registro de usuários cadastrados com esse perfil.
     - **Avaliações** - notas e comentários dos usuários sobre motoristas e passageiros após corridas confirmadas.
 - **WhatsApp API** - plataforma que permite a conexão de motoristas e usuários no ambiente do WhatsApp ao final do processo de confirmação de corrida.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

## Hospedagem

O site utiliza a plataforma do GitHub Pages como ambiente de hospedagem do site do projeto. 

A publicação do site no GitHub Pages é feita por meio de uma submissão do projeto (push) via git para o repositório remoto.
