import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { SITE_IMAGES } from '../../site-images';
import { SOCIAL_MEDIA } from '../../social-media';
import { GhInViewDirective } from '../../directives/gh-in-view.directive';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    FloatLabelModule,
    SelectModule,
    CheckboxModule,
    GhInViewDirective,
  ],
  providers: [MessageService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly messages = inject(MessageService);

  readonly img = SITE_IMAGES;
  readonly socialMedia = SOCIAL_MEDIA;

  readonly anfrageOptions = [
    { label: 'Allgemeine Anfrage', value: 'allgemein' },
    { label: 'Fensterreinigung', value: 'fenster' },
    { label: 'Aussenreinigung', value: 'aussen' },
    { label: 'Garten und Handwerk', value: 'garten' },
    { label: 'Andere Reinigungsangebote', value: 'andere' },
  ];

  readonly form = this.fb.nonNullable.group({
    anfrage: ['', Validators.required],
    vorname: ['', [Validators.required, Validators.minLength(2)]],
    name: ['', [Validators.required, Validators.minLength(2)]],
    plzOrt: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    kontaktTelefon: [false],
    kontaktWhatsapp: [false],
    kontaktEmail: [false],
    message: ['', [Validators.required, Validators.minLength(10)]],
    datenschutz: [false, Validators.requiredTrue],
  });

  submitted = false;

  submit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.messages.add({
        severity: 'warn',
        summary: 'Formular prüfen',
        detail: 'Bitte füllen Sie alle Pflichtfelder sinnvoll aus.',
      });
      return;
    }
    this.messages.add({
      severity: 'success',
      summary: 'Nachricht vorbereitet',
      detail:
        'In dieser Demo wird keine E-Mail versendet. Hinterlegen Sie später hier Ihre Backend-Anbindung.',
    });
    this.form.reset();
    this.submitted = false;
  }
}
