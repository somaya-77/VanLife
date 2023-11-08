import { useOutletContext } from "react-router-dom";

export default function Describ() {
    const currentVan = useOutletContext();
    console.log(currentVan.name)
  return (
    <div>
        <div className='defaultDetail'>
            <p><b>Name: </b>{currentVan.name}</p>
            <p><b>Category: </b>Simple</p>
            <p><b>Description: </b>{currentVan.description}</p>
            <p><b>Visibility: </b>Public</p>
          </div>
    </div>
  )
}
