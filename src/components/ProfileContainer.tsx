import { Suspense } from 'react';

import { ErrorBoundary } from './ErrorBoundary';
import { ProfileData } from './ProfileData';
import { SkeletonLoading } from './SkeletonLoading';

export function ProfileContainer(): JSX.Element {
  return (
    <ErrorBoundary>
      <Suspense fallback={<SkeletonLoading />}>
        <ProfileData />
      </Suspense>
    </ErrorBoundary>
  );
}
