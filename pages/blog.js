import { sql_query } from "../lib/db";

export default function Blog(props) {
  console.log(".............1");
  const { posts } = props;
  console.log(posts);

  if (!posts) return <p>Something went wrong....</p>;
  return (
    <div>
      <h1>Welcome to the blog page.....</h1>
      {
        // render posts here
        posts.map((item) => (
          <>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <br />
          </>
        ))
      }
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    console.log("..........2");
    const result = await sql_query(`
          SELECT * FROM posts
          ORDER BY title DESC
          LIMIT 10
      `);

    let posts = JSON.parse(JSON.stringify(result));

    return {
      props: { posts }, // will be passed to our blog page component as props
    };
  } catch (e) {
    return { props: { posts: false } };
  }
}
