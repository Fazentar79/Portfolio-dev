import { Badge } from '@/components/ui/badge';
import { Section } from './Section';
import { ReactLogo } from './icons/ReactLogo';
import { Code } from './Code';
import { TailwindLogo } from './icons/TailwindLogo';
import { OpenAiLogo } from './icons/OpenAiLogo';
import { Card } from '@/components/ui/card';

export const Skills = () => {
  return (
    <Section className='flex flex-col items-start gap-4'>
      <Badge variant={'outline'}>Skills</Badge>
      <h2 className='pb-2 text-3xl font-bold'>I love working on...</h2>
      <div className='flex gap-4 max-md:flex-col'>
        <Card className='flex flex-col gap-2 p-2'>
          <ReactLogo size={42} />
          <h3 className='text-2xl font-semibold tracking-tight'>React</h3>
          <p className='text-muted-foreground'>
            My main framework is <Code>React</Code>. I also <Code>Next.js</Code> as a backend and frontend framework.
          </p>
        </Card>
        <Card className='flex flex-col gap-2 p-2'>
          <TailwindLogo size={42} />
          <h3 className='text-2xl font-semibold tracking-tight'>Tailwind</h3>
          <p className='text-muted-foreground'>
            I can create <u>beautiful</u> application <i>in seconds</i> using <Code>TailwindCSS</Code>.
          </p>
        </Card>
        <Card className='flex flex-col gap-2 p-2'>
          <OpenAiLogo size={42} />
          <h3 className='text-2xl font-semibold tracking-tight'>Ai integration</h3>
          <p className='text-muted-foreground'>
            I am integration Ai in your applications to create a perfect <u>user experience</u>.
          </p>
        </Card>
      </div>
    </Section>
  );
};
