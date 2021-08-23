const Roughpage2 = () => {
    return ( 

         <div class="flex items-center flex-auto mb-6 p-6 bg-gray-50">
           <div class=" flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-2xl">
                <div class="flex flex-col overflow-y-auto md:flex-row">
                    {/* <div class="h-32 md:h-auto md:w-1/2"><img aria-hidden="true" class="object-cover w-full h-full" src="/assets/images/login-office.jpeg" alt="Office" /></div> */}
                     <main class="h-full flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div class="w-full ">
                            <div>
                                <h2 class="text-center text-3xl font-extrabold text-gray-900">Login</h2>
                            </div>
                            <form class="space-y-6">
                                <input type="hidden" name="remember" value="true" />
                                <div class="rounded shadow-sm -space-y-px">
                                    <div><label for="email-address"><span>Email address</span><input type="email" id="email-address" name="email" autoComplete="email" required="" class="mb-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" /></label></div>
                                    <div><label for="password"><span>Password</span><input type="password" id="password" name="password" autoComplete="current-password" required="" class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" /></label></div>
                                </div>
                                <div><button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button></div>
                            </form>
                        </div>
                   </main>
                </div>
            </div>
       </div>

     );
}
 
export default Roughpage2;