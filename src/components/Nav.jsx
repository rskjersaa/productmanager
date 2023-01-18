import {Link} from 'react-router-dom'

const Nav = () => {
    return (
    <div>
        <Link to={'/products/create'}>Add Product</Link>
        <Link to={'/products'}>Display Product</Link>
    </div>
    )
}

export default Nav