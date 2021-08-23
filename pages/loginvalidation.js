
import React from "react";
import { useForm } from "react-hook-form"

const Loginvalidation = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(("JESUS1")); 
      console.log(watch("title")); // watch input value by passing the name of it
    console.log(("JESUS2")); 
    return ( 

        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
           <p> UserName :<input  type="text"  name="title"  id="title"  {...register("title", { required: true })} />
            {errors.title && <span>This title field is required</span>} </p>
            
            <p> FirstName :<input {...register("firstName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i  })} />
                {errors.firstName && <span>This field is required</span>}
            </p>
            <p>LastName:<input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
            {errors.lastName && <span>This field is required</span>}
            </p>
            {/* <p> Age:<input type="number" {...register("age", {required: true, min: 18, max: 99 })} />
            {errors.age && <span>This field is required</span>}
            </p> */}

            <p> Age:<input type="number" {...register("age", { required: { value: true, message: "You must enter your age" },
              min: { value: 18, message: "You must be at least 18" }, 
              max: { value: 99, message: "You must be at less  99" }, 
              })} />
                {errors.age && errors.age.message}
            </p>




            {/* <p>
                <label>Email</label>
                <input
                    type="text"
                    {...register("email", {
                        required: true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}
                />
                 {errors.email && errors.email.type}
            </p> */}

            <p>
                <label>Email</label>
                
                <input
                    type="text"
                    {...register("email", {
                        required: true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                    })}
                />
                {errors.email && errors.email.type === "required" && (
                    <span>You must enter your email</span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                     <span> enter valid email</span>
                )}
            </p>

            <input type="submit" />
        </form>
     );
}
 
export default Loginvalidation;