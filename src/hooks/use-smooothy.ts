"use client";

import gsap from "gsap";
import Core from "smooothy";
import { useCallback, useEffect, useRef, useState } from "react";

type CoreConfig = NonNullable<ConstructorParameters<typeof Core>[1]>;
type CoreConstructor = new (
  wrapper: HTMLElement,
  config?: Partial<CoreConfig>,
) => Core;

export function useSmooothy<T extends Core = Core>(
  config: Partial<CoreConfig> = {},
  SliderClass: CoreConstructor = Core as CoreConstructor,
) {
  const sliderRef = useRef<T | null>(null);
  const updateRef = useRef<(() => void) | null>(null);
  const [slider, setSlider] = useState<T | null>(null);

  const refCallback = useCallback(
    (node: HTMLElement | null) => {
      if (node && !sliderRef.current) {
        const instance = new SliderClass(node, config) as T;
        const update = instance.update.bind(instance);
        updateRef.current = update;
        gsap.ticker.add(update);
        sliderRef.current = instance;
        setSlider(instance);
      }
    },
    [config, SliderClass],
  );

  useEffect(() => {
    return () => {
      if (updateRef.current) {
        gsap.ticker.remove(updateRef.current);
        updateRef.current = null;
      }
      sliderRef.current?.destroy();
      sliderRef.current = null;
    };
  }, []);

  return { ref: refCallback, slider };
}
