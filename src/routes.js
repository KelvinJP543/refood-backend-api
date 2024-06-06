const {
  addRefoodHandler,
  getAllRefoodsHandler,
  getRefoodByIdHandler,
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
