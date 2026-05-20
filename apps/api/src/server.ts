import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.get("/", async () => {
  return {
    name: "BetDesk API",
    status: "online",
  };
});

app.get("/health", async () => {
  return {
    status: "ok",
  };
});

const start = async () => {
  try {
    await app.listen({
      port: 3333,
      host: "0.0.0.0",
    });

    console.log("HTTP server running");
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
