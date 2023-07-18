const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/flight-db?authSource=admin', {
    useNewUrlParser: true,
    user: 'admin',
    pass: 'p4ssw0rd',
    keepAlive: true,
})
    .then(db => console.log('db connect'))
    .catch(err => console.log(err))