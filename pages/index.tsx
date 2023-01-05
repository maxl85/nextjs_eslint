// import Image from 'next/image';
// import { Inter } from '@next/font/google';
import { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';

// const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(1);

  return (
    <>
      <main>
        <Htag tag="h1">Text</Htag>
        <Button appearance="primary" arrow="right">Button</Button>
        <Button appearance="ghost" arrow="right">Button</Button>
        <P size="l">Big</P>
        <P>Middle</P>
        <P size="s">Small</P>
        <Tag size="s">Small</Tag>
        <Tag size="m" color="red">Red</Tag>
        <Tag size="s" color="green">Green</Tag>
        <Tag color="primary">Primary</Tag>
        <Rating rating={3} />
        <Rating rating={rating} isEditable setRating={setRating} />
      </main>
    </>
  );
}
