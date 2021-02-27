<h1 align="center">Teste prático RPC - Hugo</h1>
<h4>Desafio:</h4>
<p>Construir uma aplicação para que os telespectadores possam acessar a grade de programação da RPC. Para que sua aplicação web seja útil ao público final (nossos telespectadores), você deverá consumir a API "EPG" da Globo e conseguir as informações relacionadas a grade de programação da RPC. O endereço da API "EPG" responsável por retornar os dados da programação é: https://epg-api.video.globo.com/programmes/{ID_EMISSORA}?date={ANO-MES-DIA}. O valor ID_EMISSORA para a RPC é 1337, e o formato padrão para o campo "date" é "ANO-MES-DIA".
<br><br>Lembrando que a aplicação construída deverá conter as funcionalidades abaixo:

- Exibir a grade de programação do dia, disposta de 00:00 até 23:59;

- Destacar qual o programa esta sendo exibido no momento de acesso a aplicação (ex. Telespectador acessou sua aplicação 12:35, dessa forma, além da grade do dia, o programa que esta no ar durante este momento deve ser destacado).


</p>

<h4>Para executar:</h4>
<p>
<ul>
 <li>Clonar repositório</li>
 <li>Acessar a raiz do projeto no terminal e digitar: npm install</li>
 <li>Ao terminar de instalar as dependências, digitar npm run dev</li>
 <li>Acessar a pasta src em outro terminal e digitar http-server</li>
 <li>A aplicação poderá ser acessada no browser por http://127.0.0.1:8080 ou http://192.168.15.7:8080</li>
</ul>
</p>

<h4>Tecnologias e bibliotecas utilizadas</h4>
<ul>
<li>Node Js</li>
<li>Express</li>
<li>Axios</li>
<li>Moment</li>
<li>Bootstrap</li>
</ul>
