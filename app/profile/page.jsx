'use client';

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/ProfileComp";

export default function ProfilePage() {
  const {data: session}  = useSession();
  const router = useRouter();

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const reponse = await fetch(`api/users/${session?.user.id}/posts`);
      const data = await reponse.json();

      setMyPosts(data);
    }

    if(session?.user.id) fetchPosts();
  }, [session?.user.id])

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`)
  }

  const handleDelete = async (post) => {
    const hasConfirmed = confirm('Are you sure you want to delete this?');

    if(hasConfirmed){
      try{
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: 'DELETE'
        })

        setMyPosts(myPosts.filter((p) => p._id !== post._id));
      } catch(error){
        console.log(error);
      }
    }
  }

  return (
    <Profile
      name={session?.user?.name || "User"}
      desc="Welcome to your profile"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}
