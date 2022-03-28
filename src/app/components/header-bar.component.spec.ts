import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import * as $ from 'jquery';

import { HeaderBarComponent } from './header-bar.component';

const rgb2hex = (rgb : string) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)?.slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

describe('HeaderBarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderBarComponent
      ],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  it('should create the header bar', () => {
    const fixture = TestBed.createComponent(HeaderBarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the home link (nkg29)', () => {
    const fixture = TestBed.createComponent(HeaderBarComponent);
    const app = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.textContent).toEqual('nkg29');
  });

  it('should have home link (nkg29) with medium orchid color', () => {
    const fixture = TestBed.createComponent(HeaderBarComponent);
    const customColor = '#ba55d3';
    fixture.detectChanges();
    // const colorEl: HTMLElement = fixture.debugElement.query(By.css('#home')).nativeElement;
    expect($('#home').css('color')).toBeTruthy();
    const hexColor = rgb2hex($('#home').css('color'))
    expect(hexColor).toBe(customColor);
  });
});