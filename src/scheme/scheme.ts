import * as zod from "zod";
export const registerScheme = zod
  .object({
    name: zod
      .string("email must be string")
      .nonempty("name is required")
      .min(3, "name must be longer than 3 chars")
      .max(15, "name cant be more than 15 chars"),
    email: zod
      .email("Please enter a valid email address")
      .nonempty("email is required"),
    // password: zod.string("password required").regex(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z\d\W_]{8,}$/,

    //   "password must be >8 characters contains small, capital letters, numbers and symbols"
    // ),
    password: zod.string("password required").min(4),
    // rePassword: zod
    //   .string("password required")
    //   .regex(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z\d\W_]{8,}$/,
    //     "password must be >8 characters contains small, capital letters, numbers and symbols"
    //   ),
    rePassword: zod.string("Password required").min(4),
    phone: zod
      .string("phone number required")
      .regex(
        /^(?:\+20|20|0)(10|11|12|15)[0-9]{8}$/,
        "phone number must be valid"
      ),
  })
  .refine(
    (obj) => {
      return obj.password == obj.rePassword;
    },
    { path: ["rePassword"], error: "Password must match" }
  );

export const loginScheme = zod.object({
  email: zod.email("Please enter a valid email address"),
  // password: zod.string("password required").regex(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z\d\W_]{8,}$/,

  //   "password must be >8 characters contains small, capital letters, numbers and symbols"
  // ),
  password: zod.string("password is required").min(4),
});
export const forgetScheme = zod.object({
  email: zod.email("Please enter a valid email address"),
});
export const verifyCodeScheme = zod.object({
  email: zod.email("Please enter a valid email address"),
});
export const resetPasswordScheme = zod.object({
  email: zod.email("Please enter a valid email address"),
  // newPassword: zod.string("password required").regex(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z\d\W_]{8,}$/,

  //   "password must be >8 characters contains small, capital letters, numbers and symbols"
  // ),
  newPassword: zod.string("password is required").min(4),
});


export type RegisterType = zod.infer<typeof registerScheme>;
export type LoginType = zod.infer<typeof loginScheme>;
export type ForgetPasswordType = zod.infer<typeof forgetScheme>;
export type VerifyCodeType = zod.infer<typeof verifyCodeScheme>;
export type ResetPasswordType = zod.infer<typeof resetPasswordScheme>;
