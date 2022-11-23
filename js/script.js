'use stcrict';

const URL =
  'https://mfs-14.getcourse.ru/public/files/12250/88/84120897322424565eb4cddeea2b910a.json?e=1670687999&s=jpPROkped6BoWYC26OBvDQ';

fetch(URL)
  .then((res) => res.json())
  .then((data) => renderList(data.cars))
  .catch((error) => console.warn('Opps... Some error' + error));

const renderList = (data) => {
  const selector = document.createElement('select');
  selector.insertAdjacentHTML('beforeend', `<option value="">Choose car</option>`);

  data.forEach((car, index) => {
    selector.insertAdjacentHTML('beforeend', `<option value="${index}">${car.brand}</option>`);
  });
  document.body.append(selector);

  document.body.insertAdjacentHTML('beforeend', '<div id="result"></div>');

  selector.addEventListener('change', (e) => {
    if (e.target.value != '') {
      renderCarInfo(e.target.value);
    } else {
      document.getElementById('result').innerHTML = '';
    }
  });
};

const renderCarInfo = async (id) => {
  const carData = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data.cars[id])
    .then((carData) => {
      document.getElementById(
        'result',
      ).innerHTML = `<span>Car: ${carData.brand} ${carData.model} <br>Price: ${carData.price}$</span>`;
    })
    .catch((error) => console.warn('Opps... Some error' + error));
};
