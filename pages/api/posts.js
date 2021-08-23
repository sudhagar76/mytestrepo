import { sql_query } from "../../lib/db";

const handler = async (_, res) => {
  try {
    console.log("function posts handler1");
    const results = await sql_query(
      ' SELECT * FROM posts ORDER BY title DESC  LIMIT 10 '
  );
  console.log("function posts handler2");
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;