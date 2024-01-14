import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(3000, (error) => {
    if (error) {
      console.error("Erro ao iniciar o servidor:", error);
    } else {
      console.log("Servidor iniciado na porta 3000");
    }
  });
  