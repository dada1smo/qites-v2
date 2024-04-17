import { useState } from 'react';
import TabModel from '../models/TabModel';
import { TabItemType } from '../types/TabItemType';
import useLocalStorage from '@/src/application/hooks/use-local-storage';

export default function useTab() {
  const { addToLocalStorage, findInLocalStorage } = useLocalStorage();

  const [tab, setTab] = useState<TabModel>(new TabModel());

  function setTabTotal(total: number) {
    return setTab((t) => {
      const update = new TabModel()
        .duplicate(t)
        .setTotal(total)
        .setId(crypto.randomUUID());
      return update;
    });
  }

  function addTabItem(item: TabItemType) {
    return setTab((t) => {
      const update = new TabModel().duplicate(t).addItem(item);
      const id = update.getId();

      if (id) {
        addToLocalStorage(id, update.toJson());
      }

      return update;
    });
  }

  return {
    tab,
    setTabTotal,
    addTabItem,
  };
}
