export default function ProductCard({name, price}) {
    
  return (
    <div className="wrap" style={{border: '1px solid #ddd', padding:'10px', marginBottom:'10px'}}>
        <h3>상품명: {name}</h3>
        <p>가격: {price.toLocaleString()}</p>
    </div>
  )
}