import { LucideIcon, MessageCircleMore, Smile } from 'lucide-react';
import Link from 'next/link';

export const SIDE_PROJECTS: SideProjectsProps[] = [
  {
    Logo: MessageCircleMore,
    title: 'Rpg-Threads',
    description: 'A highly configurable text editor built to enable efficient text editing.',
    url: 'https://rpg-threads.web.app/',
  },
  {
    Logo: Smile,
    title: 'Jeu du pendu',
    description: 'A highly configurable text editor built to enable efficient text editing.',
    url: 'https://fazentar79.github.io/leJeuDuPendu/index.html',
  },
];

export type SideProjectsProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

export const SideProjects = (props: SideProjectsProps) => {
  return (
    <div>
      <Link href={props.url} className='inline-flex items-center gap-4 rounded p-1 transition-colors hover:bg-accent'>
        <span className='rounded-sm bg-accent p-3 text-accent-foreground'>
          <props.Logo size={16} />
        </span>
        <div>
          <p className='text-lg font-semibold'>{props.title}</p>
          <p className='text-sm text-muted-foreground'>{props.description}</p>
        </div>
      </Link>
    </div>
  );
};
