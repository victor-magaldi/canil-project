import {Router} from "express"

const router = Router()

router.get("/teste", function (req, res) {
  res.render("teste", { name: "Victor de Souza Magaldi" });
});

export {router}