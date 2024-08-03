import { Button, TextField } from "@mui/material";
import Link from "next/link";

const Signin = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div>
          <h1 className="text-lg font-bold text-center pb-8">SIGN IN</h1>
          <form className="space-y-3">
            <TextField fullWidth name="email" label="email" type="email" />
            <TextField
              fullWidth
              name="password"
              label="password"
              type="password"
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
    </>
  );
};

export default Signin;
