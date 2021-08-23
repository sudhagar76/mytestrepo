import React from "react";
import { useState, useRef } from "react";

import { sql_query } from "./lib/db";

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

export default function Selectuserform(props) {
  console.log(".............1");
  const { posts } = props;
  console.log(posts);

  if (!posts) return <p>Something went wrong....</p>;
  return (
    <div class="h-screen  bg-white flex   justify-center mt-12">
      <div class="bg-white w-96 shadow-xl rounded p-5">
        <h2 class="text-center text-3xl font-extrabold text-gray-900">
          List Users
        </h2>

        <form class="space-y-6">
          <div>
            <table align="center">
              {
                // render posts here
                posts.map((item) => (
                  <>
                    <tr>
                      <td>
                        {" "}
                        <h2>{item.title}</h2>
                      </td>
                      <td>
                        <h2>{item.content}</h2>
                      </td>
                      <td>
                        <h2>
                          <button>Edit</button>
                        </h2>
                      </td>
                      <td>
                        <h2>
                          <button>Delete</button>
                        </h2>
                      </td>
                    </tr>
                  </>
                ))
              }
            </table>
          </div>
        </form>
      </div>
      {/* end the first form  */}
    </div>

    // <div>
    //   <h1>Welcome to the blog page.....</h1>
    //   {
    //     // render posts here
    //     posts.map((item) => (
    //       <>
    //         <h2>{item.title}</h2>
    //         <p>{item.content}</p>
    //         <br />
    //       </>
    //     ))
    //   }
    // </div>
  );
}
