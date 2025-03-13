const mongoose = require('mongoose');

// Define the schema for a Project
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Automatically adds `createdAt` and `updatedAt` fields

// Create the model from the schema
const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
