import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from "react-router-dom"

function PostCard({ $id, title, featuredImage }) {
  const preview = appwriteService.getFileView(featuredImage)

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          {preview ? (
            <img src={preview.href} alt={title} className='rounded-xl' />
          ) : (
            <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-xl text-gray-500">
              No Image
            </div>
          )}
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
