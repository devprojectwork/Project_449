'use client';

import { useActionState } from 'react'; // ✅ Use `useActionState` instead of `useFormState`
import { useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import { actionFunction } from '@/utils/types';

const initialState = {
  message: '',
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState); // ✅ Updated to `useActionState`

  useEffect(() => {
    if (state.message) {
      toast(state.message); // ✅ Trigger toast with the message
    }
  }, [state]);

  return (
    <>
      <Toaster /> {/* ✅ Ensure the Toaster component is included */}
      <form action={formAction}>{children}</form>
    </>
  );
}

export default FormContainer;
