import { afterAll, afterEach, beforeAll, expect } from "bun:test";
import { GlobalRegistrator } from "@happy-dom/global-registrator";
// biome-ignore lint/performance/noNamespaceImport: expect.extend requires the matcher map.
import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";

import server from "../mocks/server";

expect.extend(matchers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
afterAll(() => {
  server.close();
  GlobalRegistrator.unregister();
});
