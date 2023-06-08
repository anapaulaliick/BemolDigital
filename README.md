# Cypress - BemolDigital 

## Cenários de Testes automatizados

    ✓ Automação de Teste Web I

    ✓  Automação de Teste Web II

    ✓ Automação de Teste de API

## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto. Você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/fabiocaraujo/cy_api_serverest.git
```
```
cd cy_api_serverest
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para executar em moodo Headlesss, via console
```
npx cypress run
```

#### Para executarVia Dashboard
```
npx cypress open 
```
Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.


### Gerando relatórios

```
npm run cy:report  
```

Deve criar um arquivo "cypress/mochawesome-report/report.html. Basta abrir o arquivo com seu navegador preferido.


### Bibliotecas de apoio:
-Cypress: Framework de automação: https://cypress.io/

-Faker: Biblioteca para geração de massa de dados: https://www.npmjs.com/package/faker

-Mochawesome Report, para geração de relatórios: https://www.npmjs.com/package/mochawesome 

### Boa diversão ;) 
Qualquer crítica ou sugestão é bem vinda! 



#   B e m o l D i g i t a l  
 