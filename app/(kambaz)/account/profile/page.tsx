import Link from "next/link";
import { Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form.Control id="wd-username"
             placeholder="username"
             className="mb-2 w-25"
             defaultValue="alice"/>
      <Form.Control id="wd-password"
             placeholder="password" 
             defaultValue="123"
             type="password"
             className="mb-2 w-25"/>
      <Form.Control id="wd-first-name"
             placeholder="first name"
             className="mb-2 w-25"
             defaultValue="Alice"/>
      <Form.Control id="wd-last-name"
             placeholder="last name"
             className="mb-2 w-25"
             defaultValue="Wonderland"/>
      <Form.Control className="mb-2 w-25"
            type="date" 
            id="wd-birth-date" 
            defaultValue="2000-01-21" />
      <Form.Control id="wd-student-email" 
            type="email" 
            className="mb-2 w-25"
            placeholder="Email" 
            defaultValue="a.wonderland@northeastern.edu"/>
      <Form.Select id="wd-user-type" className="mb-3 w-25">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
      </Form.Select>
      <Link id="wd-signout-btn"
            href="signin"
            className="btn btn-danger mb-2 w-25">
            Sign out </Link>
    </div>
  );
}
