import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <Box
    component="form"
    sx={{
      "& > :not(style)": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"
    className="loginform"
  >
    <Typography
      variant="h5"
      noWrap
      component="span"
      sx={{
        flexGrow: 1,
        display: { xs: "block", sm: "block" },
        textAlign: "center",
      }}
    >
      Login
    </Typography>
    <TextField
      id="outlined-basic"
      variant="outlined"
      label="Email"
      multiline
      maxRows={2}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      // className={emptyFields.includes("title") ? "errorForm" : ""}
    />

    <TextField
      id="outlined-basic"
      variant="outlined"
      label="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      // className={emptyFields.includes("author") ? "errorForm" : ""}
    />
    <Button variant="contained" onClick={handleSubmit}>
      Submit
    </Button>
   
  </Box>
  );
};

export default Login;
