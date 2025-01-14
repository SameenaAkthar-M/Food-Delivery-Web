import orderModel from "../models/orderModel.js";
import userModel from "../models/usermodel.js";

// placing user order from frontend
const placeOrder=async(req,res)=>{
  const frontendUrl="http://localhost:5173";
  try{
    const newOrder=new orderModel({
      userId:req.body.userId,
      items:req.body.items,
      amount:req.body.amount,
      address:req.body.address
    })
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
    res.json({success:true,message:"Order placed Successfully!"})
  }
  catch(error){
    console.log(error);
    res.json({success:false,message:"Error"});
  }
}

export {placeOrder};