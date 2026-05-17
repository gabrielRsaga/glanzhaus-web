import { Component, inject, signal, afterNextRender, DestroyRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageService } from 'primeng/api';
import { GhInViewDirective } from '../../directives/gh-in-view.directive';

interface PricingRow {
  label: string;
  price: number;
}

interface EquipmentItem {
  icon: string;
  image: string;
  name: string;
  subtitle: string;
  description: string;
  includes: string[];
  pricing: PricingRow[];
  note?: string;
}

@Component({
  selector: 'app-mietgeraete',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    FloatLabelModule,
    SelectModule,
    CheckboxModule,
    GhInViewDirective,
  ],
  providers: [MessageService],
  templateUrl: './mietgeraete.component.html',
  styleUrl: './mietgeraete.component.scss',
})
export class MietgeraeteComponent {
  private readonly fb = inject(FormBuilder);
  private readonly msg = inject(MessageService);
  private readonly doc = inject(DOCUMENT);

  submitted = false;
  readonly showFloatBtn = signal(true);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const anchor = this.doc.getElementById('miet-form-anchor');
      if (!anchor) return;
      const io = new IntersectionObserver(
        ([entry]) => this.showFloatBtn.set(!entry!.isIntersecting),
        { threshold: 0.12 },
      );
      io.observe(anchor);
      destroyRef.onDestroy(() => io.disconnect());
    });
  }

  scrollToForm(): void {
    this.doc.getElementById('miet-form-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  readonly geraeteOptions = [
    { label: 'Benzin Hochdruckreiniger (Kränzle Profi-Jet B13/150)', value: 'hochdruckreiniger' },
    { label: 'Benzin Kehrmaschine', value: 'kehrmaschine' },
    { label: 'Benzin Rasenmäher', value: 'rasenmaeher' },
    { label: 'Bodenfräse Stema MC2300', value: 'bodenfraese' },
    { label: 'Benzin Freischneider 43ccm', value: 'freischneider' },
  ];

  readonly form = this.fb.nonNullable.group({
    geraet: ['', Validators.required],
    vorname: ['', [Validators.required, Validators.minLength(2)]],
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    datumVon: ['', Validators.required],
    datumBis: ['', Validators.required],
    nachricht: [''],
    datenschutz: [false, Validators.requiredTrue],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted = true;
    this.msg.add({
      severity: 'success',
      summary: 'Anfrage gesendet',
      detail: 'Wir melden uns zeitnah bei Ihnen.',
    });
    this.form.reset();
  }

  hasError(field: string): boolean {
    const c = this.form.get(field);
    return !!(c?.invalid && c?.touched);
  }

  readonly equipment: EquipmentItem[] = [
    {
      icon: 'pi pi-bolt',
      image: '/assets/images/benzin_hochdruckreiniger.png',
      name: 'Benzin Hochdruckreiniger',
      subtitle: 'Kränzle Profi-Jet B13/150',
      description:
        'Leistungsstarker Benzin-Hochdruckreiniger für anspruchsvolle Reinigungsarbeiten — ideal für Terrassen, Fassaden, Verbundsteine und Wege.',
      includes: [
        'Gerät voll getankt',
        'Kärcher-Pistole mit VarioJet-Düse',
        'Schlauch',
        '25m Wasserschlauch auf Rolle',
      ],
      pricing: [
        { label: '1 Tag', price: 50 },
        { label: 'Weekend', price: 85 },
        { label: '1 Woche', price: 250 },
      ],
    },
    {
      icon: 'pi pi-sparkles',
      image: '/assets/images/benzin_kehrmaschine.png',
      name: 'Benzin Kehrmaschine',
      subtitle: '',
      description:
        'Effizientes Kehren grosser Flächen wie Einfahrten, Wege und Parkplätze — spart Zeit und schont den Rücken.',
      includes: ['Gerät voll getankt', 'Auffangbehälter'],
      pricing: [
        { label: 'Halbtag', price: 50 },
        { label: 'Ganztag', price: 90 },
        { label: 'Weekend', price: 190 },
        { label: '1 Woche', price: 450 },
      ],
    },
    {
      icon: 'pi pi-sun',
      image: '/assets/images/benzin_rasenmaeher.png',
      name: 'Benzin Rasenmäher',
      subtitle: '',
      description:
        'Zuverlässiger Benzin-Rasenmäher für Rasenflächen jeder Grösse — sauberer Schnitt und einfache Handhabung.',
      includes: [],
      pricing: [
        { label: 'Halbtag', price: 50 },
        { label: 'Ganztag', price: 80 },
        { label: 'Weekend', price: 140 },
        { label: '1 Woche', price: 250 },
      ],
    },
    {
      icon: 'pi pi-wrench',
      image: '/assets/images/bodenfraese_stema_mc2300.png',
      name: 'Bodenfräse',
      subtitle: 'Stema MC2300',
      description:
        'Kraftvolle Bodenfräse zur Lockerung und Bearbeitung von Gartenböden — ideal zur Vorbereitung von Beeten und Rasenflächen.',
      includes: [],
      pricing: [
        { label: 'Halbtag', price: 70 },
        { label: 'Ganztag', price: 110 },
        { label: 'Weekend', price: 170 },
        { label: '1 Woche', price: 440 },
      ],
    },
    {
      icon: 'pi pi-minus-circle',
      image: '/assets/images/benzin_freischneider_43ccm.png',
      name: 'Benzin Freischneider 43ccm',
      subtitle: '',
      description:
        'Vielseitiger Freischneider für Rasenkanten und Gehölzschnitt an schwer zugänglichen Stellen — auch als Fadenmäher einsetzbar.',
      includes: [],
      pricing: [
        { label: 'Halbtag', price: 35 },
        { label: 'Ganztag', price: 60 },
        { label: 'Weekend', price: 90 },
        { label: '1 Woche', price: 190 },
      ],
      note: 'Klingenaufsatz optional erhältlich',
    },
  ];
}
