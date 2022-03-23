import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
const HobbyApp = () => {
  let [Hobbys, setHobbys] = useState([
    { name: 'nani', description: 'He is batsman', doc: '2022-01-01' },
  ]);
  useEffect(() => {
    getHobbys();
  }, []);
  const getHobbys = () => {
    axios
      .get('/hobby')
      .then((res) => setHobbys(res.data))
      .catch((error) => {
        console.log(error);
      });
  };
  const addHobby = (event) => {
    event.preventDefault();
    let HobbyObject = {
      name: event.target.name.value,
      description: event.target.description.value,
      doc: event.target.doc.value,
    };
    axios
      .post('/hobby', HobbyObject)
      .then((res) => {
        getHobbys();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteHobby = (indexToDel) => {
    axios
      .delete('/hobby/' + indexToDel)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getHobbys();
  };

  return (
    <div>
      <h1>Hobby app with express and mongo</h1>
      <form onSubmit={addHobby}>
        <label>Name</label>
        <br />
        <input type='text' name='name' placeholder='Enter Name' />
        <br />
        <label>Description</label>
        <br />
        <textarea name='description' placeholder='Describe....'></textarea>
        <br />
        <br />
        <label>Date of Creation</label>
        <br />
        <input type='date' name='doc' />
        <br />
        <br />
        <input type='submit' />
      </form>
      {Hobbys.map((val, index) => {
        return (
          <div className='border'>
            Name: {val.name}
            <br />
            Description: {val.description}
            <br />
            Date of Creation: {val.doc}
            <br />
            <button
              onClick={() => {
                deleteHobby(`${val._id}`);
              }}
            >
              Delete this Hobby
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default HobbyApp;
