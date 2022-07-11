declare function fetch(
  input: RequestInfo,
  init?: RequestInit
): Promise<Response>;

type RequestInfo = Request | string;

declare var Request: {
  prototype: Request;
  new (input: RequestInfo, init?: RequestInit): Request;
};

interface RequestInit {
  body?: BodyInit | null;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  headers?: HeadersInit;
  // ...
}
