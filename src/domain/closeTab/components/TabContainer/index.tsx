'use client';

import { FunctionComponent } from 'react';
import useTab from '../../hooks/use-tab';
import TabTotalForm from '../TabTotalForm';
import TabItemSection from '../TabItemSection';

const TabContainer: FunctionComponent = () => {
  const { tab, setTabTotal } = useTab();

  return (
    <>
      <TabTotalForm tab={tab} setTabTotal={setTabTotal} />
      <TabItemSection tab={tab} />
    </>
  );
};

export default TabContainer;
