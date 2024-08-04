import { Button, TextField } from "@mui/material";

const SignUp = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen px-3">
        <div>
          <h1 className="text-lg font-bold text-center pb-8">SIGN UP</h1>
          <form className="space-y-3">
            <TextField fullWidth required name="username" label="username" />
            <TextField
              fullWidth
              required
              name="email"
              label="email"
              type="email"
            />
            <TextField
              fullWidth
              required
              name="password"
              label="password"
              type="password"
            />
            <div>
              <Button fullWidth type="submit" variant="contained">
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
