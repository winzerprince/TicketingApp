
    const express = require('express');

    const genres = require('./routes/genres');
    const customers = require('./routes/customers');
    const home = require('./routes/home');
    const debug = require('debug')('app:startup');
    const config = require('config');
    const morgan = require('morgan');
    const helmet = require('helmet');
    const logger = require('./middleware/logger');
    const port = process.env.PORT || 3000;
    const app = express();
const mongoose = require('mongoose');
    //create database with a document for each genre designing their sturcture
    mongoose.connect('mongodb://127.0.0.1/vidly')
        .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Failed to connect to MongoDB...\n' + err));
        
    app.use(express.json());
    app.use(logger.log);
    app.use(logger.auth);
    app.use(express.static('public'));
app.use('/api/genres', genres);
    app.use('/api/customers', customers);
    app.use('/', home);
    console.log(app.get('env'));
    app.use(helmet());
app.set('view engine', 'pug');
    app.set('views', './views');
    if(app.get('env') === 'development'){
        app.use(morgan('tiny'));
        debug('Morgan enabled...', ); 
    }
    //console.log('App name:' + config.get('name'));
    //console.log('Mail: ' + config.get('mail.host'));
    //console.log('password: ' + config.get('mail.password'));
    
    
    
    
    app.listen(port, () => console.log(`Listening on port ${port}`));