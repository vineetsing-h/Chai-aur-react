import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config'

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts([])  // optionally pass queries here
            .then((fetchedPosts) => {
                if (fetchedPosts) {
                    setPosts(fetchedPosts)  // already cleaned in getPosts()
                }
            })
            .catch((error) => {
                console.error("Error fetching posts:", error)
            })
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full md:w-1/2 lg:w-1/4'>
                            <PostCard {...post} /> {/* updated if PostCard accepts props directly */}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
