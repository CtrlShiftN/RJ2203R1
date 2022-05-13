import { useParams, useNavigate, useLocation } from "react-router-dom";

const Product = () => {
    const { categoryID } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(navigate);
    console.log(location);
    return (
        <div>
            {/* <p>Category ID = {categoryID}</p> */}
            <p>categoryID = {location.state.categoryID}</p>
            <button onClick={(e) => { navigate(-1) }}>Back</button>
        </div>
    )
}
export default Product;