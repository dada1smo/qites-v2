'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { ZodType } from 'zod';

export default function useCustomForm<T>({
  schema,
  defaultValues,
}: {
  schema: ZodType<T>;
  defaultValues: FieldValues;
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues, T>({ resolver: zodResolver(schema), defaultValues });

  return {
    control,
    handleSubmit,
    errors,
    reset,
  };
}
