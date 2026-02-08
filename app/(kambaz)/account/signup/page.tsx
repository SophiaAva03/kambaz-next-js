import Link from "next/link";
import { Form } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <Form.Control id="wd-username"
             placeholder="username"
             className="mb-2 w-25"/>
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className="mb-2 w-25"/>
      <Form.Control id="wd-password-confirm"
            placeholder="confirm password" type="password"
            className="mb-2 w-25"/>
      <Link id="wd-signin-btn"
            href="/account/profile"
            className="btn btn-primary mb-2 w-25">
            Sign up </Link> <br />
      <Link className="w-25" id="wd-signin-link" href="/account/signin">Sign in</Link>
    </div>
  );
}
