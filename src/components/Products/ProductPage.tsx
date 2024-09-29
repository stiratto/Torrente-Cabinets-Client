import { useLocation } from 'react-router-dom'


// interface ProductProps {
//     id: string,
//     imageUrl: string,
//     product_name: string,
//     product_price: string,
//     product_description: string,
// }

const ProductPage = () => {
    const location = useLocation()
    
    const {product} = location.state
    console.log(product)
    
    

    return (
        <main className='h-screen flex flex-col items-center justify-center'>
            <section className='flex gap-8 w-full container'>
                <aside>
                    <img src={product.imageUrl} alt="Product Image" className='max-w-4xl' />
                </aside>
                <aside>
                    <p className=''>{product.product_name}</p>
                </aside>
            </section>
        </main>
    )
}

export default ProductPage