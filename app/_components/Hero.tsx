/* eslint-disable @next/next/no-img-element */
import { Code } from './Code';
import { Section } from './Section';
import { WebIcon } from './icons/WebIcon';

export const Hero = () => {
  return (
    <Section className='flex items-start gap-4 max-lg:flex-col'>
      <div className='flex w-full flex-[3] flex-col gap-2'>
        <h2 className='font-caption text-5xl font-bold text-primary'>Frédéric Hot</h2>
        <h3 className='font-caption text-3xl'>Web developer and creator</h3>
        <p className='text-base'>
          I love building ideas and sharing them with the world. I&apos;m passionate about{' '}
          <Code className='inline-flex items-center gap-1'>
            <WebIcon size={16} className='inline' />
            web development
          </Code>
          , design and technology.
        </p>
      </div>
      <div className='ml-auto flex-[2] max-md:m-auto'>
        <img src='./Avatar.png' alt='Frédéric Hot' className='h-auto w-full max-w-sm rounded-full max-md:w-56' />
      </div>
    </Section>
  );
};
