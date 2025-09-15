import { z } from "zod";

// Zod Schema
export const marathonSchema = z
  .object({
    fname: z
      .string()
      .min(3, { message: "First name must have at least 3 letters" }),
    lname: z.string().min(5, "Last name must have at least 5 letters"),
    password : z
      .string()
      .min(6,{ message: "“Password must contain at least 6 characters"})
      .max(12,{message: "Password must not exceed 12 characters"}),
    confirmPass : z
      .string(),
    plan: z.enum(["funrun", "mini", "half", "full"], {
      message: "Select a plan",
    }),
    gender: z.enum(["male", "female"], { message: "Select gender" }),
    agree: z.boolean().default(false),
    email: z.email(),
    total: z
      .number(),
    hasCoupon: z.boolean().default(false),
    couponCode: z.string().optional(),
    
  })
  .refine(
    (data) => {
      if (!data.hasCoupon) return true;
      return data.couponCode?.trim() === "CMU2025";
    },
    {
      message: "Invalid coupon code",
      path: ["couponCode"],
    }
  ).refine(
    (data) =>{
      if(data.password===data.confirmPass) return true;
      return false;
    },
    {
      message: "“Password does not match",
      path: ["confirmPass"],
    }
  );
export type MarathonForm = z.infer<typeof marathonSchema>;
