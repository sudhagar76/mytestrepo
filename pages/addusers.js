function AddUsers() {
  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/postsupdate", {
      body: JSON.stringify({
        title: event.target.title.value,
        content: event.target.content.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    //console.log(result[0].title);
    console.log(result);
    // result.user => 'Ada Lovelace'
  };

  return (
    <form onSubmit={registerUser}>
      <label htmlFor="name">Name</label>
      <input
        id="title"
        name="title"
        type="text"
        autoComplete="title"
        required
      />
      <input
        id="content"
        name="content"
        type="text"
        autoComplete="content"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}
export default AddUsers;
