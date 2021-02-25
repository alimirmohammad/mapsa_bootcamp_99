import React, { useState } from 'react';

export default function InfoFun() {
  const [myState, setMyState] = useState({
    name: 'Ali',
    job: 'Developer'
  });

  console.log(myState);

  const changeName = () =>
    setMyState(prevState => ({ ...prevState, name: 'Reza' }));

  return (
    <div>
      <button onClick={changeName}>Change Name</button>
      <p>Hello {myState.name}</p>
    </div>
  );
}
