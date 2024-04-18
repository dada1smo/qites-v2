'use client';

import { FunctionComponent } from 'react';
import TabModel from '../../models/TabModel';
import ControlledPillInput from '@/src/ui/components/PillInput/Controlled';
import useCustomForm from '@/src/application/hooks/use-custom-form';
import { TabPayerSchema } from './validationSchema';
import { TabPayerType } from '../../types/TabPayerType';
import Form from '@/src/ui/components/Form';
import Chip from '@/src/ui/components/Chip';
import Button from '@/src/ui/components/Button';
import Typography from '@/src/ui/components/Typography';
import { TabItemFormType } from '../../types/TabItemFormTypes';

interface TabPayerFormProps {
  tab: TabModel;
  tabPayers: TabPayerType[];
  addPayer: Function;
  removePayer: Function;
  mode: TabItemFormType;
}

const TabPayerForm: FunctionComponent<TabPayerFormProps> = ({
  tabPayers,
  addPayer,
  removePayer,
  mode,
}) => {
  const { control, handleSubmit, reset } = useCustomForm<TabPayerType>({
    schema: TabPayerSchema,
    defaultValues: {
      name: '',
    },
  });

  const submit = (data: any) => {
    addPayer(data);
    reset();
  };

  return (
    <div className="flex flex-col gap-3">
      <Typography as="h3" variant="strong">
        {(mode === 'add' || mode === 'edit') && 'Quem vai pagar?'}
        {mode === 'split' && 'Quem vai pagar?'}
      </Typography>
      <div className="flex flex-wrap gap-3 items-center">
        {tabPayers.map(({ name }, i) => {
          return (
            <Chip key={i} label={name} onRemove={() => removePayer(name)} />
          );
        })}
        <Form
          onSubmit={handleSubmit(submit)}
          className="flex gap-3 items-center"
        >
          <ControlledPillInput
            control={control}
            name="name"
            placeholder="Nome"
            type="text"
            fieldProps={{ color: 'alt' }}
            onInputBlur={handleSubmit(submit)}
          />
          <Button
            label="Adicionar novo"
            type="submit"
            color="basic"
            shape="circle"
            size="md"
            padding="clear"
            icon={{ src: '/add.svg', position: 'center', size: 24 }}
          />
        </Form>
      </div>
    </div>
  );
};

export default TabPayerForm;
