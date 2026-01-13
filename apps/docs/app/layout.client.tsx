'use client';

import { useParams } from 'next/navigation';
import { type ReactNode, useId } from 'react';
 

export function Body({ children }: { children: ReactNode }): React.ReactElement {


  return <body>{children}</body>;
}


