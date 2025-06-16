export function getErrorMessage(error: unknown): string {
  return error instanceof Error
    ? error.message
    : "An unexpected error occurred";
}
export function getErrorStatus(error: unknown): number {
  if (
    error &&
    typeof error === "object" &&
    "statusCode" in error &&
    typeof (error as any).statusCode === "number"
  ) {
    return (error as any).statusCode;
  }
  return 400;
}

