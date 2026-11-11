import { envs } from "./config";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/serve";

(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
    publicPath: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });
  server.start();
}