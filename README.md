# 🚀 API Guide
- API_URL: `https://api-kctrnn.herokuapp.com`

## Endpoints

### /upload
#### To upload a image

```sh
POST /upload
```

Example:
```js
  const formData = new FormData();
  formData.append('image', imageFile);
```


### /auth
#### Register
```sh
POST /auth/register
```

Usage:
```js
import axios from 'axios';

axios
  .post('https://api-kctrnn.herokuapp.com/auth/register', {
    email: 'user@gmail.com',
    password: 'userpassword',
    name: 'kctrnn'
  })
  .then(response => {
    // Handle success
  })
  .catch(error => {
    // Handle error
  });
```

#### Login
```sh
POST /auth/login
```

Usage:
```js
import axios from 'axios';

axios
  .post('https://api-kctrnn.herokuapp.com/auth/register', {
    email: 'user@gmail.com',
    password: 'userPassword',
  })
  .then(response => {
    // Handle success
  })
  .catch(error => {
    // Handle error
  });
```
