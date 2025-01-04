import { appConfig } from "@/config/app.config";
import { Hero } from "@/features/landing/sections/hero";

export default async function Home() {
  if (appConfig.mode === "soon") {
    return <>Coming Soon</>;
  }

  if (appConfig.mode === "maintenance") {
    return (
      <div>
        <h1>Maintenance</h1>
      </div>
    );
  }

  if (appConfig.mode === "live") {
    return (
      <div>
        <Hero />
      </div>
    );
  }
}
