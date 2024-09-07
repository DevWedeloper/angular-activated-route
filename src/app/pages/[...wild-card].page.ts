import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wild-card',
  standalone: true,
  template: `
    <h1>Angular Activated Route</h1>
    <span>URL: {{ url() }}</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WildCardPageComponent {
  private route = signal<ActivatedRoute>(inject(ActivatedRoute));
  private route$ = toObservable(this.route);
  protected url = computed(() => {
    return this.route()
      .snapshot.url.map((segment) => segment.path)
      .join('/');
  });

  constructor() {
    this.route$.subscribe((route) => {
      console.log('route', route);
    });
    effect(() => {
      console.log('url:', this.url());
    });
  }
}
