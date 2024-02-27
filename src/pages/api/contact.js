import { transporter } from "@/lib/nodemailer";
import { mailOptions } from "@/lib/nodemailer";

export const handler=async (req, res)=> {
   
    if(req.method=="POST")
    {
        const data=req.body;
        try {
          await transporter.sendMail({
            ...mailOptions,
            subject:data.name,
            text:"Please Repair My Electronics Things",
            html:`<h4><span className="font-bold">Clients Email is :</span className="font-bold">${data.email}</h4><p><span className="font-bold">Clients Phone Number is :</span className="font-bold">${data.mobile}</p><p><span>Work he has :</span>${data.message}</p>`
          })
          return res.status(200).json({ success:true });
        } catch (error) {
          console.log(error);
          return res.status(400).json({message:error.message});
        }
    }
   return  res.status(400).json({message:"Bad Request"});
  }

  export default handler