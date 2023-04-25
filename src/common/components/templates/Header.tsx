import React from 'react';

interface Props {
  // 헤더 제목
  headerTitle?: string;
}

const Header = ({ headerTitle }: Props) => {
  return (
    <>
      <header>
        <div>
          <h1>{headerTitle}</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
