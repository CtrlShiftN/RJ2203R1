import { useNavigate } from "react-router-dom";

const Category = () => {
    const navigate = useNavigate();
    const sendDataToProduct = (e) => {
        // navigate(`/product/${e.target.value}`);
        navigate('/product', { state: { categoryID: e.target.value } });
    }
    return (
        <div className="container">
            <h2>Select a Category:</h2>
            <select defaultValue="default" onChange={e => sendDataToProduct(e)}>
                <option value="default" disabled hidden>
                    Choose your car
                </option>
                <option value="1">Honda</option>
                <option value="2">Suzuki</option>
                <option value="3">Yamaha</option>
            </select>
        </div>
    )
}
export default Category;