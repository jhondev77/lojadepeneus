import { useEffect } from 'react';
import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

/** Rola suavemente até uma seção e avisa a seção quando chegar (para animações de chegada). */
export const scrollToId = (id: string) => {
  const target = id ? document.getElementById(id) : null;
  const done = () => {
    window.dispatchEvent(new CustomEvent('vn:arrive', { detail: id }));
  };

  if (!target && id) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(target ?? 0, {
      offset: target ? -90 : 0,
      duration: 1.8,
      easing: (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
      onComplete: done,
    });
  } else {
    (target ?? document.body).scrollIntoView({ behavior: 'smooth' });
    setTimeout(done, 700);
  }
  history.replaceState(null, '', id ? `#${id}` : window.location.pathname);
};

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });
    lenisInstance = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Qualquer link interno (#secao) passa a rolar com animação suave
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute('href')!.slice(1);
      if (id && !document.getElementById(id)) return;
      e.preventDefault();
      scrollToId(id);
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      lenisInstance = null;
      lenis.destroy();
    };
  }, []);
};
