"use client";
import authStore from "@/store/store";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    if (result) console.log(result);
    route.push("/");
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div>
          <h1 className="text-lg font-bold text-center pb-8">SIGN IN</h1>
          <form className="space-y-3">
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
              <Button
                fullWidth
                type="submit"
                variant="contained"
                onClick={handleSubmit}
              >
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
    </>
  );
};

export default Signin;
