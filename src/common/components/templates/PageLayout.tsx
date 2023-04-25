import React, { ReactNode } from 'react';
interface Props {
  // 자식 컴포넌트
  children: ReactNode;
}

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <section>
        <section>{children}</section>
      </section>
    </>
  );
};
export default PageLayout;
