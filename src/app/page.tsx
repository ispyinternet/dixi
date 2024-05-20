import { Metadata } from 'next'
// import Image from 'next/image'

// import { Button } from '@/components/ui/button'
import Footer from '@/components/Footer/Footer'
import CommunitySloganMask from '@/components/HeroSection/CommunitySlogan'
import HeroParallaxDixi from '@/components/HeroSection/HeroParallax'
import ProjectStory from '@/components/HeroSection/ProjectStory'
import Navbar from '@/components/Navbar/Navbar'

// import PageView from '@/components/page-view'
export const metadata: Metadata = {
  title: 'Dixi CTO 2.0',
  description: 'Dixi CTO of the CTO',
  icons: './dixi-icon.png',
}
export default function Home() {
  return (
    <>
      <main className=" bg-[#9394FE]">
        <Navbar></Navbar>
        <HeroParallaxDixi></HeroParallaxDixi>
        <div className="border-2">
          <div className="text-white text-4xl text-center py-20">
            <h1>$Dixi&apos;s Story</h1>
          </div>
          <ProjectStory></ProjectStory>
        </div>
        <CommunitySloganMask></CommunitySloganMask>
        <Footer></Footer>
      </main>
    </>
  )
}
