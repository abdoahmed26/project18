import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser(){
    let { id } = useParams();
    let [user,setUser] = useState({});
    useEffect(()=>{
        axios.get(`https://apiforuser.onrender.com/users/${id}`)
        .then((res)=>{
            setUser(res.data);
        })
    },[id])
    let myUrl = useNavigate();
    let [first,setFirst] = useState("");
    let [last,setLast] = useState("");
    let [username,setuser] = useState("");
    let [password,setpass] = useState("");
    let [email,setEmail] = useState("");
    let [phone,setPhone] = useState("");
    let [age,setAge] = useState("");
    let [country,setCountry] = useState("");
    let [gender,setGender] = useState("");
    function getValue(event){
        event.preventDefault();
        axios.put(`https://apiforuser.onrender.com/users/${id}`,{
            firstname: first || user.firstname,
            lastname: last || user.lastname,
            username : username || user.username,
            password : password || user.password,
            email: email || user.email,
            phone: phone || user.phone,
            age: age || user.age,
            country: country || user.country,
            gender: gender || user.gender
        })
        myUrl("/Home");
    }
    return(
        <div className="pt-5 pb-3 pb-sm-0 px-2">
            <form onSubmit={(e)=>getValue(e)}>
                <div className="d-flex flex-column flex-sm-row gap-3 w-100 mb-4">
                    <div className="divInput">
                        <label className="mb-2">First Name :</label><br/>
                        <input type="text" name="first" className="form-control" placeholder="Your First Name"
                        defaultValue={user.firstname} onInput={(e)=>setFirst(e.target.value)} />
                    </div>
                    <div className="divInput">
                        <label className="mb-2">Last Name :</label><br/>
                        <input type="text" name="last" className="form-control" placeholder="Your Last Name" 
                        defaultValue={user.lastname} onInput={(e)=>setLast(e.target.value)}/>
                    </div>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-3 w-100 mb-4">
                    <div className="divInput">
                        <label className="mb-2">Username :</label><br/>
                        <input type="text" name="username" className="form-control" required placeholder="Your Username"
                        defaultValue={user.username} onInput={(e)=>setuser(e.target.value)} />
                    </div>
                    <div className="divInput">
                        <label className="mb-2">Password :</label><br/>
                        <input type="password" name="password" className="form-control" required placeholder="Your Password" 
                        defaultValue={user.password} onInput={(e)=>setpass(e.target.value)}/>
                    </div>
                </div>
                <div className="gap-3 w-100 mb-4 d-flex flex-column flex-sm-row">
                    <div className="divInput">
                        <label className="mb-2">Email :</label><br/>
                        <input type="email" name="email" className="form-control" placeholder="Your Email" 
                        defaultValue={user.email} onInput={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="divInput">
                        <label className="mb-2">Telephone :</label><br/>
                        <input type="text" name="phone" className="form-control" placeholder="Your Phone" 
                        defaultValue={user.phone} onInput={(e)=>setPhone(e.target.value)}/>
                    </div>
                </div>
                <div className="gap-3 w-100 mb-4 d-flex flex-column flex-sm-row">
                    <div className="divInput">
                        <label className="mb-2">Age :</label><br/>
                        <input type="number" name="age" className="form-control" placeholder="Your Age"
                        defaultValue={user.age} onInput={(e)=>{setAge(e.target.value)}}/>
                    </div>
                    <div className="divInput">
                        <label className="mb-2">Country :</label><br/>
                        <input type="text" name="country" className="form-control" placeholder="Your Country" 
                        defaultValue={user.country} onInput={(e)=>{setCountry(e.target.value)}}/>
                    </div>
                </div>
                <div className="w-100 mb-4">
                    <div className="divInput">
                        <label className="mb-2">Gender :</label><br/>
                        <select name="gender" className="form-select text-black"
                        onChange={(e)=>setGender(e.target.value)}>
                            <option hidden selected>{user.gender}</option>
                            <option className="text-black">Male</option>
                            <option className="text-black">Female</option>
                        </select>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Update Changes" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}