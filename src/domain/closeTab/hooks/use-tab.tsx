import { useEffect, useState } from 'react';
import TabModel from '../models/TabModel';
import { TabItemType } from '../types/TabItemType';
import useLocalStorage from '@/src/infraestructure/hooks/use-local-storage';
import { TabPayerType } from '../types/TabPayerType';

export default function useTab() {
  const { addToLocalStorage, findInLocalStorage, removeLocalStorage } =
    useLocalStorage();

  const [tab, setTab] = useState<TabModel>(new TabModel());

  function setTabTotal(total: number) {
    return setTab((t) => {
      const update = new TabModel()
        .duplicate(t)
        .setTotal(total)
        .setId(crypto.randomUUID());

      storeTab(update);

      return update;
    });
  }

  function addTabItem(item: TabItemType) {
    return setTab((t) => {
      const update = new TabModel().duplicate(t).addItem(item);

      storeTab(update);

      return update;
    });
  }

  function removeTabItem(id: string) {
    return setTab((t) => {
      const update = new TabModel().duplicate(t).removeItem(id);

      storeTab(update);

      return update;
    });
  }

  function splitTabRemainder(payers: TabPayerType[]) {
    return setTab((t) => {
      const update = new TabModel().duplicate(t).setSplitPayers(payers);

      storeTab(update);

      return update;
    });
  }

  function removeTabSplit() {
    return setTab((t) => {
      const update = new TabModel().duplicate(t).removeSplit();

      storeTab(update);

      return update;
    });
  }

  function storeTab(tabToStore: TabModel) {
    addToLocalStorage('qites-tab', tabToStore.toJson());
  }

  function getStoredTab() {
    const storedTab = findInLocalStorage('qites-tab');
    const newTab = new TabModel().toClass(storedTab);
    setTab(newTab);
  }

  function closeTab() {
    removeLocalStorage('qites-tab');
    setTab(new TabModel());
  }

  useEffect(() => {
    getStoredTab();
  }, []);

  return {
    tab,
    setTabTotal,
    addTabItem,
    removeTabItem,
    splitTabRemainder,
    removeTabSplit,
    closeTab,
  };
}
