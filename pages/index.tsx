// import Image from 'next/image';
// import { Inter } from '@next/font/google';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

// const inter = Inter({ subsets: ['latin'] });

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(1);

  return (
    <>
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

    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
