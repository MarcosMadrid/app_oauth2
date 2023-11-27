/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { withViewTransitions } from '@angular/router';

const app = appConfig;
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
