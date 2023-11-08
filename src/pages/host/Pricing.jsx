import { useOutletContext } from "react-router-dom";

export default function Pricing() {
  const currentVan = useOutletContext();
  return (
    <div className='defaultDetail'>
      <p><b style={{fontSize: "24px"}}>${currentVan.price}</b>/day</p>
    </div>
  )
}
