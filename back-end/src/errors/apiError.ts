export type apiError = {
  status: number;
  message: string;
};

const apiError = (status: number, message: string) => ({
  status,
  message,
});

export default apiError;
