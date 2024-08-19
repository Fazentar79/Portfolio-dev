import { Badge } from '@/components/ui/badge';
import { Section } from './Section';
import { ContactCard } from './ContactCard';

export const Contact = () => {
  return (
    <Section className='flex flex-col items-start gap-4'>
      <Badge variant={'outline'}>Contact me</Badge>
      <h2 className='pb-2 text-3xl font-bold'>I will be happy to work with you.</h2>
      <div className='flex w-full flex-1 gap-4 max-md:flex-col'>
        <ContactCard
          className='flex-1'
          image='./Avatar.png'
          mediumImage='/github.webp'
          name='Fazentar79'
          description='My GitHub profile'
          url='https://github.com/Fazentar79'
        />
        <ContactCard
          className='flex-1'
          image='./Avatar.png'
          mediumImage='/linkedin.png'
          name='Frédéric Hot'
          description='My LinkedIn profile'
          url='https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-hot-7b3b3b1b8/'
        />
        <ContactCard
          className='flex-1'
          image='./Avatar.png'
          mediumImage='/mail.webp'
          name='contact@hot-frederic.dev'
          description='Email me for any inquiries.'
          url='mailto:contact@hot-frederic.dev'
        />
      </div>
    </Section>
  );
};
