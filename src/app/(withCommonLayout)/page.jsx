
import Footer from '@/component/FooterPage'
import HeroSection from '@/component/HeroSection'
import ProductPage from '@/component/Products'
import ResponsiveCarousel from '@/component/Slider'
// import dynamic from 'next/dynamic';

// const Footer = dynamic(() => import('../component/Footer'), { ssr: false });

export default function Home() {
  return (
    <>
      <ResponsiveCarousel/>
      <ProductPage/>
      <ProductPage/>
      <ProductPage/>
      <ProductPage/>
      <ProductPage/>
      <HeroSection/>
    </>
  )
}
