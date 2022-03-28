import { useState, useEffect } from 'react';
import axios from 'axios';
const Car = () => {
  const [car, setCar] = useState([]);
  const [edit, setEdit] = useState(false);
  const [updateCar, setUpdateCar] = useState({});
  const getCars = () => {
    axios
      .get('/car')
      .then((res) => {
        setCar(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCars();
  }, []);
  const createCar = (event) => {
    event.preventDefault();
    const carObject = {
      id: event.target.id.value,
      carname: event.target.carname.value,
      price: event.target.price.value,
      color: event.target.color.value,
      in_stock: event.target.in_stock.value,
    };
    axios
      .post('/car', carObject)
      .then((res) => {
        getCars();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteCar = (id) => {
    axios
      .delete('/car/' + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getCars();
  };
  const deleteAll = () => {
    axios
      .get('/car/deleteall')
      .then((res) => {
        getCars();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const editCar = (id) => {
    setEdit(true);
    setUpdateCar(id);
  };
  const saveCar = (event) => {
    event.preventDefault();
    const carObject = {
      carname: event.target.carname.value,
      price: event.target.price.value,
      color: event.target.color.value,
      in_stock: event.target.in_stock.value,
    };
    axios.put(`/car/${updateCar}`, carObject).then((res) => {
      getCars();
      setEdit(false);
      console.log(res.data);
    });
  };
  return (
    <div>
      {edit ? (
        <div>
          <h1>Update Car</h1>
          <form className='todo' onSubmit={saveCar}>
            <h3>Car Name:</h3>
            <input
              type='text'
              name='carname'
              placeholder='Enter Car Name ...'
            />
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
        </div>
      ) : (
        <div>
          <h1>Car Details</h1>
          <form className='todo' onSubmit={createCar}>
            <b>Car Id : </b>
            <input type='number' name='id' placeholder='Enter Car Id' />
            <br />
            <b className='subHeading'>Car Name : </b>
            <input type='text' name='carname' placeholder='Enter Car Name' />
            <br />
            <b className='subHeading'>Price : </b>
            <input type='number' name='price' placeholder='Enter Car Price' />
            <br />
            <b className='subHeading'>Car Color : </b>
            <select name='color'>
              <option selected>Select</option>
              <option value='Black'>Black</option>
              <option value='Blue'>Blue</option>
              <option value='Grey'>Grey</option>
            </select>
            <br />
            <b>In Stock : </b>
            <input type='radio' name='in_stock' value='1' />
            Available
            <br />
            <input type='radio' name='in_stock' value='0' />
            Unavailable
            <br />
            <button className='btn btn-outline-primary'>
              <b>Add Car</b>
            </button>
            <br />
          </form>
          <button onClick={deleteAll}>
            <b>Delete All</b>
          </button>
          <br />
          <div>
            {car.map((val, index) => {
              return (
                <div>
                  <h5>{val.id}</h5>
                  <h5>{val.carname}</h5>
                  <h5>{val.price}</h5>
                  <h5>{val.color}</h5>
                  <h5>{val.in_stock}</h5>
                  <h5>
                    <button
                      onClick={() => {
                        deleteCar(val.id);
                      }}
                    >
                      <b> Delete</b>
                    </button>
                    <br />
                  </h5>
                  <h5>
                    <button
                      onClick={() => {
                        editCar(val.id);
                      }}
                    >
                      <b> Edit</b>
                    </button>
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Car;
