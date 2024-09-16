import { Link } from "react-router-dom";


export default function ProductCard({
    brand,
    id,
    category,
    price,
})
{
    return (
        <tr data-testid="item" key={id}>
            <td>{id}</td>
            <td data-testid="brand" >
                <Link to={`/products/${id}`}>
                {brand}  
                </Link>
                
            </td>
            <td data-testid="category">
                {category}
            </td>
            <td data-testid="price">
                {price}
            </td>
            </tr>
    )
}
