

export default function ProductCard({
    brand,
    category,
    price,
    id
})
{
    return (
        <tr data-testid="item" key={id}>
            <td>{id}</td>
            <td data-testid="brand" >
                <img src={brand.img}  />  
//     add Link here and keep the data-testid="brand" on Link tag      
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
