const mongoose = require('mongoose');

const connectDB = async () => {
    console.log('connectDB goint to happen');
    const conn = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log(`mongodb connected ${conn.connection.host}`.green.underline);
}

module.exports = connectDB;