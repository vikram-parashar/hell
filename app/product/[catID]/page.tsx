import SideImage from "@/components/products/sideImage";
import { createClient } from "@/supabase/utils/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CategoryType, ProductType } from "@/lib/types";
import ProductItem from "@/components/products/product-item";

type Params = Promise<{ catID: string }>
export default async function Page({ params }: {
  params: Params
}) {
  const supabase = createClient(cookies());
  const catID = (await params).catID

  /**** get categories ****/
  const categoriesRes = await supabase.from('categories').select().eq('id', catID).single()
  if (categoriesRes.error || !categoriesRes.data) {
    console.log(categoriesRes.error)
    redirect('/error')
  }
  const category: CategoryType = categoriesRes.data
  category.header_image = supabase.storage.from('images').getPublicUrl(category.header_image).data.publicUrl;
  category.header_image_mobile = supabase.storage.from('images').getPublicUrl(category.header_image_mobile).data.publicUrl;


  /**** get products ****/
  const productsRes = await supabase.from('products').select().eq('category_id', catID).order('updated_at', { ascending: false });
  if (productsRes.error) {
    console.log(productsRes.error)
    redirect('/error')
  }
  const products: ProductType[] = productsRes.data.map(item => ({
    ...item,
    image: supabase.storage.from('images').getPublicUrl(item.image).data.publicUrl
  }))

  return (
    <div className="px-5 w-screen overflow-hidden md:pt-12">
      <div className="flex items-center py-5">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {category.name}
        </h1>
      </div>
      <div className="hidden md:block">
        <SideImage link={category.header_image} />
      </div>
      <div className="md:hidden">
        <SideImage link={category.header_image_mobile} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-10">
        {products.map((item, index) =>
          <ProductItem item={item} key={index} />
        )}
      </div>
    </div>
  );
}
