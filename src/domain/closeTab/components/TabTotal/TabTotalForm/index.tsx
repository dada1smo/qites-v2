import useCustomForm from '@/src/infraestructure/hooks/use-custom-form';
import { FunctionComponent, useState } from 'react';
import { TabTotalSchema } from './validationSchema';
import { TabTotalType } from '../../../types/TabTotalType';
import Form from '@/src/ui/components/Form';
import ControlledPillInput from '@/src/ui/components/PillInput/Controlled';
import TabModel from '../../../models/TabModel';
import { coerceToNumber } from '@/src/utils/coerce';
import ButtonCard from '@/src/ui/components/ButtonCard';
import Button from '@/src/ui/components/Button';
import { formatCurrency } from '@/src/utils/format';
import Typography from '@/src/ui/components/Typography';

interface TabTotalFormProps {
  tab: TabModel;
  setTabTotal: (total: number) => void;
}

const TabTotalForm: FunctionComponent<TabTotalFormProps> = ({
  tab,
  setTabTotal,
}) => {
  const defaultTotal = tab.getTotal() === 0 ? '' : `${tab.getTotal()}`;

  const { control, handleSubmit } = useCustomForm<TabTotalType>({
    schema: TabTotalSchema,
    defaultValues: {
      tabTotal: defaultTotal,
    },
  });

  const [edit, setEdit] = useState<boolean>(false);

  const submit = (data: any) => {
    const { tabTotal } = data;
    const value = coerceToNumber(tabTotal);
    setTabTotal(value);
    setEdit(false);
  };

  return (
    <>
      {!edit && tab.getTotal() === 0 && (
        <ButtonCard
          label="Adicionar total da conta"
          iconSrc="/add.svg"
          onClick={() => {
            setEdit(true);
          }}
        />
      )}
      {!edit && tab.getTotal() > 0 && (
        <div className="bg-slate-900 rounded-3xl px-4 py-2">
          <button
            className="inline-flex items-center justify-between w-full"
            onClick={() => setEdit(true)}
          >
            <Typography as="span" variant="strong">
              Total da conta
            </Typography>
            <Typography as="span" variant="number">
              {formatCurrency(tab.getTotal())}
            </Typography>
          </button>
        </div>
      )}
      {edit && (
        <div className="bg-slate-900 rounded-3xl px-4 py-1">
          <Form
            onSubmit={handleSubmit(submit)}
            className="flex items-center justify-between w-full gap-2"
          >
            <ControlledPillInput
              name="tabTotal"
              placeholder="0,00"
              control={control}
              preffix="R$"
              type="text"
              inputMode="decimal"
              pattern="[0-9]*"
              fieldProps={{
                color: 'transparent',
                padding: 'clear',
                size: 'full',
              }}
              autoFocus
              onInputBlur={handleSubmit(submit)}
            />
            <Button
              label="Adicionar novo"
              type="submit"
              color="basic"
              shape="circle"
              size="md"
              padding="clear"
              icon={{ src: '/check.svg', position: 'center', size: 24 }}
            />
          </Form>
        </div>
      )}
    </>
  );
};

export default TabTotalForm;
