const Fees = require('../models/fees.model.js');

// Create and Save a new Fee structure
exports.create = (req, res) => {
    
   
    // Create a fee structure
  const fees = new Fees({
   
         dayCareTuition: req.body.dayCareTuition,
         dayCareLunch: req.body.dayCareLunch,
         dayCareSwimming: req.body.dayCareSwimming,
         dayCareHalf: req.body.dayCareHalf,
         dayCareFull: req.body.dayCareFull,
         personalInsurance: req.body.personalInsurance,
         piano: req.body.piano,
         guitar: req.body.guitar,
         skating: req.body.skating,
         taekwodo: req.body.taekwodo,
         ballet: req.body.ballet,
         transportZone1: req.body.transportZone1,
         transportZone2: req.body.transportZone2,
         transportZone3: req.body.transportZone3,
         transportZone4: req.body.transportZone4,
         transportZone5: req.body.transportZone5,
         transportZone6: req.body.transportZone6,
         
         beginnerTuition: req.body.beginnerTuition,
         beginnerLunch: req.body.beginnerLunch,
         beginnerSwimming: req.body.beginnerSwimming,
    
         pp1Tuition: req.body.pp1Tuition,
         pp1Lunch: req.body.pp1Lunch,
         pp1Swimming: req.body.pp1Swimming,
    
         pp2Tuition: req.body.pp2Tuition,
         pp2Lunch: req.body.pp2Lunch,
         pp2Swimming: req.body.pp2Swimming,
    
         grade1Tuition: req.body.grade1Tuition,
        grade1Lunch: req.body.grade1Lunch,
         grade1Swimming: req.body.grade1Swimming,
    
         grade2Tuition:  req.body.grade2Tuition,
         grade2Lunch:  req.body.grade2Lunch,
         grade2Swimming:  req.body.grade2Swimming,
      
    });

    // Save Fees in the database
    fees.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Fee structure."
        });
    });
};

// Retrieve and return all fees from the database.
exports.findAll = (req, res) => {
    Fees.find()
    .then(fees => {
        res.send(fees);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving fees details."
        });
    });
};

// Find a single student with a Id
exports.findOne = (req, res) => {
    Fees.findById(req.params.Id)
    .then(fees => {
        if(!fees) {
            return res.status(404).send({
                message: "Structure not found with id " + req.params.Id
            });            
        }
        res.send(fees);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Structure not found with id " + req.params.Id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving structure with id " + req.params.Id
        });
    });
};

// Update a student identified by the Id in the request
exports.update = (req, res) => {
  

    // Find student and update it with the request body
  Fees.findByIdAndUpdate(req.params.Id, {
   


firstName: req.body.firstName,
         dayCareTuition: req.body.dayCareTuition,
         dayCareLunch: req.body.dayCareLunch,
         dayCareSwimming: req.body.dayCareSwimming,
         dayCareHalf: req.body.dayCareHalf,
         dayCareFull: req.body.dayCareFull,
         personalInsurance: req.body.personalInsurance,
         piano: req.body.piano,
         guitar: req.body.guitar,
         skating: req.body.skating,
         taekwodo: req.body.taekwodo,
         ballet: req.body.ballet,
         transportZone1: req.body.transportZone1,
         transportZone2: req.body.transportZone2,
         transportZone3: req.body.transportZone3,
         transportZone4: req.body.transportZone4,
         transportZone5: req.body.transportZone5,
         transportZone6: req.body.transportZone6,
         
         beginnerTuition: req.body.beginnerTuition,
         beginnerLunch: req.body.beginnerLunch,
         beginnerSwimming: req.body.beginnerSwimming,
    
         pp1Tuition: req.body.pp1Tuition,
         pp1Lunch: req.body.pp1Lunch,
         pp1Swimming: req.body.pp1Swimming,
    
         pp2Tuition: req.body.pp2Tuition,
         pp2Lunch: req.body.pp2Lunch,
         pp2Swimming: req.body.pp2Swimming,
    
         grade1Tuition: req.body.grade1Tuition,
        grade1Lunch: req.body.grade1Lunch,
         grade1Swimming: req.body.grade1Swimming,
    
         grade2Tuition:  req.body.grade2Tuition,
         grade2Lunch:  req.body.grade2Lunch,
         grade2Swimming:  req.body.grade2Swimming,
  }, {new: true})
    .then(fees => {
        if(!fees) {
            return res.status(404).send({
                message: "Student not found with id " + req.params.Id
            });
        }
        res.send(fees);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Student not found with id " + req.params.Id
            });                
        }
        return res.status(500).send({
            message: "Error updating student with id " 
        });
    });
};
// Delete a student with the specified Id in the request
exports.delete = (req, res) => {
    Fees.findByIdAndRemove(req.params.Id)
    .then(fees => {
        if(!fees) {
            return res.status(404).send({
                message: "Structure not found with id " + req.params.Id
            });
        }
        res.send({message: "Structure deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Student not found with id " + req.params.Id
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.Id
        });
    });
};
   









































































