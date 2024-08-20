import express from "express";

const app = express();

//.routes.
//.Http: .Methods: .get, .post, .put, .delete, .patch
app.get("/", (req, res)=>{
    res.json({message: "Welcome to elib api"})
})

export default app;