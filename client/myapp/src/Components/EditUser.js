import { useParams } from "react-router-dom";

const EditUserComp = () => {

  const params = useParams()

  return (
    <div>
      <h4>EditUserComp {params.id}</h4>
    </div>
  )
}

export default EditUserComp;