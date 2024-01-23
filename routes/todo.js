import express from "express";

const router = express.Router();

router.get("/todo", (req, res) => {
  console.log(req.query.name);
  return res.status(200, "All ok here").json({ body: req?.query });
});

export default router;
