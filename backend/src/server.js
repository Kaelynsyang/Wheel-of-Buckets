import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes); // Able to duplicate to expand

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});