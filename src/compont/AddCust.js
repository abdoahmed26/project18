import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCust(){
    let myUrl = useNavigate();
    let [first,setFirst] = useState("");
    let [last,setLast] = useState("");
    let [username,setuser] = useState("");
    let [password,setpass] = useState("");
    let [email,setEmail] = useState("");
    let [phone,setPhone] = useState("");
    let [age,setAge] = useState(0);
    let [country,setCountry] = useState("");
    let [gender,setGender] = useState("");
    function getValue(event){
        event.preventDefault();
        axios.post("https://apiforuser.onrender.com/users",{
            firstname: first,
            lastname: last,
            username : username,
            password : password,
            email: email,
            phone: phone,
            age: age,
            country: country,
            gender: gender
        })
        myUrl("/Home");
    }
    return(
        <div className="pt-5 pb-3 pb-sm-0 px-2">
            <form onSubmit={(e)=>getValue(e)}>
                <div className="d-flex flex-column flex-sm-row gap-3 w-100 mb-4">
                    <div className="divInput">
                        <label className="mb-2">First Name :</label><br/>
                        <input type="text" name="first" className="form-control" required placeholder="Your First Name"
                        onInput={(e)=>setFirst(e.target.value)} />
                    </div>
                    <div className="divInput">
                        <label className="mb-2">Last Name :</label><br/>
                        <input type="text" name="last" className="form-control" required placeholder="Your Last Name" 
                        onInput={(e)=>setLast(e.target.value)}/>
                    </div>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-3 w-100 mb-4">
                    <div className="divInput">
                        <label className="mb-2">Username :</label><br/>
                        <input type="text" name="username" className="form-control" required placeholder="Your Username"
                        onInput={(e)=>setuser(e.target.value)} />
                    </div>
                    <div className="divInput">
                        <label className="mb-2">Password :</label><br/>
                        <input type="password" name="password" className="form-control" required placeholder="Your Password" 
                        onInput={(e)=>setpass(e.target.value)}/>
                    </div>
                </div>
                <div className="gap-3 w-100 mb-4 d-flex flex-column flex-sm-row">
                    <div className="divInput">
                        <label className="mb-2">Email :</label><br/>
                        <input type="email" name="email" className="form-control" required placeholder="Your Email" 
                        onInput={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="divInput">
                        <label className="mb-2">Telephone :</label><br/>
                        <input type="text" name="phone" className="form-control" required placeholder="Your Phone" 
                        onInput={(e)=>setPhone(e.target.value)}/>
                    </div>
                </div>
                <div className="gap-3 w-100 mb-4 d-flex flex-column flex-sm-row">
                    <div className="divInput">
                        <label className="mb-2">Age :</label><br/>
                        <input type="number" name="age" className="form-control" required placeholder="Your Age"
                        onInput={(e)=>setAge(e.target.value)} />
                    </div>
                    <div className="divInput">
                        <label className="mb-2">Country :</label><br/>
                        <input type="text" name="country" className="form-control" required placeholder="Your Country" 
                        onInput={(e)=>setCountry(e.target.value)}/>
                    </div>
                </div>
                <div className="w-100 mb-4">
                    <div className="divInput">
                        <label className="mb-2">Gender :</label><br/>
                        <select name="gender" className="form-select text-secondary" required 
                        onChange={(e)=>setGender(e.target.value)}>
                            <option hidden selected>Your Gender</option>
                            <option className="text-black">Male</option>
                            <option className="text-black">Female</option>
                        </select>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}