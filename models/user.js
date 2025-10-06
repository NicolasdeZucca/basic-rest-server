const { Schema, model } = require('mongoose') ;

const userSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "Se necesita el nombre"]
    },
  correo: {
    type: String,
    required: [true, "Se necesita el correo"],
    unique: true
    },
  password: {
    type: String,
    required: [true, "Se necesita la contraseña"],
    },
  img: {type: String},
  role: {type: String, required: true, enum: ["ADMIN_ROLE", "USER_ROLE"]},
  status: {type: Boolean, default: true},
  google: {type: Boolean, default: false},
  date: { type: Date, default: Date.now },
});

module.exports = model('Usuario', userSchema);