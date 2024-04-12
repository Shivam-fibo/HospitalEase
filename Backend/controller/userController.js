import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { generateToken } from "../utils/jwtToken.js";

import cloudinary from "cloudinary";


export const patientRegister = catchAsyncErrors(async (req, res, next) => {
    const { firstName, lastName, email, phone, dob, gender, password, role } =
      req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !dob ||
      !gender ||
      !password ||
      !role
    ) {
      return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
    let user = await User.findOne({email});
    if(user){
        return next(new ErrorHandler("User already register!", 400));
    }
    user = await User.create({
        firstName, lastName, email, phone, dob, gender, password, role  
    })
    generateToken(user, "User Registered!", 200, res);

})
  

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password, confirmPassword, role } = req.body;
  if (!email || !password || !confirmPassword || !role) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  if (password !== confirmPassword) {
    return next(
      new ErrorHandler("Password & Confirm Password Do Not Match!", 400)
    );
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email Or Password!", 400));
  }

  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Email Or Password!", 400));
  }
  if (role !== user.role) {
    return next(new ErrorHandler(`User Not Found With This Role!`, 400));
  }
  generateToken(user, "User Registered!", 200, res);

});

// to  add a new admin

export const addNewAdmin = catchAsyncErrors(async(req, res, next) =>{
  const {firstName, lastName, email, phone, password,gender,dob} =
  req.body;
  if(!firstName || !lastName || !email || !phone || !password || !gender || dob){
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  const isRegistered = await User.findOne({email});
  if(isRegistered){
    return next(new ErrorHandler(`${isRegistered.role} this email is already exists!`, 400));
  }

})

export const getAllDoctors = catchAsyncErrors(async(req,res,next) =>{
  const doctors = await User.find()
})