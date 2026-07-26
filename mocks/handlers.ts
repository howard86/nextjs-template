import { HttpResponse, http } from "msw";

import type { HelloResponse } from "@/app/api/hello/route";

const handlers = [
  http.get("*/api/hello", () =>
    HttpResponse.json<HelloResponse>({
      success: true,
      data: {
        name: "MOCK_NAME",
        timestamp: Date.now(),
      },
    })
  ),
];

export default handlers;
