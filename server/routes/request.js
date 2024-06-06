import express from "express";
import { approveRequest, getRequests, makePayment, requestInitiation } from "../controllers/requestController.js";

const router = express.Router();

router.get("/get/all", getRequests);
router.post("/make", requestInitiation);
router.get("/approve/:id", approveRequest);
router.post("/donate", makePayment);

export default router;