'use stcrict';
const fromURL = '../db.json';
const toURL = 'https://jsonplaceholder.typicode.com/posts';

const getData = (URL) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', URL);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status != 200) {
      console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      console.log('Data received successfully!');
      console.log(xhr.response);
      sendData(xhr.response, toURL);
    }
  };

  xhr.onprogress = (event) => {
    if (xhr.status == 200) {
      if (event.lengthComputable) {
        console.log(`Got ${event.loaded} from ${event.total} bytes`);
      } else {
        console.log(`Got ${event.loaded} bytes`);
      }
    }
  };

  xhr.onerror = () => {
    console.log('Request failed');
  };
};

const sendData = (data, toURL) => {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', toURL);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(data);

  xhr.onload = () => {
    if (xhr.status != 201) {
      console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      console.log('Data sent successfully!');
      console.log(xhr.response);
    }
  };

  xhr.onprogress = (event) => {
    if (xhr.status == 200) {
      if (event.lengthComputable) {
        console.log(`Sent ${event.loaded} from ${event.total} bytes`);
      } else {
        console.log(`Sent ${event.loaded} bytes`);
      }
    }
  };

  xhr.onerror = () => {
    console.log('Data sent failed');
  };
};

getData(fromURL);
