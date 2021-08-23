import Head from 'next/head'
const About = () => {
    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            
            
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
               
                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <a
                        href=""
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">For Tutors &rarr;</h3>
                        <p className="mt-4 text-xl justify-center" >
                        Register and create your profile with skills, expertise and availability. Learners will be able to search for tutors based on skills and will be able to contact you and schedule online training with you . Happy Tutoring!..
                        </p>
                    </a>

                    <a
                        href=""
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">For Learners &rarr;</h3>
                        <p className="mt-4 text-xl">
                         After registering as a student, you will be able to search for tutors based on the skill and you will be able to schedule online lessons with your preferred tutor. Happy Learning!....                              
                        </p>
                    </a>

                    <a
                        href=""
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Connecting.. &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Whether you want help with Math, Science, Language, Music, Technology, Cooking, Art, Farming,.... 
                        </p>
                    </a>

                    <a
                        href=""
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Connecting.. &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Plumbing, Gardening, Fixing an autmobile (or) anything under the sun tutors are available to help you.
                        </p>
                    </a>
                </div>
            </main>

            
        </div>

     );
}
 
export default About;