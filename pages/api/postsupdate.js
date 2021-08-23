import { sql_query } from "../../lib/db";

const handler = async (req, res) => {
  try {
    console.log("function posts handler1 update");
    // const firstname = req.body.firstname;
    // const lastname = req.body.lastname;
    // console.log("function posts handler2" + req.body.firstname);
    // console.log("function posts handler3" + req.body.lastname);

    const title = req.body.title;
    const content = req.body.content;
    console.log("function posts handler2 update title" + req.body.title);
    console.log("function posts handler3 update content" + req.body.content);
    const results = await sql_query(
      "update posts set content ='" + content + "' where title='" + title + "'"
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
