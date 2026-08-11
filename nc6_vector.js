import { ID_ICOME } from "./id_icome.js";
import { ALL4ALL } from "../global/all4all.js";

export const NC6 = {
  1: { id: ID_ICOME.Start, name: "Ursprung" },
  2: { id: ID_ICOME.A,     name: "Ursache" },
  3: { id: ID_ICOME.B,     name: "Wirkung" },
  4: { id: ID_ICOME.C,     name: "Continuum" },
  5: { id: ID_ICOME.Orbit, name: "Orbit / rumumrum" },
  6: { id: ID_ICOME.Sum,   name: "Summation / ID.ICOME" }
};

export function NC6_activate() {
  Object.values(NC6).forEach(layer => {
    ALL4ALL.event("NC6_LAYER", layer);
  });
}
