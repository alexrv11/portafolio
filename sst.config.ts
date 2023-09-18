import { SSTConfig } from "sst";
import { WebPageStack } from "./stacks/web-app";

export default {
  config(_input) {
    return {
      name: "personal-website",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(WebPageStack);
  }
} satisfies SSTConfig;
