/* eslint-disable @next/next/no-img-element */
import { Card } from '@/components/ui/card';
import { Section } from './Section';
import { ContactCard } from './ContactCard';
import { SIDE_PROJECTS, SideProjects } from './SideProject';
import { Work, WORK } from './Work';

export const Status = () => {
  return (
    <Section className='flex items-start gap-4 max-md:flex-col'>
      <div className='w-full flex-[3]'>
        <Card className='flex w-full flex-col gap-2 p-4'>
          <p className='text-sm text-muted-foreground'>Side, fun projects.</p>
          <div className='flex flex-col gap-4'>
            {SIDE_PROJECTS.map((project, index) => (
              <SideProjects
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url='/'
              />
            ))}
          </div>
        </Card>
      </div>
      <div className='flex w-full flex-[2] flex-col gap-4'>
        <Card className='flex-1 p-4'>
          <p className='text-sm text-muted-foreground'>Work</p>
          <div className='flex flex-col gap-4'>
            {WORK.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className='flex flex-1 flex-col gap-2 p-4'>
          <p className='text-sm text-muted-foreground'>Contact me</p>
          <div className='flex flex-col gap-4'>
            <ContactCard
              image='./Avatar.png'
              mediumImage='https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png'
              name='Fazentar79'
              description='My GitHub profile'
              url='https://github.com/Fazentar79'
            />
            <ContactCard
              image='./Avatar.png'
              mediumImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrZxDgYd5oM0jwp54gIo2UiJIZ-7h8ppTtw&s'
              name='Frédéric Hot'
              description='My LinkedIn profile'
              url='https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-hot-7b3b3b1b8/'
            />
          </div>
        </Card>
      </div>
    </Section>
  );
};
