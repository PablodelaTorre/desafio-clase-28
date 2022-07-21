import { Router } from "express";
import process from 'process'

const router = Router();

const proceso = [process.cwd(),process.pid,process.version,process.memoryUsage(),process.platform]

router.get("/", (req, res) => {
    
    res.send({proceso});
});


export default router;