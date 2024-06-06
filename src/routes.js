const {
  addRefoodHandler,
  getAllRefoodsHandler,
  getRefoodByIdHandler,
  getAllUserHandler,
  getUserByIdHandler,
  addUserHandler,
  // editNoteByIdHandler,
  // deleteNoteByIdHandler,
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

  // {
  //   method: 'PUT',
  //   path: '/notes/{id}',
  //   handler: editNoteByIdHandler,
  // },
  // {
  //   method: 'DELETE',
  //   path: '/notes/{id}',
  //   handler: deleteNoteByIdHandler,
  // },
];

module.exports = routes;
