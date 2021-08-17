import { FC } from 'react';
import { SWRConfig } from 'swr';

import { fetcher } from './utils/fetcher';

import { ProfileContainer } from './components/ProfileContainer';
import './App.css';

const App: FC = () => (
  <SWRConfig value={{ fetcher, suspense: true }}>
    <div className="App">
      <h1>Profile</h1>
      <ProfileContainer />
    </div>
  </SWRConfig>
)

export { App };
