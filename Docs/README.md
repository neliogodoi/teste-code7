Simple Inventory API
====================

Contact Info: [neliogodoi@yahoo.com.br](neliogodoi@yahoo.com.br)

Version: 1.0.0
Apache 2.0

http://www.apache.org/licenses/LICENSE-2.0.html

Access
------

Methods
-------

[ Jump to [Models](#__Models) ]

### Table of Contents

#### [Admins](#Admins)

-   [`delete /divida/{id}`](#deleteDivida)
-   [`get /usuario`](#findAllUsers)
-   [`get /divida/{id}`](#findDivida)
-   [`get /divida/usuario/{id}`](#findDividasByUserId)
-   [`get /usuario/{id}`](#findUser)
-   [`post /divida`](#saveDivida)
-   [`put /divida`](#updateDivida)

Admins
======

[Up](#__Methods)

``` {.delete}
delete /divida/{id}
```

Deleta uma divida pelo ID (deleteDivida)

Remove um registro de divida da base dados

### Path parameters

id (required)

Path Parameter — ID da divida

### Produces 

-   `application/json`

### Responses 

#### 200 

Remoção efetuada com sucesso [](#)

#### 400

Parametro diferente do requerido [](#)

#### 404 

Usuário inexistente [](#)

* * * * *

[Up](#__Methods)

``` {.get}
get /usuario
```

Buscar todos os usuários (findAllUsers)

Obtém todos os usuários registardos

### Return type 

array[[usuario](#usuario)]

### Example data

Content-Type: application/json

``` {.example}
[ 
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
]
```

### Produces 

-   `application/json`

### Responses

#### 200

Retorna todos as informações de usuário

* * * * *

[Up](#__Methods)

``` {.get}
get /divida/{id}
```

Buscar uma divida pelo ID (findDivida)

Obtém um registro de divida

### Path parameters

id (required)

Path Parameter — ID da divida

### Return type

Object

### Example data

Content-Type: application/json

``` {.example}
{
  "idUser" : 5,
  "motivo" : "motivo",
  "data" : 1396484375,
  "valor" : 6.027,
  "id" : "id"
}
```

### Produces 

-   `application/json`

### Responses

#### 200

Retorna as informações de uma divida [Object](#Object)

#### 400

Parametro diferente do requerido [](#)

#### 404

Usuário inexistente [](#)

* * * * *

[Up](#__Methods)

``` {.get}
get /divida/usuario/{id}
```

Buscar todas as dividas de um usuário (findDividasByUserId)

Obtém todos os registros de dividas de um usuário

### Path parameters

id (required)

Path Parameter — ID do usuário

### Return type

array[[divida](#divida)]

### Example data

Content-Type: application/json

``` {.example}
[ {
  "idUser" : 5,
  "motivo" : "motivo",
  "data" : 1396484375,
  "valor" : 6.027,
  "id" : "id"
}, {
  "idUser" : 2,
  "motivo" : "motivo",
  "data" : 1396484375,
  "valor" : 60.27,
  "id" : "id"
} ]
```

### Produces 

-   `application/json`

### Responses

#### 200

Retorna as informações de uma divida

#### 400

Parametro diferente do requerido [](#)

#### 404

Usuário inexistente [](#)

* * * * *

[Up](#__Methods)

``` {.get}
get /usuario/{id}
```

Buscar um usuário pelo ID (findUser)

Obtém um usuário registardo

### Path parameters

id (required)

Path Parameter — ID do usuário

### Return type

Object

### Example data

Content-Type: application/json

``` {.example}
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
```

### Produces

-   `application/json`

### Responses 

#### 200 

Retorna as informações de um usuário [Object](#Object)

#### 400

Parametro diferente do requerido [](#)

#### 404

Usuário inexistente [](#)

* * * * *

[Up](#__Methods)

``` {.post}
post /divida
```

Inserir uma nova divida (saveDivida)

Insere um registro de divida

### Request body

json [object](#object) (required)

Body Parameter — JSON da divida

### Return type

Object

### Example data

Content-Type: application/json

``` {.example}
{
  "idUser" : 5,
  "motivo" : "motivo",
  "data" : 1396484375,
  "valor" : 6.027,
  "id" : "id"
}
```

### Produces

-   `application/json`

### Responses

#### 200 

Retorna as informações da divida salva [Object](#Object)

#### 400 

Parametro diferente do requerido [](#)

#### 404 

Usuário inexistente [](#)

* * * * *

[Up](#__Methods)

``` {.put}
put /divida
```

Atualizar uma divida (updateDivida)

Atualiza um registro de divida

### Request body 

json [object](#object) (required)

Body Parameter — JSON da divida

### Return type 

Object

### Example data 

Content-Type: application/json

``` {.example}
{
  "idUser" : 5,
  "motivo" : "motivo",
  "data" : 1396484375,
  "valor" : 6.027,
  "id" : "id"
}
```

### Produces 

-   `application/json`

### Responses

#### 200 

Retorna as informações da divida alterada [Object](#Object)

#### 404 

Usuário inexistente [](#)

* * * * *

Models
------

[ Jump to [Methods](#__Methods) ]

### Table of Contents

1.  [`divida` -](#divida)

### `divida` - [Up](#__Models)

id (optional)

[String](#string)

idUser (optional)

[BigDecimal](#number)

motivo (optional)

[String](#string)

valor (optional)

[BigDecimal](#number)

data (optional)

[BigDecimal](#number)

