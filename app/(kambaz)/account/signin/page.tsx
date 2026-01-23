import Link from "next/link";
export default function Signin() {
 return (
   <div id="wd-signin-screen">
     <h3>Sign in</h3>
     <input placeholder="username" className="wd-username" value="John"/> <br />
     <input placeholder="password" type="password" className="wd-password" value="123"/> <br />
     <Link href="/dashboard" id="wd-signin-btn"> Sign in </Link> <br />
     <Link href="signup" id="wd-signup-link"> Sign up </Link>
   </div>
);}
