import ProductList from "@/components/ProductCard/ProductList";
import Image from "next/image";


export default async function Home({searchParams}: {searchParams: Promise<{category: string}>}) {
  const category = (await searchParams).category;
  return (
    <div>
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Product" fill/>
      </div>
      <ProductList category={category} params="homepage"/>
    </div>
  )
}
