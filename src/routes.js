module.exports = (app) => {
  const cards = require("./cardcontroller");

  // Create a new Card
  app.post("/cards", cards.create);

  // Retrieve all Cards
  app.get("/cards", cards.findAll);

  // Retrieve a single Card with cardId
  app.get("/cards/:cardId", cards.findOne);

  // Update a Card with cardId
  app.put("/cards/:cardId", cards.update);

  // Delete a Card with cardId
  app.delete("/cards/:cardId", cards.delete);
};
