import mongoose from 'mongoose'

export const connectDB=async()=>{
  await mongoose.connect('mongodb+srv://sameenaaktharm:rahilamuzamill@cluster0.gu870.mongodb.net/food-delivery').then(()=> console.log("Db connected"));
}