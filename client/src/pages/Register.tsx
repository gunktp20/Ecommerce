import Wrapper from "../assets/wrappers/Login"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom"

function Register() {
    return (
        <Wrapper>
            <div className="bg-white shadow-md flex w-[400px] px-8 py-8 h-fit flex-col relative top-[5rem] justify-center items-center rounded-lg">
                <div className="mb-5 font-bold text-[25px]">
                    Sign Up
                </div>
                <input name="username" placeholder="username" className="pl-3 w-[100%] text-[12px] h-[38px] border-[1px] mb-5 border-[#d8d8d8] rounded-md"></input>
                <input name="password" placeholder="password" className="pl-3 w-[100%] text-[12px] h-[38px] border-[1px] border-[#d8d8d8] mb-5 rounded-md"></input>
                <input name="confirm_password" placeholder="confirm password" className="pl-3 w-[100%] text-[12px] h-[38px] border-[1px] mb-5 border-[#d8d8d8] rounded-md"></input>
                <button className="w-[100%] h-[38px] bg-blue-500 text-[#fff] rounded-md text-[15px]">Login</button>
                <div className="w-[100%] flex justify-end items-center mt-3">
                    <div className="text-[12px] mr-2 text-[#555555]">Have member already ?</div>
                    <Link to="/login" className="text-blue-500 text-[12px]">Login</Link>
                </div>
                <div className="relative items-center justify-center flex mt-5">
                    <div className="absolute z-[10] bg-white px-1 text-[12px] font-bold text-[#c3c3c3]">OR</div>
                    <div className="absolute bg-[#c3c3c3] w-[250px] h-[0.5px] "></div>
                </div>
                <div className="flex w-[100%] mt-5 border-[1px] border-[#8888] items-center justify-center rounded-md h-[38px]">
                    <FcGoogle className="text-[25px] mr-2"/>
                    <div className="text-[12px] font-bold">Sign Up with Google</div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Register
