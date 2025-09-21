import React, { useState } from "react";
import NavBar from "./NavBar";
import { Eye, EyeOff } from 'lucide-react';
import { Key } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { usestate } from 'react'
const SignUp = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
        setError("");
        setSuccess("");
    }
    const handlePassword = () => {
        setShowPassword(!showPassword)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Password and Confirm Password do not match");
        } else {
            setError("");
            setSuccess("Account created successfully!");
            setFormData({
                fullName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
        }
    }
    return (
        <div className="bg-purple-100 min-h-screen gap-2 flex flex-col sm:gap-1 md:gap-4 3xl:gap-8">
            <NavBar />
            <div>
                <img src="C:\Users\Mern devastra\OneDrive\Desktop\gitbaba\mern-blog verse\blogverse\src\git.png" className="sm:w-24 md:w-48 3xl:w-64"/>
            </div>
            <div className="flex justify-center sm:px-2 md:px-8 3xl:px-16">
                <form onSubmit={handleSubmit} className="shadow-2xl gap-5 pt-7 pb-5 px-4 mb-5 bg-white w-1/2 flex flex-col justify-center items-center md:rounded-3xl sm:w-full md:w-2/3 3xl:w-1/2 sm:pt-2 md:pt-10 3xl:pt-20">
                    <div className="flex gap-3 w-[90%] sm:flex-col md:flex-row 3xl:flex-row sm:gap-1 md:gap-6 3xl:gap-12">
                        <div className="w-[50%] flex flex-col gap-2 sm:w-full md:w-1/2 3xl:w-1/2 sm:gap-1 md:gap-4 3xl:gap-8">
                            <p className="text-md text-gray-700 font-semibold sm:text-sm md:text-lg 3xl:text-2xl">Full Name</p>
                            <input
                                required
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="rounded-xl px-5 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500 sm:px-2 sm:py-2 md:px-6 md:py-3 3xl:px-10 3xl:py-6"
                                type="text"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="w-[50%] flex flex-col gap-2 sm:w-full md:w-1/2 3xl:w-1/2 sm:gap-1 md:gap-4 3xl:gap-8">
                            <p className="text-md text-gray-700 font-semibold sm:text-sm md:text-lg 3xl:text-2xl">Email Address</p>
                            <input
                                name="email"
                                value={formData.email}
                                required
                                onChange={handleChange}
                                className="rounded-xl px-5 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500 sm:px-2 sm:py-2 md:px-6 md:py-3 3xl:px-10 3xl:py-6"
                                type="text"
                                placeholder="Enter your email address"
                            />
                        </div>
                    </div>
                    <div className="flex w-[90%] gap-3 sm:flex-col md:flex-row 3xl:flex-row sm:gap-1 md:gap-6 3xl:gap-12">
                        <div className="w-[50%] flex flex-col gap-2 relative sm:w-full md:w-1/2 3xl:w-1/2 sm:gap-1 md:gap-4 3xl:gap-8">
                            <p className="text-md text-gray-700 font-semibold sm:text-sm md:text-lg 3xl:text-2xl">Password</p>
                            <div className="relative left-2">
                                <Key className="absolute left-2 top-4 text-amber-400" />
                                <input
                                    name="password"
                                    value={formData.password}
                                    autoComplete="new-password"
                                    required
                                    onChange={handleChange}
                                    className="rounded-xl px-12 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500 pr-12 relative right-2 sm:px-4 sm:py-2 md:px-8 md:py-3 3xl:px-16 3xl:py-6"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
                                />
                                <span
                                    className="absolute right-4 bottom-4 cursor-pointer sm:right-2 sm:bottom-2 md:right-6 md:bottom-6 3xl:right-10 3xl:bottom-10"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <Eye className="text-gray-400" /> : <EyeOff className="text-gray-400" />}
                                </span>
                            </div>
                        </div>
                        <div className="w-[50%] flex flex-col gap-2 relative sm:w-full md:w-1/2 3xl:w-1/2 sm:gap-1 md:gap-4 3xl:gap-8">
                            <p className="text-md text-gray-700 font-semibold sm:text-sm md:text-lg 3xl:text-2xl">Confirm Password</p>
                            <div className="relative">
                                <p><Key className="text-amber-400 absolute top-4 left-2.5" /></p> <input
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    required
                                    onChange={handleChange}
                                    className="rounded-xl px-10 py-4 w-full border border-gray-300 focus:outline-none focus:border-purple-500 pr-12 sm:px-2 sm:py-2 md:px-6 md:py-3 3xl:px-10 3xl:py-6"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm your password"
                                />
                                <span
                                    className="absolute right-4 top-4 cursor-pointer sm:right-2 sm:top-2 md:right-6 md:top-6 3xl:right-10 3xl:top-10"
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                >
                                    {showConfirmPassword ? <Eye className="text-gray-400" /> : <EyeOff className="text-gray-400" />}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg pl-5 items-center border-gray-300 flex border w-[90%] py-3 px-2 bg-gray-100 sm:pl-2 sm:py-1 sm:px-1 md:pl-8 md:py-4 md:px-4 3xl:pl-16 3xl:py-8 3xl:px-8">
                        <input required type="checkbox" className="h-5 w-5 sm:h-3 sm:w-3 md:h-6 md:w-6 3xl:h-10 3xl:w-10" /><p className="pl-3 text-gray-700 sm:pl-1 md:pl-6 3xl:pl-12">I agree to the Terms of Service and Privacy Policy</p>
                    </div>
                    {error && <p className="text-red-500 sm:text-xs md:text-base 3xl:text-xl">{error}</p>}
                    {success && <p className="text-green-500 sm:text-xs md:text-base 3xl:text-xl">{success}</p>}
                    {/* <div className=""> */}

                    <button type="submit" className="cursor-pointer w-[90%] flex justify-center py-5 text-white bg-purple-600 rounded-xl items-center gap-2 sm:py-2 md:py-4 3xl:py-8"><CircleUserRound className="sm:w-4 md:w-8 3xl:w-16" />
                        Create Account</button>
                    {/* </div> */}
                    <div className="border-[0.5px] my-5 w-[90%] text-gray-200 sm:my-2 md:my-8 3xl:my-16"></div>
                    <div className="flex flex-col items-center gap-3 w-[90%] sm:gap-1 md:gap-6 3xl:gap-12">
                        <div>
                            <p className="text-gray-600 sm:text-xs md:text-base 3xl:text-xl">Already have an account? <span className="text-purple-600 font-semibold sm:text-xs md:text-base 3xl:text-xl">Sign In Here</span> </p>
                        </div>
                        <div className="">
                            <button className="text-gray-600 p-4 hover:bg-gray-200 rounded-lg sm:p-2 md:p-6 3xl:p-12">Back to Home</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;