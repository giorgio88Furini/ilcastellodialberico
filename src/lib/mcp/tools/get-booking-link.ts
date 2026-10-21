import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_booking_link",
  title: "Booking link",
  description: "Returns the official Booking.com URL to reserve a stay at Il Castello di Alberico.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: () => ({
    content: [
      {
        type: "text",
        text: "https://www.booking.com/hotel/it/il-castello-di-alberico.it.html",
      },
    ],
  }),
});
