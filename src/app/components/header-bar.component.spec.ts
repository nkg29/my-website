import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import * as $ from 'jquery';

import { HeaderBarComponent } from './header-bar.component';

// credit to: https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value for providing this clean
// one-line function to convert rgb to hex
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

  it('should have the text (nkg29)', () => {
    const fixture = TestBed.createComponent(HeaderBarComponent);
    const app = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.textContent).toEqual('nkg29');
  });

  // credit to: https://stackoverflow.com/questions/57990961/how-to-test-style-background-color-attribute for helping me figure
  // out how to test css attributes
  it('should have home link (nkg29) with custom color', () => {
    const fixture = TestBed.createComponent(HeaderBarComponent);
    const customColor = '#ba55d3';
    fixture.detectChanges();
    // const colorEl: HTMLElement = fixture.debugElement.query(By.css('#home')).nativeElement;
    expect($('#home').css('color')).toBeTruthy();
    const hexColor = rgb2hex($('#home').css('color'))
    expect(hexColor).toBe(customColor);
  });

  const leftMouseButton = 0;
  it('should redirect to the same page when clicking on the home link (nkg29)', () => {
    const fixture = TestBed.createComponent(HeaderBarComponent);
    const link = fixture.debugElement.query(By.css('#home'));
    link.triggerEventHandler('click', { button: leftMouseButton });
    
;  })
});