import React from 'react'
import { FiLink, FiCopy, FiCheck, FiGithub } from 'react-icons/fi';
import UrlForm from '../components/Url_form'

const HomePage = () => {
  return (
     <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="h-14 w-14 rounded-full bg-indigo-600 flex items-center justify-center">
              <FiLink className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold ml-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">QuickLink</h1>
          </div>
          
          <p className="text-gray-400 text-center mb-8">
            Shorten your URLs with just a click
          </p>

         <UrlForm/>
          
          
          
        
        
      </div>
    </div>
    </div>
  )
}

export default HomePage
