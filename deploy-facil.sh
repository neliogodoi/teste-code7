!#/bin/bash

echo "=== Iniciando deploy fácil das aplicações..."
sleep 2
cd ./DataBase/
echo "=== Subindo Banco de Dados..."
docker-compose -f database.yaml up &
cd ../Backend/
echo "=== Subindo API..."
java -jar api-1.0.jar &
cd ../Frontend/
echo "=== Subindo Frontend..."
unzip debtmanage.zip
cp -r debtmanage/* /var/www/html/
echo "=== Finzalizado!"
