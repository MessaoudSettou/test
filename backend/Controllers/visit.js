const Visits = require('../Models/VisitModel'); 

const incrementMembers = async () => {
  try {
    
    const existingRecord = await Visits.findOne();

    if (!existingRecord) {
      
      console.error('No record found in the "visits" table.');
      return;
    }

    existingRecord.members += 1;

  
    await existingRecord.save({ fields: ['members'] });

    console.log('Incremented "members" value successfully.');
  } catch (error) {
    console.error('Error incrementing "members" value:', error);
  }
};

const incrementGuests = async () => {
  try {
    
    const existingRecord = await Visits.findOne();

    if (!existingRecord) {
      console.error('No record found in the "visits" table.');
      return;
    }

    existingRecord.guests += 1;

    await existingRecord.save();

    console.log('Incremented "guests" value successfully.');
  } catch (error) {
    console.error('Error incrementing "guests" value:', error);
  }
};

module.exports = {
  incrementMembers,
  incrementGuests,
};
