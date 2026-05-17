import { afterNextRender, Directive, ElementRef, inject, input, numberAttribute } from '@angular/core';

/** Adiciona a classe gh-in-view--visible quando o elemento entra na viewport (animação suave). */
@Directive({
  selector: '[ghInView]',
  standalone: true,
  host: {
    class: 'gh-reveal',
  },
})
export class GhInViewDirective {
  private readonly el = inject(ElementRef<HTMLElement>);
  /** Atraso extra da transição (útil para stagger). */
  readonly delayMs = input(0, { transform: numberAttribute });

  constructor() {
    afterNextRender(() => {
      const host = this.el.nativeElement;
      const delay = this.delayMs();
      if (delay > 0) {
        host.style.setProperty('--gh-reveal-delay', `${delay}ms`);
      }

      const reveal = () => {
        host.classList.add('gh-in-view--visible');
      };

      if (this.isAlreadyInView(host)) {
        reveal();
        return;
      }

      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            reveal();
            io.disconnect();
          }
        },
        { rootMargin: '0px 0px -6% 0px', threshold: 0.08 },
      );
      io.observe(host);
    });
  }

  private isAlreadyInView(el: HTMLElement): boolean {
    const r = el.getBoundingClientRect();
    const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
    return r.top < vh + 80 && r.bottom > -40;
  }
}
