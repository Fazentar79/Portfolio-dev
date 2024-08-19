import { Section } from './Section';

export const Footer = () => {
  return (
    <footer className='bg-card'>
      <Section className='py-8'>
        <p className='text-sm text-muted-foreground'>©️Copyright {new Date().getFullYear()} Frédéric Hot</p>
      </Section>
    </footer>
  );
};
