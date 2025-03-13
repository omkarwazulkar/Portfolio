const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Get all projects (GET request)
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

// Create a new project (POST request)
router.post('/', async (req, res) => {
    const { title, description, link } = req.body;
    
    // Check if any of the required fields are missing
    if (!title || !description || !link) {
      return res.status(400).json({ message: "Missing required fields" });
    }
  
    try {
      const newProject = new Project({ title, description, link });
      await newProject.save(); // Save the project to the database
      res.status(201).json(newProject); // Return the newly created project
    } catch (err) {
      console.error(err); // Log the error for better debugging
      res.status(500).json({ message: 'Error creating project', error: err });
    }
  });
  

// Update an existing project (PUT request)
router.put('/:id', async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated project
    );
    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ message: 'Error updating project' });
  }
});

// Delete a project (DELETE request)
router.delete('/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting project' });
  }
});

module.exports = router;
