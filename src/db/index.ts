import { Pool, QueryResultRow } from "pg";

const pool = new Pool();

function query<T extends QueryResultRow>(text: string, params?: Array<number | string>) {
  return pool.query<T>(text, params);
}

const db = { query: query };

export default db;
