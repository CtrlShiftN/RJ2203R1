
export default function Form(props) {
    // lấy thông tin theo id (props.id)
    // set vào state
    // handle các sự kiện thêm hoặc sửa


    const handleSubmit = (values) => {
        if (props.mode == 'edit') {
            // axios.put("http://localhost:3001/contact/" + e.target.id, { name: "Tuan2" });
        } else {
            // create
            // axios.post("http://localhost:3001/contact", { id: 3, name: "Tuan" });
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='submit'></input>
        </form>
    )
}