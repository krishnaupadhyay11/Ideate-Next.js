'use client';

import { useState } from "react";
import Image from 'next/image'
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function PromptCard({ post, handleTagClick, handleEdit, handleDelete}) {
  const {data: session} = useSession();
  const pathName = usePathname();

  const [copiedIcon, setCopiedIcon] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(post.prompt);
    setCopiedIcon(true);
    setTimeout(() => {
      setCopiedIcon(false);
    }, 1100);
  }
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex flex-1 justify-start items-start gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi text-gray-900 font-semibold">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={copiedIcon ? 'assets/icons/tick.svg' : '/assets/icons/copy.svg'}
            width={12}
            height={12}
          />            
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p className="font-inter text-sm orange_gradient cursor-pointer max-w-[fit-content]" onClick={() => handleTagClick && handleTagClick(post.tag)}>#{post.tag}</p>

      {session?.user.id === post.creator._id && pathName === '/profile' && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p className="font-inter text-sm green_gradient cursor-pointer" onClick={handleEdit}>
            Edit
          </p>
          <p className="font-inter text-sm green_gradient cursor-pointer" onClick={handleDelete}>
            Delete
          </p>
        </div>
      )}
    </div>
  )
}