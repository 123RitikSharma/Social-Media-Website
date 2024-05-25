const mongoose = require('mongoose');

module.exports = async() => {
    const mongoUri = "";//Enter you database URL
    try {
        mongoose.set('strictQuery', true);
        const connect = await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // serverApi: {
            //     version: ServerApiVersion.v1,
            //     strict: true,
            //     deprecationErrors: true,
            //   } 
        });
          console.log(`mongoDB connected: ${connect.connection.host}`);    
    } catch (error) {
        console.log(error);
        process.exit(1); //if cant connect to server then exit from file
    }
}
