const mongoose = require('mongoose');
const Cat = require('./models/cat-model');
const User = require('./models/user-model');

mongoose.connect('mongodb://localhost/schemas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((response) => {
    console.log(`Connected to: ${response.connections[0].name}`);
}).catch((err) => {
    console.log(`Error occurred ${err}`)
});

//CRUD Application

//Create
//Read
//Update
//Delete

//CREATE
Cat.create({
    name: 'Sylvester',
    color: 'White',
    age: 10
}).then(() => {
    console.log('Cat created');
    User.create({
        name: 'Lucia',
        job: 'Developer',
        country: 'portugal'
    }).then(() => {
        console.log('User created');
        //READ
        //User.find({ job: 'Developer'}, { name: 1, _id: 0}, { sort: { name: -1 }})
        //User.findById('60780074bcead293839fa0ae')
        User.find().then((usersFromDB) => {
            console.log(`All users ${usersFromDB}`);  
            
            //UPDATE
            //User.findByIdAndUpdate('60780074bcead293839fa0ae', { name: 'Alice'})
            //User.findOneAndUpdate({ job: 'Designer'}, { country: 'Spain'})
            User.updateMany({ name: 'Lucia'}, { job: 'Designer', country: 'France'} ).then(() => {
                console.log('Users updated');

                //DELETE
                //User.findOneAndDelete({ job: 'Designer'})
                //User.findByIdAndDelete('60780074bcead293839fa0ae')
                User.deleteMany({ $or: [{name: 'Lucia'}, {name: 'Luis'}]}).then(() => {
                    console.log('Users deleted');

                    //Close connection to mongoDB
                    mongoose.connection.close();
                })
            })
        })
    });
});

async function updateDB() {
    try {
        //CREATE
        await Cat.create({name: 'Sylvester',color: 'White', age: 10 });
        console.log('cat created');
        await User.create({name: 'Lucia', job: 'Developer', country: 'portugal'})
        console.log('user created created');
        
        //READ
        let usersFromDB = await User.find();
        console.log(`all users from DB ${usersFromDB}`);

        //UPDATE
        await User.updateMany({ name: 'Lucia'}, { job: 'Designer', country: 'France'} );
        console.log('Users updated');

        //DELETE
        await User.deleteMany({ $or: [{name: 'Lucia'}, {name: 'Luis'}]})
        console.log('Users deleted');  
    }
    catch(error) {

    }
    finally {
        mongoose.connection.close();
    }
}

updateDB();



