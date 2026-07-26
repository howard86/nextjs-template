export interface HelloData {
  name: string;
  timestamp: number;
}

export interface HelloResponse {
  success: true;
  data: HelloData;
}

export function GET() {
  return Response.json({
    success: true,
    data: {
      name: "John Doe",
      timestamp: Date.now(),
    },
  } satisfies HelloResponse);
}
