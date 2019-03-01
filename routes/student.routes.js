module.exports = (app) => {
    const students = require('../controllers/student.controller.js');
    const fee = require('../controllers/fees.controller.js');
    // Create a new Student
    app.post('/students', students.create);

    // Retrieve all Notes
    app.get('/students', students.findAll);

    // Retrieve a single Note with noteId
    app.get('/students/:Id', students.findOne);

    // Update a Note with noteId
    app.put('/students/:Id', students.update);

    // Delete a Note with noteId
    app.delete('/students/:Id', students.delete);
    
    // Create a new Student
    app.post('/fees', fee.create);

    // Retrieve all Notes
    app.get('/fees', fee.findAll);
    
    
    // Retrieve a single Note with noteId
    app.get('/fees/:Id', fee.findOne);

    // Update a Note with noteId
    app.put('/fees/:Id', fee.update);

    // Delete a Note with noteId
    app.delete('/fees/:Id', fee.delete);

}