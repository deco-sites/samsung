import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 521,
  site: "samsung",
  domains: ["samsung.deco.site"],
});