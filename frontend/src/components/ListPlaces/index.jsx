import "./ListPlaces.css";
export const ListPlace = ({ places = [] }) => {
  return (
    <ul>
      {places.length > 0 &&
        places.map((place) => (
          <li key={place.id}>
            {place.displayName.text},{" "}
            <span className="address">{place.formattedAddress}</span>,
            <span className="rate">
              {place.rating}
              /5
            </span>
          </li>
        ))}
    </ul>
  );
};
