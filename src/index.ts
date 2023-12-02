// const server = Bun.serve({
//     port: 3000,
//     fetch(req) {
//       return new Response("Bun!");
//     },
//   });

//   console.log(`Listening on http://localhost:${server.port} ...`);

import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
