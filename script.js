import { gsap } from "gsap";

window.addEventListener("DOMContentLoaded", () => {
  gsap.set(".features li", {
    opacity: 0,
    y: 30,
  });

  gsap.set(".cta-button", { opacity: 1, scale: 1 });

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.from(".main-content > :not(.features)", {
    y: 40,
    scale: 0.7,
    opacity: 0,
    duration: 1.2,
    stagger: 0.1,
  })

    .to(
      ".features li",
      {
        opacity: 1,
        y: 20,
        duration: 1,
        stagger: 0.7,
        ease: "power3.out",
      },
      "+=0.3"
    )

    .to(
      ".cta-button",
      {
        scale: 1.1,
        duration: 0.6,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      },
      "+=0.2"
    );
});
