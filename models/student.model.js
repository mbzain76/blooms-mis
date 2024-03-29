const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
         firstName: {type: String},
    middleName: {type: String},
    lastName: {type: String},
    class: {type: String},
    sex: {type: String},
    dateOfBirth: {type: String},
    nationality: {type: String},
    residentialAddress: {type: String},
    pickingPoint: {type: String},
    fatherFirstName: {type: String},
    fatherMiddleName: {type: String},
    fatherLastName: {type: String},
    fatherContact: {type: String},
    motherFirstName: {type: String},    
    motherMiddleName: {type: String},    
    motherLastName: {type: String},       
    motherContact: {type: String},    
    email: {type: String},
    postalAddress: {type: String},
    doctorContact: {type: String},
    doctorName: {type: String},
    photoURL: {type: String},
    termFeesPayer: {type: String},
    termFeesPayerNumber: {type: String},
    feePaid: {type: Boolean},
    termFeesTotal: {type: Number},
    prefferedHospital: {type: String},
    doctorEmail: {type: String},
    guardianName: {type: String},
    guardianContact: {type: String},
    tuition: {type: Number},
    lunch: {type: Number},
    swimming: {type: Number},
    halfDayCare: {type: Boolean},
    fullDayCare: {type: Boolean},
    annualInsurance: {type: Number},
    piano: {type: Boolean},
    guitar: {type: Boolean},
    skating: {type: Boolean},
    taekwondo: {type: Boolean},
    ballet: {type: Boolean},
    tennis: {type: Boolean},
    transportZone1: {type: Boolean},    
    transportZone2: {type: Boolean},    
    transportZone3: {type: Boolean},       
    transportZone4: {type: Boolean},    
    transportZone5: {type: Boolean},
    transportZone6: {type: Boolean},
    termTotal: {type: Number},
    previousTermBalance: {type: Number},
    amountPaid: {type: Number},
}, 
                                      
{
    timestamps: true
});

module.exports = mongoose.model('Student', StudentSchema);