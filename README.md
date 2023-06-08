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
git clone https://github.com/anapaulaliick/BemolDigital.git
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

Deve atualizar o report que esta sendo armazenado no cloud.cypress, para acessar basta acessar o seguinte link: https://cloud.cypress.io/organizations/7eabaf4d-b38b-4d72-9a89-7ae25585bd50/projects.

### Bibliotecas de apoio:
-Cypress: Framework de automação: https://cypress.io/