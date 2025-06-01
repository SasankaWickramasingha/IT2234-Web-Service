const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    code: { type: String, required: true },
    name: { type: String, required: true },
    credits: { type: Number, required: true },
    description: { type: String }
});

const Course = mongoose.model('Course', courseSchema); 

const webservice = new Course({
    code: 'IT2234',
    name: 'Practical for web services',
    credits: 3,
    description: 'Build a REST API with NodeJS technology'
});

const osSystem = new Course({
    code: 'IT2214',
    name: 'Practical for operating systems',
    credits: 4,
    description: 'Linux commands'
});

webservice.save();
osSystem.save();

module.exports = Course;
