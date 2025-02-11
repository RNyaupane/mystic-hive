// import { useForm, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { signIn } from "next-auth/react";
// import { toast } from "react-toastify";
// import { useRouter } from "next/router";
// import Link from "next/link";

// const schema = yup.object().shape({
//   email: yup
//     .string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: yup.string().required("Password is required"),
// });

// const LoginNextAuth = () => {
//   const router = useRouter();
//   const {
//     control,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     const result = await signIn("credentials", {
//       redirect: false,
//       email: data.email,
//       password: data.password,
//     });

//     if (result?.error) {
//       toast.error(result.error);
//     } else {
//       toast.success("Login Successful");
//       router.push("/");
//     }
//   };

//   return (
//     <div className="tp-login-area">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <form
//               className="tp-accountWrapper"
//               onSubmit={handleSubmit(onSubmit)}
//             >
//               <div className="tp-accountInfo">
//                 <div className="tp-accountInfoHeader">
//                   <Link href="/">
//                     <img src="/assets/img/logo.png" alt="Logo" />
//                   </Link>
//                 </div>
//                 <div className="back-home">
//                   <Link className="tp-accountBtn" href="/">
//                     Back To Home
//                   </Link>
//                 </div>
//               </div>
//               <div className="tp-accountForm form-style">
//                 <div className="fromTitle">
//                   <h2>Login</h2>
//                   <p>Sign into your account</p>
//                 </div>
//                 <div className="row">
//                   <div className="col-lg-12">
//                     <Controller
//                       name="email"
//                       control={control}
//                       defaultValue=""
//                       render={({ field }) => (
//                         <div className="form-group mb-4">
//                           <label htmlFor="email">Email</label>
//                           <input
//                             type="text"
//                             id="email"
//                             {...field}
//                             placeholder="Enter email"
//                             className={`form-control ${
//                               errors.email ? "is-invalid" : ""
//                             }`}
//                           />
//                           {errors.email && (
//                             <div className="invalid-feedback">
//                               {errors.email.message}
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     />
//                   </div>

//                   <div className="col-lg-12">
//                     <Controller
//                       name="password"
//                       control={control}
//                       defaultValue=""
//                       render={({ field }) => (
//                         <div className="form-group mb-4">
//                           <label htmlFor="password">Password</label>
//                           <input
//                             type="password"
//                             id="password"
//                             {...field}
//                             placeholder="Enter your password"
//                             className={`form-control ${
//                               errors.password ? "is-invalid" : ""
//                             }`}
//                           />
//                           {errors.password && (
//                             <div className="invalid-feedback">
//                               {errors.password.message}
//                             </div>
//                           )}
//                         </div>
//                       )}
//                     />
//                   </div>

//                   <div className="col-lg-12">
//                     <div className="check-box-wrap">
//                       <div className="input-box">
//                         <input
//                           type="checkbox"
//                           id="rememberMe"
//                           name="rememberMe"
//                         />
//                         <label htmlFor="rememberMe">Remember Me</label>
//                       </div>
//                       <div className="forget-btn">
//                         <Link href="/auth/forgot-password">
//                           Forgot Password?
//                         </Link>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-12">
//                     <button
//                       type="submit"
//                       className="tp-accountBtn"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? (
//                         <span
//                           className="spinner-border spinner-border-sm mx-2"
//                           role="status"
//                         ></span>
//                       ) : (
//                         "Login"
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 <h4 className="or">
//                   <span>OR</span>
//                 </h4>

//                 <ul className="tp-socialLoginBtn">
//                   <li>
//                     <button
//                       className="w-auto px-3 btn btn-secondary"
//                       type="button"
//                       onClick={() => signIn("google")}
//                     >
//                       <span>
//                         <i className="fa fa-google"></i> &ensp; Login with
//                         Google
//                       </span>
//                     </button>
//                   </li>
//                 </ul>

//                 <p className="subText mt-1">
//                   Don&apos;t have an account?{" "}
//                   <Link href="/auth/register">Create free account</Link>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginNextAuth;
