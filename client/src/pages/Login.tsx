import Wrapper from "../assets/wrappers/Login"
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom"
import { auth, provider } from "../../firebase/firebaseConfig"
import { signInWithPopup } from "firebase/auth"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const email = localStorage.getItem('email')

function Login() {

    const navigate =  useNavigate();
    const [value, setValue] = useState<string | null>(email ? JSON.stringify(localStorage.getItem("email") as string) : null)
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user?.email)
            console.log(data)
            localStorage.setItem("email", data.user?.email as string)
        })
    }

    useEffect(() => {
        if(value){
            navigate("/product")
        }
    }, [value])
    return (
        <Wrapper>
            <div className="bg-white shadow-md flex w-[400px] px-8 py-8 h-fit flex-col relative top-[5rem] justify-center items-center rounded-lg">
                <div className="mb-5 font-bold text-[25px]">
                    Sign In
                </div>
                <input name="username" placeholder="username" className="pl-3 w-[100%] text-[12px] h-[38px] border-[1px] mb-5 border-[#d8d8d8] rounded-md"></input>
                <input name="password" placeholder="password" className="pl-3 w-[100%] text-[12px] h-[38px] border-[1px] border-[#d8d8d8] rounded-md"></input>
                <button className="w-[100%] h-[38px] bg-blue-500 text-[#fff] rounded-md mt-5 text-[15px]">Login</button>
                <div className="w-[100%] flex justify-end items-center mt-3">
                    <div className="text-[12px] mr-2 text-[#555555]">Not a member yet ? </div>
                    <Link to="/register" className="text-blue-500 text-[12px]">Register</Link>
                </div>
                <div className="relative items-center justify-center flex mt-5">
                    <div className="absolute z-[10] bg-white px-1 text-[12px] font-bold text-[#c3c3c3]">OR</div>
                    <div className="absolute bg-[#c3c3c3] w-[250px] h-[0.5px] "></div>
                </div>
                <div className="flex w-[100%] mt-5 border-[1px] border-[#8888] items-center justify-center rounded-md h-[38px]">
                    <FcGoogle className="text-[25px] mr-2" />
                    <button onClick={()=>{
                        handleClick()
                    }} className="text-[12px] font-bold">Sign In with Google</button>
                </div>
            </div>
        </Wrapper>
    )
}

export default Login
