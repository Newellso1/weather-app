export default function MenuItem({ cityName = "City Name", onClick }) {
  return <li onClick={onClick}>{cityName}</li>;
}
