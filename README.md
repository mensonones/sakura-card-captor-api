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

## How Contribute

- You can contribute by adding new cards. Cards that have not yet been added.
- You can also contribute by suggesting improvements to the project, code, etc.
- Link Card Images: https://drive.google.com/open?id=1UwkT_w4FRFs_89yMod6RByJ8jTWzhxgc

 - Example Object: Method Post for add new Card

```javascript
{
	"name": "Clow Big",
	"urlImage": "https://drive.google.com/open?id=1oKDvS4sUa2OSv68t-qLrPAkO3Z-nlKmJ"
}
```
