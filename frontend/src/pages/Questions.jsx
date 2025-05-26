import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'
import { Toaster } from "@/components/ui/sonner";
import QuestionSection from '../components/question/QuestionSection'

const Questions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex grow">
        <QuestionSection />
        <Toaster />
      </div>
      <Footer />
    </div>
  )
}

export default Questions