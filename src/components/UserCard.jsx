export default function UserCard({ name, age }) {
    return (
        <div style={{ border: "1px solid #ccc", margin: "8px", padding: "12px" }}>
            <h3>{name}</h3>
            <p>나이: {age}</p>
        </div>
    );
}
