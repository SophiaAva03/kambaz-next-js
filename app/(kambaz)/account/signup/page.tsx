import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="wd-username" value="Jane"/><br/>
      <input placeholder="password" type="password" className="wd-password" value="qwerty"/><br/>
      <input placeholder="verify password"
             type="password" className="wd-password-verify" value="qwerty"/><br/>
      <Link  href="profile" > Sign up </Link><br />
      <Link  href="signin" > Sign in </Link>
    </div>
);}
