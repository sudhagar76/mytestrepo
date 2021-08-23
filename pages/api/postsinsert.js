import { sql_query } from "../../lib/db";

const handler = async (req, res) => {
  try {
    console.log("function posts handler1");
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    console.log("function posts handler2" + req.body.firstname);
    console.log("function posts handler3" + req.body.lastname);
    const results = await sql_query(
      "insert into posts(title,content) values('" +
        firstname +
        "','" +
        lastname +
        "')"
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
