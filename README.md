# teste-mercafacil
Teste em cypress para o desafio da mercafacil


Foi bem divertido, fazia um tempo que não automatizada as páginas da web sem o padrão que converso com os desenvolvedores, geralmente em conversa com eles no projeto inicial eles colocam já os ID único para evitar que a regressão quebre no futuro, facilitando para que na hora do deploy eles não fiquem 100% dependentes de mim. 

Notei que sua aplicação se localiza em um ambiente de teste aberto, que gera uma baixa performance na aplicação algumas vezes, então tive que deixar a automação com um tempo de espera alto, coloquei 30 segundos e mesmo assim algumas vezes dependendo do horário a aplicação demora até 40 ou 50 segundos para efetuar o processo, espero que em produção não esteja dessa maneira, por isso já na pasta de sugestões eu sugeri uma aplicação para teste não funcional. 

Sobre como montei a automação. optei por não usar o BDD / Gherkin e também apliquei page objects no projeto para que fique mais legível e de fácil manutenção, se não for o padrão que você usa, me deixe saber. Optei por fazer um script de geração aleatória de e-mail e cpf para facilitar nos testes automatizados, evitando que quebre na hora que você for rodar, normalmente após os testes eu rodaria um sql para confirmar que foi ingerido com sucesso o cadastro e também para deletar o usuário caso não tenha esse processo fácil no produto, como não tenho nada disso então poluí um pouco do seu ambiente de teste com dados fake (me perdoe).

Obrigado pela oportunidade, se conseguir confirmar que recebeu por favor me avisar, e também caso gere algum erro na qual não previ e você não consiga rodar devidamente os testes, me avise por favor, para evitar nos meus próximos desafios técnicos.


Obs: No dia da entrevista você comentou do meu time, e depois falou que não falei qual time eu torcia, mas eu falei sim, eu torço para o São Paulo, creio que não saiu na hora ou eu não consegui me comunicar direito. 
