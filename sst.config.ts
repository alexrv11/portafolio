import { SSTConfig } from "sst";
import { ExampleStack } from "./stacks/web-app";

export default {
  config(_input) {
    return {
      name: "portafolio",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(ExampleStack);
  }
} satisfies SSTConfig;
