import express from 'express'
import {patientRegister, login,addNewAdmin} from "../controller/userController.js"
import { isAdminAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post('/patient/register',  patientRegister  )
router.post('/login', login)
router.post('/admin/addnew', isAdminAuthenticated, addNewAdmin)


export default router