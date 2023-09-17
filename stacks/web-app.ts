import { StackContext, StaticSite } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  // Deploy our React app
  const site = new StaticSite(stack, "ReactSite", {
    path: "packages/frontend",
    buildCommand: "npm run build",
    buildOutput: "dist"
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
  });
}
