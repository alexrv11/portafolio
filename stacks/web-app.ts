import { StackContext, StaticSite } from "sst/constructs";

export function WebPageStack({ stack }: StackContext) {
  // Deploy our React app
  const site = new StaticSite(stack, "ReactSite", {
    path: "packages/frontend",
    buildCommand: "npm run build",
    buildOutput: "dist",
    customDomain: {
      domainName: `alex.ventulab.com`,
      hostedZone: `ventulab.com`
    },
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
  });
}
