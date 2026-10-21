import { defineTool } from "@lovable.dev/mcp-js";

const ROOMS = [
  {
    id: "matrimoniale",
    name: "Camera Matrimoniale",
    description:
      "Camera romantica con letto in ferro battuto, travi a vista e illuminazione calda.",
    capacity: 2,
  },
  {
    id: "tripla",
    name: "Camera Tripla",
    description:
      "Ampia camera con tre letti in ferro battuto, soffitto con travi in legno e lampadario di cristallo.",
    capacity: 3,
  },
  {
    id: "francese",
    name: "Camera Francese",
    description: "Camera raffinata con bagno moderno rustico, vanity in legno e travi a vista.",
    capacity: 2,
  },
];

export default defineTool({
  name: "list_rooms",
  title: "List rooms",
  description:
    "Lists the rooms available at Il Castello di Alberico with capacity and description.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(ROOMS) }],
    structuredContent: { rooms: ROOMS },
  }),
});
