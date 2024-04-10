"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";
import { get } from "mongoose";

export default function EditPrompt() {
  const router = useRouter();
  const { data: session } = useSession();
  const searchParams = useSearchParams();

  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });
  const promptId = searchParams.get('id');

  useEffect(() => {
    const getPromptDetails = async () => {
        const response = await fetch(`/api/prompt/${promptId}`)
        const data = await response.json();

        setPost({
            prompt: data.prompt,
            tag: data.tag
        })
    }
    if (promptId) getPromptDetails();
  }, [promptId])

  async function updatePrompt(e){
    e.preventDefault();
    setSubmitting(true);

    if(!promptId) return alert('Prompt ID not found')

    try{
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          tag: post.tag,
          prompt: post.prompt,
        })
      })

      if(response.ok){
        router.push('/');
      }
    } catch(error){
      console.log(error);
    } finally{
      setSubmitting(false);
    }
  }

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt} />
  )
}