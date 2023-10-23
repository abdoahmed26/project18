import axios from "axios";
import { useEffect, useState } from "react";
import { Link , useParams } from "react-router-dom";

export default function ViewDetails(){
    let { id } = useParams();
    let [user,setUser] = useState({});
    useEffect(()=>{
        axios.get(`https://apiforuser.onrender.com/users/${id}`)
        .then((res)=>setUser(res.data))
    },[id]);
    return(
        <div>
            <div className="py-4 px-2">
                <p className="text-secondary"><Link to={"/Home"}>Home</Link> 
                    <span className="text-capitalize mx-1">/ {user.firstname} {user.lastname}</span>
                </p>
                <p><span className="fw-semibold">Id : </span>{user.id}</p>
            </div>
            <div className=" px-1">
                <table className="border table table-striped w-100">
                    <tbody>
                        <tr>
                            <th className="border">First Name</th>
                            <td className="border">{user.firstname}</td>
                        </tr>
                        <tr>
                            <th className="border">Last Name</th>
                            <td className="border">{user.lastname}</td>
                        </tr>
                        <tr>
                            <th className="border">Username</th>
                            <td className="border">{user.username}</td>
                        </tr>
                        <tr>
                            <th className="border">Password</th>
                            <td className="border">{user.password}</td>
                        </tr>
                        <tr>
                            <th className="border">Email</th>
                            <td className="border">{user.email}</td>
                        </tr>
                        <tr>
                            <th className="border">Telephone</th>
                            <td className="border">{user.phone}</td>
                        </tr>
                        <tr>
                            <th className="border">Country</th>
                            <td className="border">{user.country}</td>
                        </tr>
                        <tr>
                            <th className="border">Gender</th>
                            <td className="border">{user.gender}</td>
                        </tr>
                        <tr>
                            <th className="border">Age</th>
                            <td className="border">{user.age}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}