const express = require('express');
const router = express.Router();
const propertyController = require('../controller/propertyController');

// Create a new property
router.post('/create', propertyController.createProperty);

// Get all properties
router.get('/all', propertyController.getAllProperties);

// Get a single property by ID
router.get('/:id', propertyController.getPropertyById);

// Update a property by ID
router.put('/:id', propertyController.updatePropertyById);

// Delete a property by ID
router.delete('/:id', propertyController.deletePropertyById);

// Search for a property by propertyId
router.get('/search/:propertyId', propertyController.searchPropertyById);

module.exports = router;