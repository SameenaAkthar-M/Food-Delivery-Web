import { listorder, placeOrder, updateStatus, usersOrder } from "../controllers/orderController.js";
import express from 'express'
import authMiddleware from '../middleware/auth.js'

const orderRouter=express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/userorders",authMiddleware,usersOrder);
orderRouter.get("/list",listorder)
orderRouter.post("/status",updateStatus)

export default orderRouter;