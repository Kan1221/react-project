import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function CreateUser() {
    const [name, SetName] = useState("");
    const [age, SetAge] = useState("");
    const [address, SetAddress] = useState("");

    const createUser = () => {
         let data = {name, age, address}
        console.warn("Im here.", data);
    }
    return (
        <div>
            <h1>Create User</h1>
            <input type="text" name="username" onChange={(e) => SetName(e.target.value)} value={name}></input>
            <br /><br />
            <input type="text" name="age" onChange={(e) => SetAge(e.target.value)} value={age}></input>
            <br /><br />
            <input type="text" name="address" onChange={(e) => SetAddress(e.target.value)} value={address}></input>
            <br /><br />
            <button onClick={createUser}>Create User</button>
        </div>
    )
}
export default CreateUser