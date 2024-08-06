"use client";
import authStore from "@/store/store";
import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const route = useRouter();
  const signup = authStore((state) => state.signup);

  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signup(formData);
    if (result) console.log(result);
    route.push("/");
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen px-3">
        <div>
          <h1 className="text-lg font-bold text-center pb-8">SIGN UP</h1>
          <form className="space-y-3">
            <TextField
              fullWidth
              required
              name="username"
              label="username"
              onChange={handleChange}
            />
            <TextField
              fullWidth
              required
              name="email"
              label="email"
              type="email"
              onChange={handleChange}
            />
            <TextField
              fullWidth
              required
              name="password"
              label="password"
              type="password"
              onChange={handleChange}
            />
            <div>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                onClick={handleSubmit}
              >
                REGISTER
              </Button>
            </div>
          </form>
          <div>
            <span>Already have an account? </span>
            <Button>signin</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
