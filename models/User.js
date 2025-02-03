// Importation de Mongoose
const mongoose = require('mongoose');

// Définition du schéma de l'utilisateur
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Exportation du modèle User
module.exports = mongoose.model('User', UserSchema);
