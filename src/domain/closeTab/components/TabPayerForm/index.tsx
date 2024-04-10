'use client';

import { FunctionComponent, useState } from 'react';
import TabModel from '../../models/TabModel';
import PillInput from '@/src/ui/components/PillInput/Base';
import ControlledPillInput from '@/src/ui/components/PillInput/Controlled';
import useCustomForm from '@/src/application/hooks/use-custom-form';
import { TabPayerSchema } from './validationSchema';
import { TabPayerType } from '../../types/TabPayerType';
import Form from '@/src/ui/components/Form';
import { FieldValues } from 'react-hook-form';

interface TabPayerFormProps {
  tab: TabModel;
}

const TabPayerForm: FunctionComponent<TabPayerFormProps> = ({ tab }) => {
  const { control, handleSubmit, reset } = useCustomForm<TabPayerType>({
    schema: TabPayerSchema,
    defaultValues: {
      name: '',
    },
  });

  const [tabPayers, setTabPayers] = useState<TabPayerType[] | []>([]);

  const submit = (data: any) => {
    setTabPayers((p) => {
      return [...p, data];
    });
    reset();
  };

  return (
    <div className="flex flex-wrap gap-4">
      {tabPayers.map(({ name }, i) => {
        return <div key={i}>{name}</div>;
      })}
      <Form onSubmit={handleSubmit(submit)}>
        <ControlledPillInput
          control={control}
          name="name"
          placeholder="Nome"
          type="text"
          fieldProps={{ color: 'secondary' }}
        />
      </Form>
    </div>
  );
};

export default TabPayerForm;
