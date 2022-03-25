/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useState, useEffect } from 'react';

const UserApp = () => {
  let [users, setusers] = useState([]);
  useEffect(() => {
    getusers();
  }, []);
  const getusers = () => {
    axios
      .get('/user')
      .then((res) => {
        setusers(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const createTable = () => {
    axios.get('/user/createtable');
  };
  const adduser = (e) => {
    e.preventDefault();
    let userObj = {
      email: e.target.email.value,
      password: e.target.password.value,
      dob: e.target.dob.value,
      userinfo: e.target.userinfo.value,
    };
    axios
      .post('/user', userObj)
      .then((res) => getusers())
      .catch((e) => console.log(e));
  };
  const deleteuser = (email) => {
    axios
      .delete('/user/' + email)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
    getusers();
  };
  const deleteAllusers = () => {
    axios
      .get('/user/deleteall')
      .then((res) => getusers())
      .catch((e) => console.log(e));
    getusers();
  };
  const edituser = (email) => {
    axios
      .put('/user/edit' + email)
      .then((res) => getusers())
      .catch((e) => console.log(e));
    getusers();
  };
  return (
    <div className='register-page'>
      <form className='form' onSubmit={adduser}>
        <h4>
          <label>Email</label>
        </h4>
        <input required type='email' name='email' placeholder='enter Email' />
        <h4>
          <label>Password</label>
        </h4>
        <input
          required
          type='text'
          name='password'
          placeholder='Enter Password'
        />
        <h4>
          <lable>UserInfo</lable>
        </h4>
        <input required type='text' placeholder='UserInfo..' name='userinfo' />
        <p>
          <label>Date of Birth</label>
        </p>
        <input type='date' name='dob' required />
        <br />

        <div>
          <button>Add user</button>
        </div>
      </form>
      <div className='displayinline'>
        <button className='delu' onClick={createTable}>
          Create user Table
        </button>
        <button onClick={deleteAllusers}>Delete all users</button>
      </div>
      {users.map((val, index) => {
        return (
          <div>
            <h3>{val.email}</h3>
            <p>{val.password}</p>
            <p>{val.dob}</p>
            <p>{val.dod}</p>
            <button
              className='delu'
              onClick={() => {
                deleteuser(val.email);
              }}
            >
              del
            </button>
            <button className='delAll' onClick={() => edituser(val.email)}>
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserApp;
