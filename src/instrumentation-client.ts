if (process.env.NEXT_PUBLIC_API_MOCKING === "true") {
  const { worker } = await import("../mocks/browser");
  await worker.start({ onUnhandledRequest: "bypass" });
}

export {};
