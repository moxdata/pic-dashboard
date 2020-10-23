const authProvider = {
  // login: ({ username, password }) =>  {
  //     const request = new Request(`${process.env.REACT_APP_API_URL}/api-auth/login/`, {
  //         method: 'POST',
  //         body: JSON.stringify({ username, password }),
  //         headers: new Headers({ 'Content-Type': 'application/json' }),
  //     });
  //     return fetch(request)
  //         .then(response => {
  //             if (response.status < 200 || response.status >= 300) {
  //                 throw new Error(response.statusText);
  //             }
  //             return response.json();
  //         })
  //         .then(auth => {
  //             localStorage.setItem('auth', JSON.stringify(auth));
  //         });
  // },
  login: ({ username, password }) => {
    // console.log("login:", username, password)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    // accept all username/password combinations
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    return Promise.resolve();
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('username')
        ? Promise.resolve()
        : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
  // ...
};

export default authProvider;