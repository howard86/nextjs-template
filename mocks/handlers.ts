import { HttpResponse, http } from "msw";

import type { HelloResponse } from "@/app/api/hello/route";

const handlers = [
  http.get("*/api/hello", () =>
    HttpResponse.json<HelloResponse>({
      data: {
        name: "MOCK_NAME",
        timestamp: Date.now(),
      },
      success: true,
    })
  ),
];

export default handlers;
