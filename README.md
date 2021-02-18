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

# Dependencias:

**Desenvolvimento Backend:**:

* Biblioteca *'build-essential'*:
```shell
sudo apt-get install -y build-essential
```
* Apache Maven: 
```shell
sudo apt install maven
```
* Java 8:
```shell
sudo apt install openjdk-8-jdk
```
**Deploy Backend:**
* Java 8;
* Docker Compose: 
```shell
sudo apt install docker-compose
```
**Desenvolvimento Frontend:**:

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
* Dendencias para Bootstrap
```shell
sudo npm install jquery popper.js
```
**Deploy Frontend:**

* Servidor Web *Apache 2*:
```shell
sudo apt install apache2
```
# Compilação:

#### Clonando projeto
```shell
git clone <link deste projeto>
cd teste-code7
```
#### Compilando API:
```shell
cd Backend/api
mvn clean install -DskipTests
```
#### Compilando Aplicação Angular
```shell
cd ./Frontend/debtmanager
npm install --save-dev
ng build
```
# Deploy para servidor linux
Em uma maquina rodando um Sistema Operacional Linux baseado em Debian como o Ubuntu / Ubuntu Server:

## Backend

#### Subindo Banco de Dados:

```shell
cd Deploy/
docker-compose -f database.yaml up
```
#### Executando API:
```shell
cd Backend/api/target
java -jar fullstack-0.0.1-SNAPSHOT.jar
```

## Frontend

#### Subindo Aplicação Angular
```shell
cp -r ./dist/* /var/www/html/
```

# Deploy Fácil em Maquina 'Linux'

Dentro deste projeto, existem arquivos previamente compilados, este médodo utiliza estes arquivos para fazer um Deploy facil das aplicações, no entanto as *"Dependências de Deploy"* ainda são necessárias:

```shell
chmod -x deploy.sh
./deploy.sh
```

# Teste Aplicações Deployed
Nste método o deploy das aplicações ja foi préviamente efetuado em uma maquina virtual hospedada no [DigitalOcean](https://www.digitalocean.com/):

* [Frontend](http://64.225.7.21/)
* [Backend](http://64.225.7.21:8080)
* [Mongo-Express](http://64.225.7.21:8081)
