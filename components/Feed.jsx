'use client';

import { useState, useEffect, useContext } from 'react';

import PromptCard from './PromptCard';
import { MyContext } from './Context';
import SignIn from './SignIn';

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([])

  const {sessionOn} = useContext(MyContext);

  function handleSearchChange(e){
    if (e.target.value !== '') {
      const filteredPosts = posts.filter(post => 
        post.tag.toLowerCase().includes(e.target.value.toLowerCase()) ||
        post.creator.username.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setPosts(filteredPosts);
    }
    else {
      setPosts(allPosts);
    }
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const reponse = await fetch('api/prompt');
      const data = await reponse.json();

      setPosts(data);
      setAllPosts(data);
    }

    fetchPosts();
  }, [])

  return (
    <section className='feed'>
      {!sessionOn && (
        <div className='flex items-center justify-center gap-4 md:gap-8'>
          <SignIn title="Get Started"/>
          
          <a href='#how-it-works' className='text-gray-500 black_btn bg-slate-300 text-2xl'>How It Works</a>
        </div>
      )}
      {sessionOn && (
        <form className='relative w-full flex-center'>
        <input
          type="text"
          placeholder="Search for a tag or username"
          onChange={handleSearchChange}
          required
          className="search_input peer max-w-[600px]" 
        />
      </form>
      )}
      

      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
      />

      <div id='how-it-works' className='mt-10 w-full flex flex-col p-4 items-start justify-center gap-8'>  
        <h1 className='head_text text-center'>
          How It Works
        </h1>      
        <h2 className='text-[20px] font-semibold text-center'>1. Sign in with your Google account.</h2>
        <h2 className='text-[20px] font-semibold text-center'>2. Add and Save your Ideas .</h2>
        <h2 className='text-[20px] font-semibold text-center'>3. Share them with your community and collaborate.</h2>
      </div>

    </section>
  )
}
