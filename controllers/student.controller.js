const Student = require('../models/student.model.js');

// Create and Save a new Student
exports.create = (req, res) => {
    
   
    // Create a student
  const student = new Student({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    class: req.body.class,
    sex: req.body.sex,
    dateOfBirth: req.body.dateOfBirth,
    nationality: req.body.nationality,
    residentialAddress: req.body.residentialAddress,
    pickingPoint: req.body.pickingPoint,
    fatherFirstName: req.body.fatherFirstName,
    fatherMiddleName: req.body.fatherMiddleName,
    fatherLastName: req.body.fatherLastName,
    fatherContact: req.body.fatherContact,
    motherFirstName: req.body.motherFirstName,    
    motherMiddleName: req.body.motherMiddleName,    
    motherLastName: req.body.motherLastName,       
    motherContact: req.body.motherContact,    
    email: req.body.email,
    postalAddress: req.body.postalAddress,
    doctorContact: req.body.doctorContact,
    doctorName: req.body.doctorName,
    photoURL: req.body.photoURL,
    termFeesPayer: req.body.termFeesPayer,
    termFeesPayerNumber: req.body.termFeesPayerNumber,
    feePaid: req.body.feePaid,
    termFeesTotal: req.body.termFeesTotal,
    prefferedHospital: req.body.prefferedHospital,
    doctorEmail: req.body.doctorEmail,
    guardianName: req.body.guardianName,
    guardianContact: req.body.guardianContact,
    tuition: req.body.tuition,
    lunch: req.body.lunch,
    swimming: req.body.swimming,
    horseRiding: req.body.horseRiding,
    halfDayCare: req.body.halfDayCare,
    fullDayCare: req.body.fullDayCare,
    annualInsurance: req.body.annualInsurance,
    piano: req.body.piano,
    guitar: req.body.guitar,
    skating: req.body.skating,
    taekwondo: req.body.taekwondo,
    ballet: req.body.ballet,
    tennis: req.body.tennis,
    transportZone1: req.body.transportZone1,    
    transportZone2: req.body.transportZone2,    
    transportZone3: req.body.transportZone3,       
    transportZone4: req.body.transportZone4,    
    transportZone5: req.body.transportZone5,
    transportZone6: req.body.transportZone6,
    termTotal: req.body.termTotal,
    previousTermBalance: req.body.previousTermBalance,
    amountPaid: req.body.amountPaid
      
    });

    // Save Student in the database
    student.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Student."
        });
    });
};

// Retrieve and return all students from the database.
exports.findAll = (req, res) => {
    Student.find()
    .then(students => {
        res.send(students);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving students details."
        });
    });
};

// Find a single student with a Id
exports.findOne = (req, res) => {
    Student.findById(req.params.Id)
    .then(student => {
        if(!student) {
            return res.status(404).send({
                message: "Student not found with id " + req.params.Id
            });            
        }
        res.send(student);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Student not found with id " + req.params.Id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving student with id " + req.params.Id
        });
    });
};

// Update a student identified by the Id in the request
exports.update = (req, res) => {
  

    // Find student and update it with the request body
  Student.findByIdAndUpdate(req.params.Id, {
     firstName: req.body.firstName,
     middleName: req.body.middleName,
     lastName: req.body.lastName,
     class: req.body.class,
     sex: req.body.sex,
     dateOfBirth: req.body.dateOfBirth,
     nationality: req.body.nationality,
     residentialAddress: req.body.residentialAddress,
     pickingPoint: req.body.pickingPoint,
     fatherFirstName: req.body.fatherFirstName,
     fatherMiddleName: req.body.fatherMiddleName,
     fatherLastName: req.body.fatherLastName,
     fatherContact: req.body.fatherContact,
     motherFirstName: req.body.motherFirstName,    
     motherMiddleName: req.body.motherMiddleName,    
     motherLastName: req.body.motherLastName,       
    motherContact: req.body.motherContact,    
    email: req.body.email,
    postalAddress: req.body.postalAddress,
    doctorContact: req.body.doctorContact,
    doctorName: req.body.doctorName,
    photoURL: req.body.photoURL,
    termFeesPayer: req.body.termFeesPayer,
    termFeesPayerNumber: req.body.termFeesPayerNumber,
    feePaid: req.body.feePaid,
    termFeesTotal: req.body.termFeesTotal,
    prefferedHospital: req.body.prefferedHospital,
    doctorEmail: req.body.doctorEmail,
    guardianName: req.body.guardianName,
    guardianContact: req.body.guardianContact,  
    tuition: req.body.tuition,
    lunch: req.body.lunch,
    swimming: req.body.swimming,
    horseRiding: req.body.horseRiding,
    halfDayCare: req.body.halfDayCare,
    fullDayCare: req.body.fullDayCare,
    annualInsurance: req.body.annualInsurance,
    piano: req.body.piano,
    guitar: req.body.guitar,
    skating: req.body.skating,
    taekwondo: req.body.taekwondo,
    ballet: req.body.ballet,
    tennis: req.body.tennis,
    transportZone1: req.body.transportZone1,    
    transportZone2: req.body.transportZone2,    
    transportZone3: req.body.transportZone3,       
    transportZone4: req.body.transportZone4,    
    transportZone5: req.body.transportZone5,
    transportZone6: req.body.transportZone6,
    termTotal: req.body.termTotal,
    previousTermBalance: req.body.previousTermBalance,
    amountPaid: req.body.amountPaid
  }, {new: true})
    .then(student => {
        if(!student) {
            return res.status(404).send({
                message: "Student not found with id " + req.params.Id
            });
        }
        res.send(student);
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
    Student.findByIdAndRemove(req.params.Id)
    .then(student => {
        if(!student) {
            return res.status(404).send({
                message: "Student not found with id " + req.params.Id
            });
        }
        res.send({message: "Student deleted successfully!"});
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