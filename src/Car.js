import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const CarApp = () => {
  let [cars, setCars] = useState([]);
  console.log(cars);
  useEffect(() => {
    getCars();
  }, []);
  const getCars = () => {
    axios
      .get('/car')
      .then((res) => {
        setCars(res.data.results);
        console.log('called');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const createTable = () => {
    axios.get('/car/createtable');
  };
  const createCar = (e) => {
    e.preventDefault();
    let carObj = {
      carname: e.target.carname.value,
      price: e.target.price.value,
      color: e.target.color.value,
      in_stock: e.target.in_stock.value,
    };
    axios
      .post('/car', carObj)
      .then((res) => getCars())
      .catch((err) => console.log(err));
    getCars();
  };
  const deleteCar = (carname) => {
    axios
      .delete('/car' + carname)
      .then((res) => getCars())
      .catch((e) => console.log(e));
    getCars();
  };
  const updateCar = (carname) => {
    axios
      .put('/car' + carname)
      .then((res) => getCars())
      .catch((e) => console.log(e));
    getCars();
  };
  return (
    <div>
      {createTable()}
      <form className='todo' onSubmit={createCar}>
        <h3>Car Name:</h3>
        <input type='text' name='carname' placeholder='Enter Car Name ...' />
        <h3>Car Price:</h3>
        <input type='number' name='price' placeholder='Enter Price' />
        <h3>Car Colour:</h3>
        <select className='form-select' name='color'>
          <option value='black'>Black</option>
          <option value='blue'>Blue</option>
          <option value='grey'>Grey</option>
        </select>
        <h3>Availability:</h3>
        <select className='form-select' name='in_stock'>
          <option value={1}>Available</option>
          <option value={0}>Not Availabile</option>
        </select>
        <button>Submit</button>
      </form>
      {cars.map((val, index) => {
        return (
          <div>
            <h3>{val.carname}</h3>
            <p>{val.price}</p>
            <p>{val.color}</p>
            <p>{val.in_stock}</p>
            <button
              className='btn btn-warning'
              onClick={() => {
                deleteCar(val.carname);
              }}
            >
              del
            </button>
            <button
              className='btn btn-warning'
              onClick={() => updateCar(val.carname)}
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default CarApp;
