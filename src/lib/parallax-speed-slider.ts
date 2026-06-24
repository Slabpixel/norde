import Core, { damp, type CoreConfig } from "smooothy";

export class ParallaxSpeedSlider extends Core {
  lspeed = 0;
  parallaxElements: HTMLElement[];

  constructor(wrapper: HTMLElement, config: Partial<CoreConfig> = {}) {
    super(wrapper, {
      ...config,
      speedDecay: 0.9,
    });

    this.parallaxElements = [...wrapper.querySelectorAll<HTMLElement>("[data-p]")];
  }

  onUpdate = ({ parallaxValues, speed, deltaTime }: Core) => {
    this.lspeed = damp(this.lspeed, speed, 5, deltaTime);

    this.parallaxElements.forEach((element, i) => {
      if (!parallaxValues) return;
      const offset = parallaxValues[i] * Math.abs(this.lspeed) * 20;
      element.style.transform = `translateX(${offset}%)`;
    });
  };
}
