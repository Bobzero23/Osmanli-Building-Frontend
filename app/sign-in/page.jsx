"use client";
import authStore from "@/store/AuthStore";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Signin = () => {
  const route = useRouter();
  const login = authStore((state) => state.login);
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(formData);
    if (result) {
      toast.success("Logged in successfully!!");
      setTimeout(() => {
        route.push("/");
      }, 1000); // Adjust the delay time as needed
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-auto">
        <div>
          <h1 className="text-lg font-bold text-center pb-8">SIGN IN</h1>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="email"
              label="email"
              type="email"
              onChange={hanldeChange}
            />
            <TextField
              fullWidth
              name="password"
              label="password"
              type="password"
              onChange={hanldeChange}
            />
            <div>
              <Button fullWidth type="submit" variant="contained">
                SIGNIN
              </Button>
            </div>
          </form>
          <div className="mt-4">
            <span>Don't have an account? </span>
            <Link href="/sign-up" className="text-blue-700">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Signin;
