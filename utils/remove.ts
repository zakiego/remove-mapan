import { trim } from "lodash";
import { z } from "zod";

type RemoveMapan = (input: unknown) => string;

export const removeMapan: RemoveMapan = (input) => {
  const inputSchema = z
    .string({
      invalid_type_error: "Input must be a string",
    })
    .min(1, {
      message: "Input must not be empty",
    });

  const parsedInput = inputSchema.safeParse(input);

  if (!parsedInput.success) {
    throw new Error(parsedInput.error.message);
  }

  const mapanSchema = z.string().regex(/mapan/i);

  const parsedRegexMapan = mapanSchema.safeParse(parsedInput.data);

  if (!parsedRegexMapan.success) {
    return parsedInput.data;
  }

  const result = trim(parsedInput.data.replace(/mapan/gi, ""));
  const removeExtraSpace = result.replace(/\s+/g, " ");

  return removeExtraSpace;
};
