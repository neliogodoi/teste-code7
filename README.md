# Teste Prático Code7
## Este repositório contém os resultados de um teste prático promovido pela Code7

## Linguagens e Frameworks
#### Backend
* Java 8
* Spring Boot 2x
* Spring Security
* Spring Data
* MongoDB
* JUnit

#### Frontend
* TypeScript
* Angular
* Bootstrap
* Angular Material


# Desenvolvimento
## Ambiente Utilizado:
* Sistema Operacioanl: Linux Mint 19.3 Tricia
* Memória RAM: 8GB
* Placa de Video: NVidia 2GB
* IDE Backend: Spring Tools Suite (Eclipse)
* Editor de Texto Frontend: Visual Studio Code

# Deploy

## Backend

### Deploy para Heroku

### Deploy para servidor linux

Em uma maquina rodando um SO baseado em Linux baseado em Debian como o Ubuntu / Ubuntu Server:

**Dependencias:**

* Certifique-se que o a biblioteca *'build-essential'* esteja instalada
```shell
sudo apt-get install -y build-essential
```
* Java 8:
```shell
sudo apt install openjdk-8-jdk
```
* Apache Maven: 
```shell
sudo apt install maven
```
* Docker Compose: 
```shell
sudo apt install docker-compose
```
#### Subindo Banco de Dados:

```shell
cd Deploy/
docker-compose -f database.yaml up
```

#### Compilando API:

```shell
cd Backend/api
mvn clean install -DskipTests
```

#### Executando API:
```shell
cd Backend/api/target
java -jar fullstack-0.0.1-SNAPSHOT.jar
```

## Frontend

### Deploy para Heroku

### Deploy para servidor linux

**Dependencias:**

* NodeJS e NPM (Gerenciador de pacotes Node):
```shell
# Ao instalar o NPM ele automaticamente instala o NodeJS
sudo apt install npm
```
* Angular CLI:
```shell
sudo npm -g @angular@cli
```
* Traspilador SASS
```shell
sudo npm install node-sass
```
#### Compilando Aplicação Angular
```shell
cd ./Frontend/debtmanager
npm install --save-dev
ng build --prod
```
#### Subindo Aplicação Angular

```shell
cd ./Frontend/debtmanager
npm install --save-dev
ng build --prod
```

# Teste Ambiente Deployed

### Deploy feito em servidor linux hospedado na DigitalOcean

link
