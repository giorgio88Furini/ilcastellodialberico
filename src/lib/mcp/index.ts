import { defineMcp } from "@lovable.dev/mcp-js";
import getBookingLink from "./tools/get-booking-link";
import getPropertyInfo from "./tools/get-property-info";
import listAttractions from "./tools/list-attractions";
import listRooms from "./tools/list-rooms";

export default defineMcp({
  name: "il-castello-di-alberico-mcp",
  title: "Il Castello di Alberico",
  version: "0.1.0",
  instructions:
    "Public tools describing Il Castello di Alberico, a boutique B&B in Cotignola (Romagna, Italy). Use `get_property_info` for address and overview, `list_rooms` for room details, `list_attractions` for things to do nearby, and `get_booking_link` for the official reservation URL.",
  tools: [getPropertyInfo, listRooms, listAttractions, getBookingLink],
});
