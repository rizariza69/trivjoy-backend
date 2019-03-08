require('dotenv').config()
const mongoose = require('../../config/mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

// User schema
const TripSchema = mongoose.Schema({
  name: String,
  email: String
})

// plug the AutoIncrement plugin into the schema to create auto incremented id
// id is different with _id
// inc_field is to track which id to increment
TripSchema.plugin(AutoIncrement, {
  id: 'trip_counter',
  inc_field: 'id'
})

// User model => users collection
const Trip = mongoose.model('Trip', TripSchema)

module.exports = Trip
