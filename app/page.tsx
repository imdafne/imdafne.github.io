"use client"

import { Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HereinLandingPage() {
  return (
    <motion.div
      className="min-h-screen h-[100dvh] gradient-bg overflow-x-hidden flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <main className="flex-1 flex items-center justify-center px-8 py-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and slogan */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="space-y-4">
              <div className="relative w-full flex justify-center lg:justify-start">
                <div className="relative w-48 md:w-72 lg:w-96">
                  <Image 
                    src="/images/herein-logo.png" 
                    alt="此间 Herein" 
                    width={500}
                    height={200}
                    className="w-full h-auto drop-shadow-lg"
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl text-white/90 font-normal font-fangzheng">布置一个属于你的角落</h2>
              <p className="text-lg md:text-xl text-white/90 font-normal font-fangzheng max-w-md mx-auto lg:mx-0">
                个性化小组件，装点你的数字生活
              </p>
            </div>
          </motion.div>

          {/* Right side - Phone mockup and download button */}
          <motion.div
            className="flex flex-col items-center space-y-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* iPhone mockup with provided screen image */}
            <div className="relative">
              <div className="w-64 h-[500px] md:w-72 md:h-[580px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <Image 
                    src="/images/herein-app-screen.jpg" 
                    alt="此间应用界面" 
                    fill 
                    className="object-cover" 
                    priority
                    sizes="(max-width: 768px) 256px, 288px"
                    quality={90}
                  />
                </div>
              </div>
            </div>

            {/* Download button */}
            <a 
              href="https://apps.apple.com/app/id6751411153" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-normal rounded-xl font-fangzheng shadow-lg transition-colors"
            >
              <Download className="mr-2 h-5 w-5" />
              App Store 下载
            </a>
          </motion.div>
        </div>
      </main>

      <footer className="py-6 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="text-xs text-gray-500 font-fangzheng space-y-3">
            {/* Main links row */}
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
              <a href="/privacy-policy.html" className="hover:text-gray-400 transition-colors">
                隐私政策
              </a>
              <a href="/terms-of-service.html" className="hover:text-gray-400 transition-colors">
                用户协议
              </a>
              <a href="/youth-protection.html" className="hover:text-gray-400 transition-colors text-center">
                儿童/青少年个人信息保护规则
              </a>
              <a href="mailto:support@openwidget.net" className="hover:text-gray-400 transition-colors">
                联系我们
              </a>
            </div>
            
            {/* Copyright and ICP row */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-gray-400">
              <span>© 2025 Herein</span>
              <span className="hidden md:inline">·</span>
              <span>开若图科技（上海）有限公司</span>
              <span className="hidden md:inline">·</span>
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
                沪ICP备2025136576号-7A
              </a>
            </div>
          </div>
        </motion.div>
      </footer>
    </motion.div>
  )
}
