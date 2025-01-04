import { Section } from "@/features/landing/sections/section";
import { buttonVariants } from "@/components/ui/button";
import { badgeVariants } from "@/components/ui/badge";
import { CenteredHero } from "../components/centered-hero";
import { BananaIcon, BanIcon } from "lucide-react";

export const Hero = () => {
  return (
    <Section className="py-36">
      <CenteredHero
        banner={
          <a
            className={badgeVariants()}
            href="https://twitter.com/ixartz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BanIcon className="mr-1 size-5" /> follow us on twitter
          </a>
        }
        title={
          <>
            Byg dit cv og ansøgning{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              med ai
            </span>
            <br />
            og kom hurtigt i job
          </>
        }
        description="A free and open-source landing page template for your SaaS business, built with React, TypeScript, Shadcn UI, and Tailwind CSS."
        buttons={
          <>
            <a
              className={buttonVariants({ size: "lg" })}
              href="https://github.com/ixartz/SaaS-Boilerplate"
            >
              Primary Button
            </a>

            <a
              className={buttonVariants({ variant: "outline", size: "lg" })}
              href="https://github.com/ixartz/SaaS-Boilerplate"
            >
              <BananaIcon className="mr-2 size-5" />
              Secondary Button
            </a>
          </>
        }
      />
    </Section>
  );
};
