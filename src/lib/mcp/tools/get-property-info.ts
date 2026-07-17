import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_property_info",
  title: "Property information",
  description: "Returns the name, address, description, and booking URL of Il Castello di Alberico.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          name: "Il Castello di Alberico",
          type: "Boutique Bed & Breakfast",
          address: "Via Gesuita 29, 48010 Cotignola (RA), Italia",
          region: "Romagna",
          description:
            "Un B&B di charme immerso nella campagna romagnola, tra Ravenna e Bologna. Un casale storico con cortile fiorito, camere eleganti e colazione artigianale.",
          booking_url: "https://www.booking.com/hotel/it/il-castello-di-alberico.it.html",
          website: "https://ilcastellodialberico.it",
          languages: ["it", "en"],
        }),
      },
    ],
  }),
});