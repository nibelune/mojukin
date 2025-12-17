import db from "./client.js";

export default {
  getHome: async (req, res) => {
    const result = await db.query(
      "SELECT * FROM message ORDER BY created_at DESC",
    );
    res.render("index", { messages: result.rows });
  },

  postMessage: async (req, res) => {
    const { content, author } = req.body;
    await db.query("INSERT INTO message (content, author) VALUES ($1, $2)", [
      content,
      author,
    ]);
    res.redirect("/");
  },
};
