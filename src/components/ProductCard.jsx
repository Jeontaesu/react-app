export default function ProductCard({ name, price }) {
    return (
        <div>
            <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
                <p>상품명: {name}</p>
                <p>가격: {price.toLocaleString()}원</p>
            </div>
        </div>
    );
}
