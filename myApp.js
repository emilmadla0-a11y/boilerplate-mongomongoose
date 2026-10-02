// Madla, Emilson Lio F.
// WD-303
require('node:dns').setServers(['8.8.8.8', '1.1.1.1']);
require('dotenv').config();
let mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let Person;

const createAndSavePerson = (done) => {
  done(null);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null);
};

const findPeopleByName = (personName, done) => {
  done(null);
};

const findOneByFood = (food, done) => {
  done(null);
};

const findPersonById = (personId, done) => {
  done(null);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null);
};

const removeById = (personId, done) => {
  done(null);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null);
};

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;