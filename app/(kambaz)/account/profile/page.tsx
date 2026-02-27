"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setCurrentUser } from "../reducer";
import { useRouter } from "next/navigation";
import { Form, Button } from "react-bootstrap";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Profile() {
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const [profile, setProfile] = useState<any>(currentUser || {});
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if (!currentUser) {
            router.push("/account/signin");
        }
    }, [currentUser, router]);

    const signout = () => {
        dispatch(setCurrentUser(null));
        router.push("/account/signin");
    };

    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            {profile && (
                <div>
                    <Form.Control
                        id="wd-username"
                        className="mb-2 w-25"
                        value={profile.username || ""}
                        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                    />
                    <Form.Control
                        id="wd-password"
                        className="mb-2 w-25"
                        value={profile.password || ""}
                        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                    />
                    <Form.Control
                        id="wd-first-name"
                        className="mb-2 w-25"
                        value={profile.firstName || ""}
                        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                    />
                    <Form.Control
                        id="wd-last-name"
                        className="mb-2 w-25"
                        value={profile.lastName || ""}
                        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                    />
                    <Form.Control
                        id="wd-birth-date"
                        className="mb-2 w-25"
                        type="date"
                        value={profile.dob || ""}
                        onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                    />
                    <Form.Control
                        id="wd-student-email"
                        className="mb-2 w-25"
                        value={profile.email || ""}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    />
                    <Form.Select
                        id="wd-user-type"
                        className="mb-3 w-25"
                        value={profile.role || "USER"}
                        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                    >
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </Form.Select>
                    <Button
                        onClick={signout}
                        className="w-25 mb-2"
                        id="wd-signout-btn"
                    >
                        Sign out
                    </Button>
                </div>
            )}
        </div>
    );
}