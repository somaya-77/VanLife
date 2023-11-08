import { useOutletContext } from "react-router-dom";

export default function Photos() {
  const currentVan = useOutletContext();
  return (
    <div className='defaultDetail'>
       <img src={currentVan.imageUrl} width={105}/>
    </div>
  )
}
