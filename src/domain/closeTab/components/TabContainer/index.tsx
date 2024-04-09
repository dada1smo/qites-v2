'use client';

import { FunctionComponent } from 'react';
import useTab from '../../hooks/use-tab';
import TabTotalForm from '../TabTotalForm';
import AddTabItem from '../AddTabItem';

const TabContainer: FunctionComponent = () => {
  const { tab, setTabTotal } = useTab();

  return (
    <>
      <TabTotalForm tab={tab} setTabTotal={setTabTotal} />
      <AddTabItem tab={tab} />
    </>
  );
};

export default TabContainer;
