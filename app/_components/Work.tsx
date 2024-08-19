/* eslint-disable @next/next/no-img-element */
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const WORK: WorkProps[] = [
  {
    image: 'https://elsatriolet-louisaragon.vercel.app/_next/image?url=%2Flogo.png&w=128&q=75',
    title: 'Ecole Elsa Triolet-Louis Aragon',
    role: 'Website developer',
    date: '2024',
    url: 'https://elsatriolet-louisaragon.vercel.app',
    freelance: true,
  },
  {
    image: 'https://believemy.com/images/site/brand/believemyfirewhite.svg',
    title: 'Believemy',
    role: 'Student of Rocket',
    date: '2023-2024',
    url: 'https://believemy.com/',
    freelance: false,
  },
];

export type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};

export const Work = (props: WorkProps) => {
  return (
    <Link href={props.url} className='inline-flex items-center gap-4 rounded p-1 transition-colors hover:bg-accent'>
      <img src={props.image} alt={props.title} className='h-10 w-10 rounded-md object-contain' />
      <div className='mr-auto'>
        <div className='flex items-center gap-2'>
          <p className='text-lg font-semibold'>{props.title}</p>
          {props.freelance && <Badge variant='outline'>Mission</Badge>}
        </div>
        <p className='text-xs text-muted-foreground'>{props.role}</p>
      </div>
      <p className='text-end text-xs text-muted-foreground'>{props.date}</p>
    </Link>
  );
};
