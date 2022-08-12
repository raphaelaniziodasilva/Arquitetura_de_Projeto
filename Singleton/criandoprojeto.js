"use strict";
/* Instalações:
    npm init -y
    npm install typescript @types/node -D -->  instalando as dependências do typescript no módulo developer

    Vamos organizar o nosso código criando uma pasta para recerber os arquivo typescript e outra para receber os arquivos javascript, quando os arquios typescript for convertido (compilado) para javascript:

    - A pasta src vai receber os arquivos TypeScript
    - A pasta build vai receber os arquivos Javascript convertido (compilado)

    mkdir src, build --> criando as pastas src e build pela linha de comando

    para quando converter os arquivos de ts fique na pasta src e as converções (compilação) para js dentro da pasta build

    npx tsc --init --rootDir src --outDir build
    
*/ 
