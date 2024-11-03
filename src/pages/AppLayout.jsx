import SideBar from "../components/SideBar/SideBar.jsx";
import styles from "../pages/AppLayout.module.css";
import Map from "../components/Map/Map.jsx";
import User from "../components/User/User.jsx";

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
