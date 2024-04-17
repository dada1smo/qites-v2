import { useState } from 'react';
import { TabPayerType } from '../types/TabPayerType';

export default function useTabPayer(payers: TabPayerType[] | []) {
  const [tabPayers, setTabPayers] = useState<TabPayerType[] | []>(payers);

  function addPayer(data: TabPayerType) {
    setTabPayers((p) => {
      if (
        p.find(
          (n) => n.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
        )
      ) {
        return p;
      }
      return [...p, data];
    });
  }

  function removePayer(payerName: string) {
    setTabPayers((t) => {
      return t.filter(
        (p) => p.name.toLocaleLowerCase() !== payerName.toLocaleLowerCase()
      );
    });
  }

  return {
    tabPayers,
    addPayer,
    removePayer,
  };
}
