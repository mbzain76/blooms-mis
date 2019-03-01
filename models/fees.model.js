const mongoose = require('mongoose');

const FeeSchema = mongoose.Schema({
         dayCareTuition: {type: Number},
         dayCareLunch: {type: Number},
         dayCareSwimming: {type: Number},
         dayCareHalf: {type: Number},
         dayCareFull: {type: Number},
         personalInsurance: {type: Number},
         piano: {type: Number},
         guitar: {type: Number},
         skating: {type: Number},
         taekwodo: {type: Number},
         ballet: {type: Number},
         transportZone1: {type: Number},
         transportZone2: {type: Number},
         transportZone3: {type: Number},
         transportZone4: {type: Number},
         transportZone5: {type: Number},
         transportZone6: {type: Number},
         
         beginnerTuition: {type: Number},
         beginnerLunch: {type: Number},
         beginnerSwimming: {type: Number},
    
         pp1Tuition: {type: Number},
         pp1Lunch: {type: Number},
         pp1Swimming: {type: Number},
    
         pp2Tuition: {type: Number},
         pp2Lunch: {type: Number},
         pp2Swimming: {type: Number},
    
         grade1Tuition: {type: Number},
        grade1Lunch: {type: Number},
         grade1Swimming: {type: Number},
    
         grade2Tuition: {type: Number},
         grade2Lunch: {type: Number},
         grade2Swimming: {type: Number},
    
}, 
                                      
{
    timestamps: true
});

module.exports = mongoose.model('Fee', FeeSchema);