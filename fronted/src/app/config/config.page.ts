import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
  standalone: false,
})
export class ConfigPage implements OnInit {
  form!: FormGroup;
  saved = false;

  constructor(
    private fb: FormBuilder,
    private configService: ConfigService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      apiBaseUrl: [this.configService.apiBaseUrl, [Validators.required]],
    });
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.configService.updateApiBaseUrl(this.form.value.apiBaseUrl);
    this.saved = true;
    setTimeout(() => (this.saved = false), 2000);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
