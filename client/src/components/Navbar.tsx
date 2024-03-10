import { IoPerson } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hook";
import { BsCart4 } from "react-icons/bs";

function Navbar() {

    const { user } = useAppSelector(state => state.auth)
    const navigate = useNavigate()

    return (
        <div className="navbar bg-base-100 pt-0 pb-0 pl-[10%] pr-[10%]">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">MAT</a>
                <input className="bg-[#f1f1f1] rounded-[100px] w-[250px] h-[40px] text-[13px] pl-5" placeholder="คุณต้องการค้นหาสิ่งใด"></input>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-[13px]  flex flex-row items-center justify-center">
                        <div className="text-[26px] relative" onClick={()=>{
                            navigate('/cart')
                        }}>
                        <BsCart4/>
                            <div className="bg-[#df7e0d] right-[1px] top-[3px] absolute w-[5px] h-[5px] rounded-[100%] flex items-center justify-center p-[10px] text-white text-[11.6px]">
                                1
                            </div>
                        </div>
                        {user ? <div className="">
                            {user.name} <img src={user.photoURL} className="object-fit rounded-[100%] w-[35px] h-[35px]"></img>
                        </div> : <Link to="/login"><IoPerson className="text-[20px]" /> เข้าสู่ระบบ / สมัครสมาชิก</Link>}
                    </li>

                    <li>
                        {/* <details>
                            <summary>
                                Parent
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details> */}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
