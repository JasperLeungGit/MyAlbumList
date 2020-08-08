export default {
  getList: (username) => {
    return fetch("/list/" + username).then((response) => {
      return response.json().then((data) => data);
    });
  },

  getAlbums: () => {
    return fetch("/user/albums").then((response) => {
      if (response.status !== 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized", msgError: true } };
    });
  },

  getUsers: () => {
    return fetch("/user/userlist").then((response) => {
      if (response.status !== 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized", msgError: true } };
    });
  },

  postAlbum: (album) => {
    return fetch("/user/album", {
      method: "post",
      body: JSON.stringify(album),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log(album);
      if (response.status !== 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized" }, msgError: true };
    });
  },

  deleteAlbum: (id) => {
    return fetch("/user/album/delete/", {
      method: "post",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status !== 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized" }, msgError: true };
    });
  },
};
