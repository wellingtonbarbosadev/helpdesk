import z from "zod";

export const technicianSchema = z.object({
  technicianId: z.uuid(),
  hours: z.array(z.string().regex(/^\d{2}:\d{2}$/)).nonempty(),
});
