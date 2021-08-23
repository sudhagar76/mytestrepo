export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  // console.log("get static props")

  return {
    props: { UsersList: data },
  };
};

const Users = ({ UsersList }) => {
  //console.log("get Users")
  return (
    <div>
      {UsersList.map((user) => (
        <li key={user.id}>
          {user.id}-{user.name}
        </li>
      ))}
    </div>
  );
};

export default Users;
