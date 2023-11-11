import { Link } from "react-router-dom";


export default function Error() {
  return (
    <div className="error">
      <p>Sorry, the page you were looking for was not found!</p>
      <Link to="/">Return to home</Link>
    </div>
  )
}
