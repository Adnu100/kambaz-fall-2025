import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href="Signin"
        id="wd-account-signin"
        className="list-group-item active border-0 text-danger"
      >
        Signin
      </Link>
      <Link
        href="Signup"
        id="wd-account-signup"
        className="list-group-item active border-0 text-danger"
      >
        Signup
      </Link>
      <Link
        href="Profile"
        id="wd-profile"
        className="list-group-item active border-0 text-danger"
      >
        Profile
      </Link>
    </div>
  );
}
