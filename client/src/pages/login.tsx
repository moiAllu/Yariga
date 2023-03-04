import { useEffect, useRef } from "react";
import { useLogin } from "@pankod/refine-core";
import React from "react";
import {
  Container,
  Box,
  flexbox,
  bgcolor,
  Typography,
  display,
} from "@pankod/refine-mui";
import { yariga } from "assets";
import { CredentialResponse } from "../interfaces/google";
import { Input, Button, FormControl } from "@pankod/refine-mui";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []); // you can also add your client id as dependency here

    return <div ref={divRef} />;
  };
  const SingInForm = ({}) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [loginToggle, setLoginToggle] = React.useState(false);
    const { mutate: login } = useLogin();
    const FormSubmitHandler = async (e: any) => {
      e.preventDefault();
      const mode = loginToggle ? "signup" : "login";
      const credentials = { email, password, name, mode };
      login({ credentials });
      // console.log(credential);
    };

    return (
      <Box width="100%" height="100%" padding="10px" sx={{ width: "100%" }}>
        <Typography
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#0047AB",
          }}
        >
          {loginToggle ? "SignUp" : "SignIn"}
        </Typography>
        <form
          onSubmit={FormSubmitHandler}
          className="form"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "10px",
          }}
        >
          {loginToggle && (
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              id="name"
              type="text"
              style={{
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                width: "100%",
                backgroundColor: "#D8D8D8",
              }}
            />
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            id="email"
            type="text"
            style={{
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              width: "100%",
              backgroundColor: "#D8D8D8",
            }}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            id="password"
            type="password"
            style={{
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#D8D8D8",
              width: "100%",
            }}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyItems: "right",
              justifyContent: "right",
            }}
          >
            <Button
              type="button"
              onClick={() => setLoginToggle(!loginToggle)}
              sx={{
                border: "0px",
                backgroundColor: "#fcfcfc",
                bottom: "10px",
                fontSize: "12px",
                color: "#0047AB",
                textTransform: "none",
                "&:hover": {
                  background: "none",
                  textDecoration: "underline",
                },
              }}
            >
              {!loginToggle ? "Signup" : "Signin"}
            </Button>
          </Box>
          <Button
            type="submit"
            sx={{
              color: "#ffffff",
              bgcolor: "#0047AB",
              textTransform: "none",
              "&:hover": {
                background: "#3b62d9",
              },
            }}
          >
            {loginToggle ? "SignUp" : "SignIn"}
          </Button>
        </form>
      </Box>
    );
  };

  return (
    <Box component="div" sx={{ backgroundColor: "#fcfcfc" }}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img src={yariga} alt="Refine Logo" />
          </div>
          <Box mt={4}>
            <GoogleButton />
          </Box>
          <Box mt={2} width="100%">
            <SingInForm />
          </Box>
          <Box></Box>
        </Box>
      </Container>
    </Box>
  );
};
