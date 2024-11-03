import { useCities } from "../../contexts/CitiesContext";

import CityListItem from "./CityListItem/CityListItem";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import styles from "./CityList.module.css";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message={"Add your first city"} />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityListItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
