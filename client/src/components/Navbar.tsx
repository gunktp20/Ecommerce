import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar bg-base-100 pt-0 pb-0 pl-[10%] pr-[10%]">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">MAT</a>
                <input className="bg-[#f1f1f1] rounded-[100px] w-[250px] h-[40px] text-[13px] pl-5" placeholder="คุณต้องการค้นหาสิ่งใด"></input>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">



                    <li className="text-[13px] flex items-center justify-center"><Link to="/login"><IoPerson className="text-[20px]" /> เข้าสู่ระบบ / สมัครสมาชิก</Link></li>

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
