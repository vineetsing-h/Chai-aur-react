import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/vineetsing-h')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)})
    //         .catch(error => console.error('Error fetching data:', error));
    // }, [])
  return (
    <div className='text-center m-4 text-3xl bg-gray-600 text-white'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

export  const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vineetsing-h')
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return response.json()
}