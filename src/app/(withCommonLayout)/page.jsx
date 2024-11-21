
import BestSellerProducts from '@/component/BestSellerProducts'
import CategoryProducts from '@/component/CategoryProduct'
import FirstBar from '@/component/FirstBar'
import Footer from '@/component/FooterPage'
import HeroSection from '@/component/HeroSection'
import Marquee from '@/component/Marquee'
import MistryBox from '@/component/MistryBox'
import NewProductPage from '@/component/NewProductPage'
import ResponsiveFeaturePage from '@/component/ResponsiveFeaturePage'
import ResponsiveCarousel from '@/component/Slider'
// import dynamic from 'next/dynamic';

// const Footer = dynamic(() => import('../component/Footer'), { ssr: false });

export default function Home() {
  return (
    <>
    <FirstBar/>
    <Marquee/>
      <ResponsiveCarousel/>
      
      <ResponsiveFeaturePage/>
      <NewProductPage/>
      <BestSellerProducts/>
     <CategoryProducts/>
     <MistryBox/>
      <HeroSection/>
    </>
  )
}
