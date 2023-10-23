import { useEffect, useState} from 'react';
import axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export default function Table(){
    let [user, setUser] = useState([]);
    let [name, setName] = useState("");
    let view = useNavigate()
    useEffect(()=>{
        getUser();
    },[])
    function getUser(){
        axios.get("https://apiforuser.onrender.com/users")
        .then((res)=> res.data)
        .then((data)=>{
            setUser(data)
        })
    }
    function deleteUser(ele){
        Swal.fire({
            title: `Do you want delete user ${ele.firstname} ${ele.lastname} ?`,
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://apiforuser.onrender.com/users/${ele.id}`)
                .then((res)=> getUser());
            }
        })
    }
    return(
        <div className="px-1 pt-5 pb-2">
            <div className='mb-3 px-2'>
                <form>
                    <label className='fw-semibold mb-1 myFonSi'>Search By Name : </label><br/>
                    <input type="search" name="search" placeholder="Search By Name" onInput={(e)=>setName(e.target.value)}
                    className='form-control divInput' />
                </form>
            </div>
            <div className='myTable'>
                <table className="text-center border table table-striped">
                    <thead>
                        <th className="border">Id</th>
                        <th className="border">Full Name</th>
                        <th className="border">Gender</th>
                        <th className="border">Country</th>
                        <th className="border">Age</th>
                        <th className="border">Email</th>
                        <th className="border">Action</th>
                    </thead>
                    <tbody>
                    {
                            user.length > 0 ?
                                user.map((ele)=>{
                                    return (
                                        ele.firstname.includes(name) ||  ele.lastname.includes(name) ?
                                        <tr key={ele.id}>
                                            <td className="border">{ele.id}</td>
                                            <td className="border text-capitalize">{ele.firstname} {ele.lastname}</td>
                                            <td className="border text-capitalize">{ele.gender}</td>
                                            <td className="border text-capitalize">{ele.country}</td>
                                            <td className="border">{ele.age}</td>
                                            <td className="border">{ele.email}</td>
                                            <td className="border">
                                                <buttton onClick={()=>view(`/Home/ViewDetails/${ele.id}`)}
                                                className="btn btn-primary me-1 p-1 px-2 size" title="View Details">
                                                    <i className="fa-regular fa-eye"></i>
                                                </buttton>
                                                <buttton onClick={()=>view(`/Home/EditUser/${ele.id}`)}
                                                className="btn btn-primary me-1 p-1 px-2 size" title="Edit User">
                                                    <i className="fa-solid fa-pencil "></i>
                                                </buttton>
                                                <buttton onClick={()=> deleteUser(ele)}
                                                className="btn btn-danger p-1 px-2 size" title="Delete User">
                                                    <i className="fa-regular fa-trash-can "></i>
                                                </buttton>
                                            </td>
                                        </tr>
                                        : null
                                    )
                                }) : <tr><td colSpan={7} className='text-center'><div class="d-flex justify-content-center">
                                    <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
                                    </div>
                                    </td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}