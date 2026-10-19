import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { SignupForm } from "./SignupForm";

/** Newsletter sign-up band above the footer. */
export function Newsletter() {
  return (
    <section className="bg-forest py-16 md:py-20">
      <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-4">
          <Eyebrow tone="light">Newsletter</Eyebrow>
          <h2 className="font-display text-[32px] leading-[1.15] text-white md:text-[40px]">
            Join the community building wealth <span className="text-gold italic">together.</span>
          </h2>
          <p className="max-w-[520px] text-[17px] leading-[1.6] text-neutral-300">
            Be the first to hear about the app launch, new investment opportunities, and the impact your community is
            making.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <SignupForm
            kind="newsletter"
            tone="dark"
            buttonLabel="Subscribe"
            successMessage="Thank you for subscribing. Look out for our next update."
          />
          <p className="text-[13px] text-cream/50">No spam. Unsubscribe anytime.</p>
        </div>
      </Container>
    </section>
  );
}
