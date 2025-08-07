
import ProductList from '@/components/ProductCard/ProductList'

export default async function Products({searchParams}:{searchParams: Promise<{category: string}>}) {
    const category = (await searchParams).category;

    return (
        <div className=''>
            <ProductList category={category} params="products"/>
        </div>
    );
}