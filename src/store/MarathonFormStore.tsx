import { create } from "zustand";
import { type MarathonFormState } from "../libs/Store";
export const useMarathonFormStore = create<MarathonFormState>((set) => ({
  fname: "",
  lname: "",
  password:"",
  confirmPass:"",
  plan: "funrun",
  gender: "male",
  email: "",
  total:500,
  hasCoupon:false,
  couponCode:"",
  setFname: (fname) =>
    set(() => ({
      fname: fname,
    })),
  setLname: (_lname) =>
    set(() => ({
      lname: _lname,
    })),

    setPassword: (_password)=>
      set(()=>({
        password:_password,
      })),

    setConfirmPass: (_confirmPass)=>
      set(()=>({
         confirmPass: _confirmPass, 
      })),

      setTotal: (_total)=>
        set(()=>({
          total: _total,
        })),

      setHasCoupon:(_hasCoupon)=>
        set(()=>({
          hasCoupon: _hasCoupon,
        })),

      setCouponCode:(_couponCode)=>
        set(()=>({
          couponCode: _couponCode,
        })),

  setPlan: (_plan) =>
    set(() => ({
      plan: _plan,
    })),
  setGender: (_gender) =>
    set(() => ({
      gender: _gender,
    })),
  setEmail: (_email) =>
    set(() => ({
      email: _email,
    })),
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  reset: () =>
    set({
      fname: "",
      lname: "",
      plan: "funrun",
      gender: "male",
      email: "",
    }),
}));
