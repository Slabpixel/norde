import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function scheduleScrollTriggerSetup(
  setup: () => gsap.Context | null | undefined,
): () => void {
  let ctx: gsap.Context | null = null;
  let frame = 0;
  let retryFrame = 0;
  let cancelled = false;

  const run = () => {
    if (cancelled) return false;

    try {
      const next = setup();
      if (next) {
        ctx = next;
        ScrollTrigger.refresh();
        return true;
      }
    } catch {
      return false;
    }

    return false;
  };

  frame = requestAnimationFrame(() => {
    if (run()) return;
    retryFrame = requestAnimationFrame(run);
  });

  return () => {
    cancelled = true;
    cancelAnimationFrame(frame);
    cancelAnimationFrame(retryFrame);
    ctx?.revert();
  };
}
