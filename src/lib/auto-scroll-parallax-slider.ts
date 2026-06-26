import type { CoreConfig } from "smooothy";
import { ParallaxSpeedSlider } from "./parallax-speed-slider";

export class AutoScrollParallaxSlider extends ParallaxSpeedSlider {
  #isPaused = false;
  #scrollSpeed = 0.15;
  #wasDragging = false;
  #resumeTimeout: ReturnType<typeof setTimeout> | null = null;

  #onMouseEnter = () => {
    this.#isPaused = true;
  };

  #onMouseLeave = () => {
    this.#isPaused = false;
  };

  #onTouchStart = () => {
    this.#isPaused = true;
  };

  #onTouchEnd = () => {
    if (this.#resumeTimeout) clearTimeout(this.#resumeTimeout);
    this.#resumeTimeout = setTimeout(() => {
      this.#isPaused = false;
    }, 2000);
  };

  constructor(wrapper: HTMLElement, config: Partial<CoreConfig> = {}) {
    super(wrapper, {
      ...config,
      infinite: true,
      snap: false,
    });

    const originalUpdate = this.update.bind(this);

    this.update = () => {
      if (!this.#isPaused && this.isVisible && !this.isDragging) {
        this.target -= this.#scrollSpeed * this.deltaTime;
      }

      originalUpdate();
      this.#checkDragging();
    };

    this.wrapper.addEventListener("mouseenter", this.#onMouseEnter);
    this.wrapper.addEventListener("mouseleave", this.#onMouseLeave);
    this.wrapper.addEventListener("touchstart", this.#onTouchStart);
    this.wrapper.addEventListener("touchend", this.#onTouchEnd);
  }

  #checkDragging() {
    if (this.isDragging && !this.#wasDragging) {
      this.#isPaused = true;
      this.#wasDragging = true;
      return;
    }

    if (!this.isDragging && this.#wasDragging) {
      this.#wasDragging = false;
      if (this.#resumeTimeout) clearTimeout(this.#resumeTimeout);
      this.#resumeTimeout = setTimeout(() => {
        this.#isPaused = false;
      }, 2000);
    }
  }

  destroy() {
    if (this.#resumeTimeout) clearTimeout(this.#resumeTimeout);
    this.wrapper.removeEventListener("mouseenter", this.#onMouseEnter);
    this.wrapper.removeEventListener("mouseleave", this.#onMouseLeave);
    this.wrapper.removeEventListener("touchstart", this.#onTouchStart);
    this.wrapper.removeEventListener("touchend", this.#onTouchEnd);
    super.destroy();
  }
}
