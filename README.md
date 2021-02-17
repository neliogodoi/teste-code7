# Teste Prático Code7
## Este repositório contém os resultados de um teste prático promovido pela Code7

## Backend

#### Linguagens e Frameworks

* Java 8
* Spring Boot 2x
* Spring Security
* Spring Data
* MongoDb
* JUnit


## Frontend

#### Linguagens e Frameworks

* TypeScript
* Angular 7
* Bootstrap
* Angular Material

# Desenvolvimento

## Backend

* **IDE:** Spring Tools Suite (Eclipse)

## Frontend

* **Editor de Texto:** Visual Studio Code

# Deploy

## Backend

### Deploy para Heroku

### Deploy para servidor linux

Em uma maquina rodando um SO baseado em Linux baseado em Debian como o Ubuntu / Ubuntu Server:

**Dependencias:**

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
**Subindo Banco de Dados:**

```shell
cd Deploy/
docker-compose -f database.yaml up
```

**Compilando API:**

```shell
cd Backend/api
mvn clean install -DskipTests
```

**Executando API:**
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
* Angular 7:
```shell
sudo npm -g angular
```

# Teste Ambiente Deployed

### Deploy feito em servidor linux hospedado na DigitalOcean

link

