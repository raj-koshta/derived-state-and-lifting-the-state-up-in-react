import React, { useState } from 'react'

const DerivedState = () => {

  const [users, setUsers] = useState([
    {name: "Raj", age: 24},
    {name: "Shubh", age: 26},
    {name: "Kishan", age: 28},
    {name: "Ram", age: 30}
  ]);

  const userCount = users.length;
  const avgAge = users.reduce((accum, curEle)=> accum + curEle.age, 0) / userCount
  return (
    <div className="card">
          <div>
            {users.map((user, index)=>{
              return(
                <p key={index}>My name is {user.name} and I'm {user.age} years old</p>
              );
            })}
          </div>
          <br />
          <p>Total users is: {userCount}</p>
          <p>Average user  age is: {avgAge}</p>
          <br />
          <hr />
          <p>
            Derived State Example
          </p>
    </div>
  )
}

export default DerivedState
