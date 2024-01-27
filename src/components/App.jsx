import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection'
import TableSection from './Table/TableSection'
import TasksProvider from '../context/TaskContext'

export default function App() {
  return (
    <TasksProvider>
      <div className="bg-[#191D26] font-[Inter] text-white ">
        <Header />
        <HeroSection />
        <TableSection />
        <Footer />
      </div>
    </TasksProvider>
  )
}
