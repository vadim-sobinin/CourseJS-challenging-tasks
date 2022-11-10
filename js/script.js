'use stcrict';
const fromURL = '../db.json';
const toURL = 'https://jsonplaceholder.typicode.com/posts';

const getData = (URL) => {
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json().then((data) => sendData(data, toURL));
    })
    .catch((err) => {
      console.log(err);
    });
};

const sendData = (data, toURL) => {
  fetch(toURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status + ' status');
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

getData(fromURL);
