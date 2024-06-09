const Path = require('path');
const {
  addRefoodHandler,
  getAllRefoodsHandler,
  getRefoodByIdHandler,
  getAllUserHandler,
  getUserByIdHandler,
  addUserHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/refood/{idLimbah}',
    handler: addRefoodHandler,
  },
  {
    method: 'GET',
    path: '/refood',
    handler: getAllRefoodsHandler,
  },
  {
    method: 'GET',
    path: '/refood/{idLimbah}',
    handler: getRefoodByIdHandler,
  },
  {
    method: 'GET',
    path: '/user',
    handler: getAllUserHandler,
  },
  {
    method: 'GET',
    path: '/user/{idUser}',
    handler: getUserByIdHandler,
  },
  {
    method: 'POST',
    path: '/user/add',
    handler: addUserHandler,
  },
  {
    method: 'GET',
    path: '/img/{filename}',
    handler: {
      directory: {
        path: Path.join(__dirname, '../img'),
        redirectToSlash: true,
      },
    },
  },
];

module.exports = routes;
