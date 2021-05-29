import styles from './app.module.scss';

import { Header } from '@my-org/shared-ui';

export function App() {
  return (
    <div className={styles.app}>
      <Header bucketMain={[<div>Hello</div>]} content={null} />
    </div>
  );
}

export default App;
