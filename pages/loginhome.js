import Link from 'next/link'
const Loginhome = () => {
    return (  
       <header>
            <div class="text-center bg-gray-300">
                A <span class="text-blue-600 hover:underline cursor-pointer text-lg tracking.wider">tutorsonboad</span> website for tutors and learners 
            </div>
            <div class="flex justify-end py-6 px-10">
               <div class="flex space-x-8">
                   <a href="" class="flex text-lg mt-2">About</a>
                   {/* <a href="" class="flex text-lg mt-2">Login</a> */}
                   <Link href="/login"><a class="flex text-lg mt-2">Login</a></Link>
                    <button class="py-3 px-6 bg-black text-white rounded-md text-bold">SignUp</button>
               </div>
             </div>
        </header>

    );
}
 
export default Loginhome;