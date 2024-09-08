import React from 'react'

function Card({ title, description, imageUrl, linkUrl }) {

  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      
        <img className="w-full" src={!imageUrl ? 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' : imageUrl} alt={title} />
      
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{!title ? 'No title is available please visit site' : title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      {linkUrl && (
        <div className="px-6 pt-4 pb-2">
          <a
            href={linkUrl}
            className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-600 "
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      )}
    </div> 
    </>
  )
}

export default Card
