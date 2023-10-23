import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myImg from "../myphoto.jpg";

export default function Aside(){
    let myUrl = useNavigate();
    function changeUrl(url){
        myUrl(url);
    }
    const [colorHome,setColor] = useState("rgba(13,110,253)");
    const [colorAdd,setColorAdd] = useState("inherit");
    return (
        <div className="bg-dark text-white side py-4 px-3">
            <div className="title pb-2 border-bottom border-secondary">
                <h2 className="fw-medium fs-4 text-center text-md-start align-items-center"><i className="fa-solid fa-bolt"></i>
                <span className="ms-3">Sidebar</span></h2>
            </div>
            <div className="pt-3">
                <ul className="list-unstyled">
                    <li onClick={()=>{setColor("rgba(13,110,253)"); setColorAdd("inherit"); changeUrl("/Home")}}
                    className="mb-2 p-2 px-3 rounded-2" style={{backgroundColor:`${colorHome}`}}>
                        <Link className="text-white text-decoration-none">
                        <i className="fa-solid fa-house-chimney"></i>
                        <span className="ms-3">Home</span></Link>
                    </li>
                    <li onClick={()=>{setColor("inherit");setColorAdd("rgba(13,110,253)");changeUrl("/Home/AddCutomer")}} 
                    className="p-2 px-3 rounded-2" style={{backgroundColor:`${colorAdd}`}}>
                        <Link className="text-white text-decoration-none">
                        <i className="fa-regular fa-circle-user"></i>
                        <span className="ms-3">Add Customers</span></Link>
                    </li>
                </ul>
            </div>
            <div className="myposition">
                <div className="py-2 border-top border-secondary w-100">
                    <Link to="http://www.linkedin.com/in/abdo-ahmed-67185a28a" className="text-white text-decoration-none" target="_blank">
                        <img className="myImg rounded-circle me-0 me-md-2" src={myImg} alt="" />
                        <span className="fw-semibold">Abdulrahman</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}