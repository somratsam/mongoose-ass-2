import express from "express";
import { UserControllers } from "./user.controler";

const router = express.Router();

router.post("/users", UserControllers.createUser);
router.get("/users", UserControllers.getAllUsers);
router.get("/users/:userId", UserControllers.getSingleUser);
router.put("/users/:userId", UserControllers.updateUser);
router.delete("/users/:userId", UserControllers.deleteUser);
router.put("/users/:userId/orders", UserControllers.addOrder);
router.get("/users/:userId/orders", UserControllers.getSingleUserWithOrders);
router.get("/users/:userId/orders/total-price", UserControllers.getTotalPrice);
export const UserRoutes = router;
