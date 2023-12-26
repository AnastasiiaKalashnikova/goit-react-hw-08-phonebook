import { Wrapper } from 'components/App/App.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      <div>
        <Toaster />
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
