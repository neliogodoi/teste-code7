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

### Path parameters {.field-label}

id (required)

Path Parameter — ID da divida

### Produces {.field-label}

This API call produces the following media types according to the Accept
request header; the media type will be conveyed by the Content-Type
response header.

-   `application/json`

### Responses {.field-label}

#### 200 {.field-label}

Remoção efetuada com sucesso [](#)

#### 400 {.field-label}

Parametro diferente do requerido [](#)

#### 404 {.field-label}

Usuário inexistente [](#)

* * * * *

[Up](#__Methods)

``` {.get}
get /usuario
```

Buscar todos os usuários (findAllUsers)

Obtém todos os usuários registardos

### Return type {.field-label}

array[[usuario](#usuario)]

### Example data {.field-label}

Content-Type: application/json

``` {.example}
[ {
  "name" : "name",
  "id" : 0.80082819046101150206595775671303272247314453125
}, {
  "name" : "name",
  "id" : 0.80082819046101150206595775671303272247314453125
} ]
```

### Produces {.field-label}

This API call produces the following media types according to the Accept
request header; the media type will be conveyed by the Content-Type
response header.

-   `application/json`

### Responses {.field-label}

#### 200 {.field-label}

Retorna todos as informações de usuário

* * * * *

[Up](#__Methods)

``` {.get}
get /divida/{id}
```

Buscar uma divida pelo ID (findDivida)

Obtém um registro de divida

### Path parameters {.field-label}

id (required)

Path Parameter — ID da divida

### Return type {.field-label}

Object

### Example data {.field-label}

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

### Produces {.field-label}

This API call produces the following media types according to the Accept
request header; the media type will be conveyed by the Content-Type
response header.

-   `application/json`

### Responses {.field-label}

#### 200 {.field-label}

Retorna as informações de uma divida [Object](#Object)

#### 400 {.field-label}

Parametro diferente do requerido [](#)

#### 404 {.field-label}

Usuário inexistente [](#)

* * * * *

[Up](#__Methods)

``` {.get}
get /divida/usuario/{id}
```

Buscar todas as dividas de um usuário (findDividasByUserId)

Obtém todos os registros de dividas de um usuário

### Path parameters {.field-label}

id (required)

Path Parameter — ID do usuário

### Return type {.field-label}

array[[divida](#divida)]

### Example data {.field-label}

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

### Produces {.field-label}

This API call produces the following media types according to the Accept
request header; the media type will be conveyed by the Content-Type
response header.

-   `application/json`

### Responses {.field-label}

#### 200 {.field-label}

Retorna as informações de uma divida

#### 400 {.field-label}

Parametro diferente do requerido [](#)

#### 404 {.field-label}

Usuário inexistente [](#)

* * * * *

[Up](#__Methods)

``` {.get}
get /usuario/{id}
```

Buscar um usuário pelo ID (findUser)

Obtém um usuário registardo

### Path parameters {.field-label}

id (required)

Path Parameter — ID do usuário

### Return type {.field-label}

Object

### Example data {.field-label}

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

### Produces {.field-label}

This API call produces the following media types according to the Accept
request header; the media type will be conveyed by the Content-Type
response header.

-   `application/json`

### Responses {.field-label}

#### 200 {.field-label}

Retorna as informações de um usuário [Object](#Object)

#### 400 {.field-label}

Parametro diferente do requerido [](#)

#### 404 {.field-label}

Usuário inexistente [](#)

* * * * *

[Up](#__Methods)

``` {.post}
post /divida
```

Inserir uma nova divida (saveDivida)

Insere um registro de divida

### Request body {.field-label}

json [object](#object) (required)

Body Parameter — JSON da divida

### Return type {.field-label}

Object

### Example data {.field-label}

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

### Produces {.field-label}

This API call produces the following media types according to the Accept
request header; the media type will be conveyed by the Content-Type
response header.

-   `application/json`

### Responses {.field-label}

#### 200 {.field-label}

Retorna as informações da divida salva [Object](#Object)

#### 400 {.field-label}

Parametro diferente do requerido [](#)

#### 404 {.field-label}

Usuário inexistente [](#)

* * * * *

[Up](#__Methods)

``` {.put}
put /divida
```

Atualizar uma divida (updateDivida)

Atualiza um registro de divida

### Request body {.field-label}

json [object](#object) (required)

Body Parameter — JSON da divida

### Return type {.field-label}

Object

### Example data {.field-label}

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

### Produces {.field-label}

This API call produces the following media types according to the Accept
request header; the media type will be conveyed by the Content-Type
response header.

-   `application/json`

### Responses {.field-label}

#### 200 {.field-label}

Retorna as informações da divida alterada [Object](#Object)

#### 404 {.field-label}

Usuário inexistente [](#)

* * * * *

Models
------

[ Jump to [Methods](#__Methods) ]

### Table of Contents

1.  [`divida` -](#divida)
2.  [`usuario` -](#usuario)

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

