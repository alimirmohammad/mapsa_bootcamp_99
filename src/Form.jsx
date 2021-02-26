import React from 'react';

export default function Form() {
  const submitData = event => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log('SUBMIT');
  };

  return (
    <form onSubmit={submitData}>
      <input name='username' type='text' placeholder='user name' />
      <input id='password' type='password' placeholder='password' />
      <button type='submit'>Login</button>
    </form>
  );
}
