import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";


export default [
  layout("routes/_app.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("services", "routes/services.tsx"),
    route("works", "routes/works.tsx"),
  ]),
] satisfies RouteConfig;
