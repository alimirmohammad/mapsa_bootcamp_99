import React, { useState } from 'react';

export default function InfoFun() {
  const [myState, setMyState] = useState({
    name: 'Ali',
    jobs: ['Developer', 'Doctor', 'Google CEO', 'Teacher']
  });

  console.log(myState);

  const changeName = () =>
    setMyState(prevState => ({ ...prevState, name: 'Reza' }));

  const addJob = () =>
    setMyState(prev => ({ ...prev, jobs: prev.jobs.concat('President') }));

  return (
    <div>
      <button onClick={changeName}>Change Name</button>
      <button onClick={addJob}>Add Job</button>
      <p>Hello {myState.name}</p>
      <h4>Jobs</h4>
      <ul>
        {myState.jobs.map(job => (
          <li key={job}>{job}</li>
        ))}
      </ul>
    </div>
  );
}
