# sakura-card-captor-api

This repository aims to provide information and image of the anime cards Sakura card captor

https://sakura-card-captor-api.herokuapp.com

## HTTP Verbs

| HTTP METHOD   | POST             | GET        | PUT                                   | DELETE |
| -----------   | ---------------  | ---------  | ------------------------------------  | ------ |
| CRUD OP       | CREATE           | READ       | UPDATE                                | DELETE |
| /cards        | Create new cards | List cards | Card update                           | Delete all cards |
| /cards/cardId | Error            | Show card  | If exists, update Card; If not, error | Delete Card |


<strong>OBS</strong>: In the online version, only the CREATE, GET all and GET by Id methods are available
