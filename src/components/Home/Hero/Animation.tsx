import { Twitter } from 'lucide-react'
import React from 'react'

// const AnimatedCircle = () => {
  
// }

const Animation: React.FC = () => {
  return (
    <div className='relative'>
        <div className='size-[500px] rounded-full border-2 border-neutral-600 border-dashed relative animate-spin [animation-duration:_10s]'>
            <Twitter className='absolute top-[-14px] right-[50%] fill-background' />
            <Twitter className='absolute right-[-14px] top-[50%] fill-background' />
            <Twitter className='absolute bottom-[-14px] right-[50%] fill-background' />
            <Twitter className='absolute left-[-14px] top-[50%] fill-background' />
            
        </div>
        <div className='absolute top-[60%] size-[500px] bg-gradient-to-b from-background to-background rounded-full z-[2] blur-2xl'></div>
    </div>
  )
}

export default Animation