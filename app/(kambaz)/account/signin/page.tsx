import Link from "next/link";
import { Form } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <Form.Control id="wd-username"
             placeholder="username"
             className="mb-2 w-25"/>
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className="mb-2 w-25"/>
      <Link id="wd-signin-btn"
            href="/account/profile"
            className="btn btn-primary mb-2 w-25">
            Sign in </Link> <br />
      <Link className="w-25" id="wd-signup-link" href="/account/signup">Sign up</Link>
    </div> 
    );
  }