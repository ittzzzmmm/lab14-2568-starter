import { type MarathonForm } from "../zod/MarathonSchema";
interface MarathonFormState {
  fname: string;
  lname: string;
  password: string;
  confirmPass: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  email: string;
  total: number;
  hasCoupon: boolean;
  couponCode: string;
    //Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPassword: (v:string) => void;
  setConfirmPass: (v: string)=>void; 
  setPlan: (v: MarathonForm["plan"]) => void;
  setGender: (v: MarathonForm["gender"]) => void;
  setEmail: (v: string) => void;
  setTotal:(v:number)=>void;
  setHasCoupon:(v:boolean)=>void;
  setCouponCode:(v:string)=>void;
  reset: () => void;
}
export type { MarathonFormState }