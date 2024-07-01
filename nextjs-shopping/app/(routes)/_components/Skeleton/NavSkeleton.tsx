import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const NavSkeleton: React.FC = () => {
 
  
  return (
    <div className='hidden lg:flex gap-10'>
      {Array.from({length:8}).map((_,index) => (
        <Skeleton key={index} className='h-6 w-6 ske-color' />
      ))}
    </div>
  );
}

export default NavSkeleton;
