import { Component, ReactNode } from 'react';
import { cache } from 'swr';

import { GITHUB_PROFILE_API } from '../../services/api';

import { ConfusedIcon } from '../ConfusedIcon';
import { SkeletonLoading } from '../SkeletonLoading';

import './index.css';

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

export class ErrorBoundary extends Component {
  state: State;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    
    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  handleClick(): void {
    cache.delete(GITHUB_PROFILE_API);
    this.setState({ hasError: false });
  }

  componentDidMount(): void {
    this.setState({ ...this.state, firstRender: false });
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (!hasError) {
      return children;
    }

    return (
      <div className="ProfileErrorBoundary" onClick={this.handleClick}>
        <div className="info">
          <ConfusedIcon />
          <p>something wen't wrong</p>
          <p>click to retry</p>
        </div>
        <SkeletonLoading />
      </div>
    );
  }
}
