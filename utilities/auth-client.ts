const noop = async (..._args: unknown[]): Promise<{ data: null; error: { message: string } | null }> => ({ data: null, error: null });

export const signIn = {
  email: noop,
  social: noop,
} as const;

export const signUp = {
  email: noop,
} as const;

export const signOut = noop;

export const authClient = {
  requestPasswordReset: noop,
  resetPassword: noop,
  useSession: () => ({ data: null, isPending: false }),
};
