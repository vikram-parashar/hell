import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import OurCustomers from "@/components/home/Customers";
import { createClient } from "@/supabase/utils/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CarouselType, CategoryType, CustomerType } from "@/lib/types";
import Canvas from "@/components/home/Canvas";

export default async function Home() {
  const supabase = createClient(cookies());

  /**** get carousel links ****/
  const carouselRes = await supabase.from('carousels').select().order('updated_at', { ascending: false });;
  if (carouselRes.error || !carouselRes.data) {
    return <div className="text-center bg-black text-white h-screen flex justify-center items-center">Could not fetch Carousel data</div>
  }
  const carousels: CarouselType[] = carouselRes.data.map(item => ({
    ...item,
    image: supabase.storage.from('images').getPublicUrl(item.image).data.publicUrl
  }))

  /**** get categories ****/
  const categoriesRes = await supabase.from('categories').select().order('updated_at', { ascending: false });;
  if (categoriesRes.error || !categoriesRes.data) {
    return <div className="text-center bg-black text-white h-screen flex justify-center items-center">Could not fetch Categories data</div>
  }
  const categories: CategoryType[] = categoriesRes.data.map(item => ({
    ...item,
    thumbnail_image: supabase.storage.from('images').getPublicUrl(item.thumbnail_image).data.publicUrl,
  }))

  /**** get customers links ****/
  const customerRes = await supabase.from('customers').select().order('updated_at', { ascending: false });
  if (customerRes.error || !customerRes.data) {
    return <div className="text-center bg-black text-white h-screen flex justify-center items-center">Could not fetch Customer data</div>
  }
  const customers: CustomerType[] = customerRes.data.map(item => ({
    ...item,
    image: supabase.storage.from('images').getPublicUrl(item.image).data.publicUrl
  }))

  return (
      <div className="bg-transparent w-screen overflow-hidden relative">
        <Canvas />
        <Hero carousels={carousels} />
        <Categories categories={categories} />
        <OurCustomers customers={customers} />
        <Footer />
      </div>
  );
}
