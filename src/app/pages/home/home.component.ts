import { Component, Input } from '@angular/core';

interface IsActiveMatchOptions {
  matrixParams: 'exact' | 'subset' | 'ignored';
  queryParams: 'exact' | 'subset' | 'ignored';
  paths: 'exact' | 'subset';
  fragment: 'exact' | 'ignored';
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
