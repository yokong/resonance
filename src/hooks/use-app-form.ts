"use client";

import { createFormHookContexts, createFormHook } from "@tanstack/react-form";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

// Define this once to have a generator of consistent form instances throughout your app
export const { useAppForm, useTypedAppFormContext } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {},
  formComponents: {},
});
