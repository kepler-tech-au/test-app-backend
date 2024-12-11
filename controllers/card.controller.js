import Card from "../models/Card.js";

// Get all cards
export const getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new card
export const addCard = async (req, res) => {
  const { name, description, list } = req.body;
  try {
    const newCard = new Card({ name, description, list });
    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update card position (drag and drop)
export const updateCard = async (req, res) => {
  const { id } = req.params;
  const { list } = req.body;
  try {
    const updatedCard = await Card.findByIdAndUpdate(
      id,
      { list },
      { new: true }
    );
    res.json(updatedCard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a card
export const deleteCard = async (req, res) => {
  const { id } = req.params;
  try {
    await Card.findByIdAndDelete(id);
    res.json({ message: "Card deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
