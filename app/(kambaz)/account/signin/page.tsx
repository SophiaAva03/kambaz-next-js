"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const signin = async () => {
    const user =  await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    redirect("/dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl id="wd-username"
            defaultValue={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            placeholder="username"
            className="mb-2 w-25"/>
      <FormControl id="wd-password"
            defaultValue={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            placeholder="password" type="password"
            className="mb-2 w-25"/>
      <Button onClick={signin}
            id="wd-signin-btn"
            className="btn btn-primary mb-2 w-25">
            Sign in </Button> <br />
      <Link className="w-25" id="wd-signup-link" href="/account/signup">Sign up</Link>
    </div> 
  );
}