import * as zod from "zod";
const checkoutScheme = zod.object({
  phone: zod
    .string()
    .nonempty("phone number is required")
    .regex(
      /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/,
      "Please enter a valid Egyptian phone number"
    ),
  details: zod
    .string()
    .nonempty("Details are required")
    .min(10, "Details must be at least 10 characters long"),
  city: zod
    .string()
    .nonempty("City is required")
    .min(3, "City must be at least 3 characters long"),
});

type checkoutType = zod.infer<typeof checkoutScheme>;
export { checkoutScheme, type checkoutType };
