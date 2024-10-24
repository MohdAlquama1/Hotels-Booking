// // const express = require("express");
// // const Student = require('./models/conn');
// // const app = express();
// // const cors = require('cors');
// // const bodyParser = require('body-parser')
// // app.use(bodyParser.urlencoded({extented:true}));

// // app.use(cors())
// // app.use(express.json());

// // // POST route
// // // app.post('/api', function (req, res) {
// // //     const { name,lname,email,num,pass } = req.body;
// // // console.log(`Received name: ${name}`);
// // // console.log(`Received lname: ${lname}`);
// // // console.log(`Received email: ${email}`);
// // // console.log(`Received num: ${num}`);
// // // console.log(`Received pass: ${pass}`);

// // //     // Sending a response back to the client
// // //     res.send("elooo")

// // // });

// // app.get('/api', (req,res) => {
// //     const stud = new Student({
// //             roll_no :14,
// //             name : req.query.name,
// //             year : 2,
// //             subject : ['DBMS','OS','Networks']
// //     });
// //     stud.save().then(() => console.log('one entry added'), (err) => console.log(err));


// // // Start the server
// // app.listen(8080, () => {
// //     console.log("Server is running on http://localhost:8080");
// // })
// const express = require("express");
// const Student = require('./models/conn');
// const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors(
//     {origin : "http://localhost:3000"}
// ));
// app.use(express.json());

// app.post('/api', (req, res) => {
//     const stud = new Student({

//         name: req.body.name // Using req.body to access POST data

//     });

//     stud.save()
//         .then(() => {
//             console.log('One entry added');
//             res.status(201).send('Student added successfully');
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).send('Error adding student');
//         });

//         app.get("/api/students", (req, res) => {
//             Student.db.collection("stu").find({}).toArray(function(err, result) {
//                 if (err) throw err;
//                 console.log(result);
//               });
//         });

// });

// // Start the server
// app.listen(8000, () => {
//     console.log("Server is running on http://localhost:8080");
// });
const express = require("express");
const multer = require('multer');
const mongoose = require("mongoose");
const path = require('path'); // Import the path module
const app = express();

const Student = require('./models/conn');
const Hotel = require('./models/hotalDeatilAndImg');
const Account = require('./models/Account');
const HotelBooking = require('./models/hotelBookingSave');
const cors = require('cors');
const bodyParser = require('body-parser');
const { error } = require("console");
app.use('/img', express.static(path.join(__dirname, 'img')));
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));


// Handle connection events
const db = mongoose.connection;
db.on('error', err => {
  console.error('MongoDB error: ' + err.message);
});
db.once('open', () => {
  console.log('MongoDB connection established');
});


// Route to get all students
app.get("/api/students", (req, res) => {
  console.log('Received request for /api/students');
  Student.find({})
    .then(students => {
      console.log('Fetched students:', students);
      res.json(students);
    })
    .catch(err => {
      console.error('Error fetching students:', err);
      res.status(500).send("Error fetching students: " + err);
    });
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'img')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
})

const upload = multer({ storage: storage })


// app.post('/uplod', upload.single('coverPic'), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
//   console.log(req.file);
//   console.log(req.body);
//   res.json(req.file);

// })

// app.post('/upload', upload.fields([
//     { name: 'coverPic', maxCount: 1 },
//     { name: 'roomPic', maxCount: 1 },
//     { name: 'viewPic', maxCount: 1 },
//     { name: 'bathroomPic', maxCount: 1 },
//   ]), async  (req, res) => {
//     try {
//         console.log(req.file);
//        console.log(req.body);
//       res.send('Files uploaded and metadata saved to MongoDB!');
//     } catch (error) {
//       console.log(error);
//       res.status(500).send('Error uploading files');
//     }
//   });

// app.get('/images', async (req, res) => {
//   try {
//     const images = await ImageModel.find(); // Replace `ImageModel` with your MongoDB model
//     res.json(images);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Error fetching images');
//   }
// });


// app.post('/upload', upload.fields([
//   { name: 'coverPic', maxCount: 1 },
//   { name: 'roomPic', maxCount: 1 },
//   { name: 'viewPic', maxCount: 1 },
//   { name: 'bathroomPic', maxCount: 1 },
// ]), async (req, res) => {
//   try {
//     console.log('Files:', req.files);
//     console.log('Body:', req.body);
//     res.send('Files uploaded and text fields saved!');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error uploading files');
//   }
// });

