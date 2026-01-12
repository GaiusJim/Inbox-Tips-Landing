import { useMutation } from "@tanstack/react-query";
import { api, type InsertLead } from "@shared/routes";

// Although the user is using an external form script (eomail6.com), 
// we keep this hook structure ready in case they switch to a custom API implementation later.
// The current implementation relies on the script injection in the component.

export function useCreateLead() {
  return useMutation({
    mutationFn: async (data: InsertLead) => {
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        throw new Error("Failed to subscribe");
      }
      
      return api.leads.create.responses[201].parse(await res.json());
    },
  });
}
