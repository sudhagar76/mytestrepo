
export const  getStaticProps= async() => {

        const res=await fetch('https://jsonplaceholder.typicode.com/users');
        const data=await res.json();
       
        return {
            props:{Tobapicall:data}
        }
     
}
 


const Tobapicall = ({ Tobapicall }) => {
    return (
        <div>
            <h1>All users data</h1>

            {Tobapicall.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
           
            {Tobapicall.map(Tobapi => (
                <div key={Tobapi.id}>
                    <a>
                        <h3>{Tobapi.name}</h3>
                    </a>
                </div>

            ))}
        </div>
    );
}

export default Tobapicall;