// const mongoose = require('mongoose');
// //require('dotenv').config()
// mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5', 
//  {useNewUrlParser:true, useUnifiedTopology:true});
// //mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5')
// //mongoose.connect('mongodb+srv://mohdalquama:alquama@cluster0.myrjcp7.mongodb.net/')
// const db = mongoose.connection;

// db.on('error', err => {
//         console.error('MongoDB error: '+err.message);
        
// });

// db.once('open', () => console.log('MongoDB connection established'));

// const studentSchema = new  mongoose.Schema({
   
//     name : String
    
// });

// const Student = mongoose.model('stu',studentSchema);
// //module.exports = Student;

// module.exports= Student;

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String
});

const Student = mongoose.model('Stus', studentSchema);

module.exports = Student;

