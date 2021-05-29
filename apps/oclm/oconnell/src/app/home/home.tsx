import { Header } from '@my-org/shared-ui';
import Home from '../../components/home/home';

import './home.module.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

export function HomePage(props: HomeProps) {
  return (
    <Header bucketMain={[<Home />]} content={{ user: 'Ramprit sahani' }} />
  );
}

export default HomePage;
