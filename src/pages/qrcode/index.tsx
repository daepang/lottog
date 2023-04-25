import React from 'react';

import PageLayout from 'src/common/components/templates/PageLayout';

import Qrcode from 'src/qrcode/components/templates';

const Index = () => {
  return (
    <>
      <PageLayout>
        <Qrcode />
      </PageLayout>
    </>
  );
};

export default Index;
