import { expect, test } from "bun:test";

import { GET } from "@/app/api/hello/route";

test("GET /api/hello preserves the success envelope", async () => {
  const response = await GET();
  const body = await response.json();

  expect(response.status).toBe(200);
  expect(body).toMatchObject({
    data: {
      name: "John Doe",
    },
    success: true,
  });
  expect(body.data.timestamp).toBeNumber();
});
