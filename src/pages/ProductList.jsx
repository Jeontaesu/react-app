import { Link } from "react-router-dom";

const products = [
    { id: "1", name: "노트북" },
    { id: "2", name: "마우스" },
    { id: "3", name: "키보드" },
];

function ProductList() {
    return (
        <div>
            <h2>🛍️ 상품 목록</h2>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <Link to={`/products/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
