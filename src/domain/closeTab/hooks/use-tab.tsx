import { useState } from 'react';
import TabModel from '../models/TabModel';

export default function useTab() {
  const [tab, setTab] = useState<TabModel>(new TabModel());

  function setTabTotal(total: number) {
    return setTab((t) => {
      const update = new TabModel().duplicate(t).setTotal(total);
      return update;
    });
  }

  return {
    tab,
    setTabTotal,
  };
}
