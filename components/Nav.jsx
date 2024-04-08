"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

export default function Nav() {
    const {data: session} = useSession();
    
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        async function settingProviders(){
            const response = await getProviders()

            setProviders(response)
        }
        settingProviders();
    }, [])

    return (
      <nav className='w-full flex-between mb-16 pt-4'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image src='/assets/images/logo.svg' alt='ramram' width={30} height={30} className='object-contain'/>
            <p className='max-md:hidden text-black font font-bold font-satoshi'>MPrompts - MonetizeForPrem</p>
        </Link>

        {/* Desktop Nav */}
        <div className='sm:flex hidden'>
            {session?.user ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/create-prompt" className='black_btn'>
                        Create Post
                    </Link>

                    <button type='button' onClick={() => signOut()} className='outline_btn'>
                        Sign Out
                    </button>

                    <Image
                        src={session?.user.image}
                        alt='avatar'
                        width={30}
                        height={30}
                        onClick={()=>{}}
                        className='rounded-full'
                    />
                </div>
            ) : (
            <>
                {providers && Object.values(providers).map((provider) => {
                    return (
                        <button
                            type='button'
                            key={provider.id}
                            onClick = {() => signIn(provider.id)}
                            className='black_btn'
                        >
                            Sign In
                        </button>
                    )
                })
                }
            </>)}
        </div>

        {/* Mobile Nav */}
        <div className='sm:hidden flex relative'>
            {session?.user ? (
                <div className='flex'>
                    <Image
                        src={session?.user.image}
                        alt='avatar'
                        width={30}
                        height={30}
                        onClick={()=> setToggleDropdown((prev) => !prev) }
                        className='rounded-full'
                    />

                    {toggleDropdown && (
                        <div className='dropdown'>
                            <Link href='/profile'
                                className='dropdown_link'
                                onClick={()=> setToggleDropdown(false)}
                            >
                                My Profile
                            </Link>
                            <Link href='/create-prompt'
                                className='dropdown_link'
                                onClick={()=> setToggleDropdown(false)}
                            >
                                Create Prompt
                            </Link>
                            <button
                                type='button'
                                onClick={() => {
                                    setToggleDropdown(false);
                                    signOut();
                                }}
                                className='mt-5 black_btn'
                            >
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
            ): (
            <>
                {providers && Object.values(providers).map((provider) => {
                    return (
                        <button
                            type='button'
                            key={provider.id}
                            onClick = {() => signIn(provider.id)}
                            className='black_btn'
                        >
                            Sign In
                        </button>
                    )
                })
                }
            </>
            )}
        </div>
      </nav>
    )
}