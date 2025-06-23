'use client';

import { useState, useEffect } from 'react';
import { signIn, getProviders } from 'next-auth/react';

export default function SignIn({title}) {   
  const [providers, setProviders] = useState(null);

  useEffect(() => {  
      const settingProviders = async () =>{
          const response = await getProviders()

          setProviders(response)
      }
      settingProviders();
  }, [])
  return (
    <>
      {providers && Object.values(providers).map((provider) => {
          return (
            <button
              type='button'
              key={provider.id}
              onClick = {() => signIn(provider.id)}
              className='black_btn'
            >
              {title}
            </button>
          )
        })
      }
    </>
  )
}
