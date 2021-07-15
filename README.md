# 🚀 API Guide
- API_URL: `https://api-kctrnn.herokuapp.com`

## Endpoints

`/upload`
#### To upload a image

```sh
POST /upload
```

Example:
```js
  const formData = new FormData();
  formData.append('image', imageFile);
```

---

`/auth`
#### Register
```sh
POST /auth/register
```

Usage:
```js
axios.post('https://api-kctrnn.herokuapp.com/auth/register', {
    email: 'user@gmail.com',
    password: 'password',
    name: 'kctrnn'
})
```

#### Login
```sh
POST /auth/login
```

Usage:
```js
axios.post('https://api-kctrnn.herokuapp.com/auth/login', {
    email: 'user@gmail.com',
    password: 'password',
})
```
---

`/users` : Authenticated

Usage:
```js
// /api/axiosClient.js

axiosClient.interceptors.request.use(
  function (config) {
    const customHeaders = {};

    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      customHeaders["auth-token"] = accessToken;
    }

    return {
      ...config,
      headers: {
        ...customHeaders, // auto attach token
        ...config.headers, // but you can override for some requests
      },
    };
  },

  function (error) {
    return Promise.reject(error);
  }
);
```

#### Update account
```sh
PATCH /auth/users/:userId
```

Example:
```js
axios.patch('https://api-kctrnn.herokuapp.com/users/29128318230', {
    name: 'newName'
})
```

#### Get user by id
```sh
GET /auth/users/:userId
```
