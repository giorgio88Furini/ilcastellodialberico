import { defineTool } from "@lovable.dev/mcp-js";

const ATTRACTIONS = [
  {
    name: "Ravenna",
    distance_km: 25,
    description: "Città dei mosaici bizantini, patrimonio UNESCO.",
  },
  {
    name: "Mirabilandia",
    distance_km: 30,
    description: "Il più grande parco divertimenti d'Italia.",
  },
  {
    name: "Cotignola",
    distance_km: 1,
    description: "Borgo storico con la Torre d'Acuto e murales d'autore.",
  },
  {
    name: "Ciclismo in Romagna",
    distance_km: 0,
    description: "Itinerari ciclabili tra vigneti, campagne e borghi.",
  },
];

export default defineTool({
  name: "list_attractions",
  title: "Nearby attractions",
  description: "Lists nearby attractions in the Romagna region around Il Castello di Alberico.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(ATTRACTIONS) }],
    structuredContent: { attractions: ATTRACTIONS },
  }),
});
