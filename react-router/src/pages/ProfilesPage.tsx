import { NavLink, Outlet } from "react-router-dom";
import "../index.css";

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>Profiles Page</h1>

      {profiles.map((profile) => (
        <NavLink
          key={profile}
          to={`/profiles/${profile}`}
          className={({ isActive }) => {
            return isActive ? "isActive" : "";
          }}
        >
          Profile {profile}
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
};

export default ProfilesPage;
