export interface HelloData {
  name: string;
  timestamp: number;
}

export interface HelloResponse {
  data: HelloData;
  success: true;
}

export function GET() {
  return Response.json({
    data: {
      name: "John Doe",
      timestamp: Date.now(),
    },
    success: true,
  } satisfies HelloResponse);
}
