import { IncomingMessage } from "http";
import { parse } from "url";

export function parseReqs(req: IncomingMessage) {
  const { query = {} } = parse(req.url || "", true);
  const { code, country, team } = query;

  if (Array.isArray(code)) {
    throw new Error("Code must be string");
  }
  if (Array.isArray(country)) {
    throw new Error("Country must be string");
  }
  if (Array.isArray(team)) {
    throw new Error("Team must be string");
  }


  const parsedReqs: ParsedReqs = {
    code,
    country,
    team
  };

  console.log(JSON.stringify(parsedReqs));

  return parsedReqs;
}