app.post('/upload', upload.fields([
  { name: 'coverPic', maxCount: 1 },
  { name: 'roomPic', maxCount: 1 },
  { name: 'viewPic', maxCount: 1 },
  { name: 'bathroomPic', maxCount: 1 },
]), async (req, res) => {
  try {
    const { coverDesc, longDesc, city, hotelNum } = req.body;

    // Create a new hotel document
    const hotel = new Hotel({
      hotelName: req.body.hotelName,
      hotelType: req.body.hotelType,
      hotelPrice: req.body.hotelPrices,
      coverDesc,
      longDesc,
      city,
      hotelNum,
      coverPic: req.files['coverPic'] ? req.files['coverPic'][0].path : '',
      roomPic: req.files['roomPic'] ? req.files['roomPic'][0].path : '',
      viewPic: req.files['viewPic'] ? req.files['viewPic'][0].path : '',
      bathroomPic: req.files['bathroomPic'] ? req.files['bathroomPic'][0].path : '',
    });

    // Save the document to MongoDB
    await hotel.save();

    res.send('Files uploaded and metadata saved to MongoDB!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error uploading files');
  }
});

app.get('/hotels', async (req, res) => {
  try {
    const hotels = await Hotel.find(); // Retrieve all hotels from MongoDB
    res.json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching hotels');
  }
});
// USER ACCOUNT DETAIL HERE -> regstion detial to stored here 

app.post('/accountCreate', async (req, res) => {
  console.log(req.body);
  const accountCreate = Account(req.body);
  accountCreate.save();
  res.status(200).json({ message: 'User added successfully!' });
});
// USER ACCOUNT DETAIL CHECKING HERE  -> user it having to give msg oterwise err msg 


app.post('/login', async (req, res) => {
  const { email, pass } = req.body;

  try {
    // Find account by email
    const account = await Account.findOne({ email: email });

    if (!account) {
      return res.status(400).json({ msg: 'Account not found' });
    }

    // Directly compare plain text passwords
    if (account.pass === pass) {
      res.status(200).json({
        msg: 'Login successful', LoginDetal: {
          id: account._id,
          name: account.name,
          lname: account.lname,
          email: account.email,
          num: account.num,
          pass: account.pass
        }
      });
    } else {
      res.status(400).json({ msg: 'Password does not match' });
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ msg: 'Server error' });
  }
});

//ulr detail here use parme
app.get('/getRoomDetail/:id', async (req, res) => {
  const id = req.params.id;
  // Use findById to query the hotel by ID
  const hotel = await Hotel.findById(id);
  try {
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
      console.log("a");

    }

    res.status(200).json(hotel); // Send the hotel details as JSON response
    console.log("d", hotel);

  } catch (err) {
    console.error(err); // Log any errors
    res.status(500).json({ message: 'Server error' });
    console.log("err");

  }
});

//hotelBooking usere booking 

app.get('/hotelBooking/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const booking = await Hotel.findById(id);

    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the booking' });
  }
});

//booking detail save here 
app.post('/hotelBooking', async (req, res) => {
  console.log(req.body);
  const hotelBooking = HotelBooking({
    LoginUSerId: req.body.USerId,
    LoginFirstName: req.body.name,
    loginLastName: req.body.lname,
    LoginEmail: req.body.email,
    //hotel
    hotelName: req.body.ResHotelName,
    hotelType: req.body.ResHotelType,
    hotelCity: req.body.ResCity,
    hotelPrice: req.body.ResHotelPrice,
    hotelNum: req.body.ResHotelNum,
    //user stay detail
    fullName: req.body.fullName,
    nights: req.body.nights,
    age: req.body.age,
    gender: req.body.gender,
    aadhaarNo: req.body.aadhaarNo,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    Status: "pending"
  });
  hotelBooking.save();
  res.status(200).json({ message: 'User added successfully!' });
});


app.get('/userBookingList', async (req, res) => {
  try {
    const userId = req.query.userId; // Get the userId from query parameters
    const hotelBookingList = await HotelBooking.find({ LoginUSerId: userId }); // Use await to get the data
    res.json(hotelBookingList); // Send the retrieved booking list as the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching the booking list' });
  }
});

app.get('/seeOnwerToStatus', async (req, res) => {
  try {
    
    const hotelBookingList = await HotelBooking.find(); 
    res.json(hotelBookingList); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching the booking list' });
  }
});

//update status 
app.put('/editSatutus', (req, res) => {
  const  { id } = req.body; 
  const options = { aisehilikna: true };
  console.log(id); 
  HotelBooking.updateOne(
    {_id: new mongoose.Types.ObjectId(id)}, {$set : {
      Status : req.body.status
  }
}
).then((user)=>res.json(user)).catch((err)=>res.json(err))

});

// Start the server
app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
