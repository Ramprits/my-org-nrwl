import { Header } from '@my-org/shared-ui';

import './home.module.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <Header
      bucketMain={[<h1>Welcome to home!</h1>]}
      content={{ user: 'Ramprit sahani' }}
    />
  );
}

export default Home;
