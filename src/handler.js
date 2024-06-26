const { nanoid } = require('nanoid');
const refoods = require('./refoods');
const users = require('./users');

const addRefoodHandler = (request, h) => {
  const { idLimbah } = request.params;
  const { teks, idUser, namaLengkap } = request.payload;
  const idPengolahan = nanoid(16);
  const createdAt = new Date().toISOString();
  // const updatedAt = createdAt;

  const newOlah = {
    idPengolahan, teks, idUser, namaLengkap, createdAt,
  };/* updatedAt */

  const refoodIndex = refoods.findIndex((refood) => refood.idLimbah === idLimbah);

  if (refoodIndex !== -1) {
    refoods[refoodIndex].caraPengolahan.push(newOlah);

    const response = h.response({
      status: 'success',
      message: 'Cara pengolahan berhasil ditambahkan',
      data: {
        pengolahanId: idPengolahan,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Cara pengolahan gagal ditambahkan',
  });
  response.code(500);
  return response;
};

const getAllRefoodsHandler = () => ({
  status: 'success',
  data: {
    refoods,
  },
});

const getRefoodByIdHandler = (request, h) => {
  const { idLimbah } = request.params;

  const refood = refoods.filter((n) => n.idLimbah === idLimbah)[0];

  if (refood !== undefined) {
    return {
      status: 'success',
      data: {
        refood,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Jenis Limbah tidak ditemukan',
  });
  response.code(404);
  return response;
};

const getAllUserHandler = () => ({
  status: 'success',
  data: {
    users,
  },
});

const getUserByIdHandler = (request, h) => {
  const { idUser } = request.params;

  const user = users.filter((n) => n.idUser === idUser)[0];

  if (user !== undefined) {
    return {
      status: 'success',
      data: {
        user,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'User tidak ditemukan',
  });
  response.code(404);
  return response;
};

const addUserHandler = (request, h) => {
  const { username, password, namaLengkap } = request.payload;
  const idUser = nanoid(16);
  // const createdAt = new Date().toISOString();
  // const updatedAt = createdAt;

  const newUser = {
    idUser, username, password, namaLengkap,
  };/* updatedAt */

  const userExists = users.some((user) => user.idUser === idUser);

  if (!userExists) {
    users.push(newUser);

    const response = h.response({
      status: 'success',
      message: 'User berhasil ditambahkan',
      data: {
        userId: idUser,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'User baru gagal ditambahkan',
  });
  response.code(500);
  return response;
};

// const editNoteByIdHandler = (request, h) => {
//   const { id } = request.params;

//   const { title, tags, body } = request.payload;
//   const updatedAt = new Date().toISOString();

//   const index = notes.findIndex((note) => note.id === id);
//   if (index !== -1) {
//     notes[index] = {
//       ...notes[index],
//       title,
//       tags,
//       body,
//       updatedAt,
//     };

//     const response = h.response({
//       status: 'success',
//       message: 'Catatan berhasil diperbarui',
//     });
//     response.code(200);
//     return response;
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Gagal memperbarui catatan. Id tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };

// const deleteNoteByIdHandler = (request, h) => {
//   const { id } = request.params;

//   const index = notes.findIndex((note) => note.id === id);

//   if (index !== -1) {
//     notes.splice(index, 1);
//     const response = h.response({
//       status: 'success',
//       message: 'Catatan berhasil dihapus',
//     });
//     response.code(200);
//     return response;
//   }

//   const response = h.response({
//     status: 'fail',
//     message: 'Catatan gagal dihapus. Id tidak ditemukan',
//   });
//   response.code(404);
//   return response;
// };

module.exports = {
  addRefoodHandler,
  getAllRefoodsHandler,
  getRefoodByIdHandler,
  getAllUserHandler,
  getUserByIdHandler,
  addUserHandler,
  // editNoteByIdHandler,
  // deleteNoteByIdHandler,
};
