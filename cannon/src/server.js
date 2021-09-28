import staticFiles from "https://deno.land/x/static_files@1.1.1/mod.ts";
async function handle(conn) {
    const httpConn = Deno.serveHttp(conn);
    for await (const requestEvent of httpConn) {
        console.log(requestEvent);
    }
}
const server = Deno.listen({ port: 8080 });
for await (const conn of server) {
    staticFiles('client')(conn);
    handle(conn);
}
