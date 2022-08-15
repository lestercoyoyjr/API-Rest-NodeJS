import {Router} from "express";

const router=Router();

router.get("/", (request, response) =>{
    response.send("lesterprogramando");
})

export default router;