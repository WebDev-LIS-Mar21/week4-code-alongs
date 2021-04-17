const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learnmongoose',
    { useNewUrlParser: true, 
      useUnifiedTopology: true })
    .then((response) => {
        console.log('Connection success');
        console.log(response.connections[0].name);
    })
    .catch((error) => {
        console.log(error);
    });


    //Mongoose is ODM - Object Document Mapper
    //MongoDB - Collections
    //Mongoose - Models

    //Initialize a model (fields)
    const Cat = mongoose.model('Cat', { name: String });
    
    Cat.create({
        name: 'Steve'
    }).then((responseFromMongo) => {
        console.log('Cat created', responseFromMongo);
    });

    //Create a Student model with a field called firstName
    //and field called age
    //Create one student
    const Student = mongoose.model('Student', { firstname : String, age: Number});

async function getCats() {
    let allCatsFromDB = await Cat.find();
    console.log(allCatsFromDB);
}

async function createStudent() {
    try {
        let response = await Student.create({firstname: 'Lucia', age: 28 });
        console.log('Student created', response);
        getCats();
    } catch(e) {
        console.log('error', e);
    }  
}

createStudent();



getCats();
    