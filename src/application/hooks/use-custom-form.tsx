'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { ZodType } from 'zod';

export default function useCustomForm<T>({ schema }: { schema: ZodType<T> }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues, T>({ resolver: zodResolver(schema) });

  return {
    control,
    handleSubmit,
    errors,
  };
}
