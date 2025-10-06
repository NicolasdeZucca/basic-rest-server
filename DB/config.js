const mongoose = require('mongoose');

const dbConection = async () => {

    try {
        
        await mongoose.connect(process.env.MONGO_ATLAS_DB);

        console.log("DB online")

    } catch (error) {
        console.log(error)
        throw new Error("Error start DB");
        
    }
} 



module.exports = {
    dbConection,
}
