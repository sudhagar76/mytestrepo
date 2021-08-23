import React from "react";
//import hello from "./api/hello";
// import postsinsert from "./api/postsinsert";
import { useForm } from "react-hook-form";
// import { sql_query } from "../lib/db";
const Loginform = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(("JESUS1"));
    console.log(watch("title")); // watch input value by passing the name of it
    console.log(("JESUS2"));
    return (
        <div class="h-screen  bg-white flex   justify-center mt-12">
            {/* <div class="h-screen bg-white flex flex-col space-y-10 justify-center items-center"> */}
            <div class="bg-white w-96 shadow-xl rounded p-5">
            <h2 class="text-center text-3xl font-extrabold text-gray-900">Login</h2>

                <form action="www.gmail.com" class="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="remember" value="true" />
                    <div class="rounded shadow-sm -space-y-px">
                        <div><label for="email-address"><span  class="font-bold">Email address</span>
                        <input type="email" id="email-address" name="email" autoComplete="email" 
                                class="mb-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address" 
                                {...register("email", {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })} /></label>
                      
                        {errors.email && errors.email.type === "required" && (
                                <div class="bg-blue-100  border-blue-500 text-blue-700 px-4 py-0" role="alert">
                                    <p class="font-bold">You must enter your email</p>
                                    <p></p>
                                    {/* <p class="text-sm">Some additional text to explain said message.</p> */}
                                </div>
                           // <span>You must enter your email</span>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                                <div class="bg-blue-100  border-blue-500 text-blue-700 px-4 py-1" role="alert">
                                    <p class="font-bold">Please enter valid email</p>
                                    {/* <p class="text-sm">Some additional text to explain said message.</p> */}
                                </div>

                                
                                
                            //<span> enter valid email</span>
                        )}
                       </div>

                        <div><label for="password"><span class="font-bold">Password</span>
                            <input type="password" id="password" name="password" autoComplete="current-password" required=""
                                class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                {...register("password", { required: true,minLength:6, maxLength: 15, pattern: /^[A-Za-z]+$/i })}

                            /></label>
                            {errors.password  && errors.password .type === "required" && (
                                <div class="bg-blue-100  border-blue-500 text-blue-700 px-4 py-0" role="alert">
                                    <p class="font-bold">You must enter your password</p>
                                    <p></p>
                                    {/* <p class="text-sm">Some additional text to explain said message.</p> */}
                                </div>
                           // <span>You must enter your email</span>
                        )}
                        {errors.password  && errors.password .type === "minLength" && (
                                <div class="bg-blue-100  border-blue-500 text-blue-700 px-4 py-1" role="alert">
                                    <p class="font-bold">Please enter morethan 6 characters</p>
                                    {/* <p class="text-sm">Some additional text to explain said message.</p> */}
                                </div>
                            //<span> enter valid email</span>
                        )}
                        {errors.password  && errors.password .type === "maxLength" && (
                                <div class="bg-blue-100  border-blue-500 text-blue-700 px-4 py-1" role="alert">
                                    <p class="font-bold">Maxium 15 characters only allowed</p>
                                    {/* <p class="text-sm">Some additional text to explain said message.</p> */}
                                </div>
                            //<span> enter valid email</span>
                        )}


                        </div>
                    </div>
                    <div class="">
                        <a href="#!" class="font-medium text-blue-900 hover:bg-blue-300 rounded-md p-2">Forgot Password ?</a>
                    </div>
                    <div><button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button></div>
                </form>



            </div>
        </div>

      );
}
 
export default Loginform;