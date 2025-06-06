import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'
import { Account } from 'appwrite';
import { Query } from 'appwrite';

function Home() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUserPosts() {
      try {
        const account = new Account(appwriteService.client)
        const user = await account.get()
        const userId = user.$id

        const userPosts = await appwriteService.getPosts([
          Query.equal("status", "active"),
         // Query.equal("userId", userId)
        ])

        setPosts(userPosts || [])
      } catch (error) {
        console.error("Error fetching user posts:", error)
        setPosts([])
      } finally {
        setLoading(false)
      }
    }
    fetchUserPosts()
  }, [])

  if (loading) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <h1 className="text-2xl font-bold">Loading posts...</h1>
        </Container>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <h1 className="text-2xl font-bold hover:text-gray-500">Login to read posts</h1>
        </Container>
      </div>
    )
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home
