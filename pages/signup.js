import React, { useState } from 'react'
import Link from 'next/link';
import Layout from '../src/components/Layout';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import { useAuth } from '../src/context/AuthContext'

export default function register() {
    const [isLoading, setIsLoading] = React.useState(false);
    const router = useRouter();
    const { user, signup } = useAuth()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData, { resetForm }) => {
          setIsLoading(true);
          if (formData.userPassword !== formData.userRepeatPassword) {
            console.log("Passwords don't match");
            toast.error("Passwords don't match");
          } else {
            signup(formData.userEmail, formData.userPassword)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                toast.success("User created successfully");
                resetForm({ values: "" });
                setIsLoading(false);
                router.push("/login");
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                toast.error(errorMessage);
                setIsLoading(false);
              }
            );
          }  
          resetForm({ values: "" });
          setIsLoading(false);
        },
      });

  return (
    <>
    <Layout>
    <main className="login-form m-4">
    <div className="cotainer">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group row mt-4">
                                <label for="email_address" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                <div className="col-md-6">
                                    <input type="text" id="email_address" className="form-control" 
                                    onChange={formik.handleChange}
                                    value={formik.values.userEmail}
                                    placeholder="Your Email" 
                                    name="userEmail"
                                    isInvalid={formik.errors.userEmail}
                                    required
                                    autofocus/>
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                <div className="col-md-6">
                                    <input type="password" id="password" className="form-control"
                                    onChange={formik.handleChange}
                                    value={formik.values.userPassword}
                                    isInvalid={formik.errors.userPassword}
                                    name="userPassword"
                                    required
                                    />
                                </div>
                            </div>

                            <div className="form-group row mt-4">
                                <label for="password" className="col-md-4 col-form-label text-md-right">Repeat Password</label>
                                <div className="col-md-6">
                                    <input type="password" id="password" className="form-control"
                                    onChange={formik.handleChange}
                                    value={formik.values.userRepeatPassword}
                                    isInvalid={formik.errors.userRepeatPassword}
                                    name="userRepeatPassword"
                                    required
                                    />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6 offset-md-4 mt-4">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"/> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 offset-md-4 mt-4">
                                <button type="submit" className="btn btn-primary">
                                   { isLoading ? 'Loading' : 'Register' }
                                </button>
                                <Link href="/login" className="btn btn-link">
                                    Do you have an account?
                                </Link>
                            </div>
                            </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</main>   
       </Layout> 
    </>
  );
}

function initialValues() {
    return {
      userEmail: "",
      userPassword: "",
      userRepeatPassword: "",
    };
  }
  
  function validationSchema() {
    return {
      userEmail: Yup.string().required(true),
      userPassword: Yup.string().required(true),
      userRepeatPassword: Yup.string().required(true),
    };
}
