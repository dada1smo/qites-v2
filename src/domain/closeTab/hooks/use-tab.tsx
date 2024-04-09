import { useState } from 'react';
import TabModel from '../models/TabModel';

export default function useTab() {
  const [tab, setTab] = useState<TabModel>(new TabModel());

  function setTabTotal(total: number) {
    return setTab((t) => {
      t.setTotal(total);
      return t;
    });
  }

  return {
    tab,
    setTabTotal,
  };
}
