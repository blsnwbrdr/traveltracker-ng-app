import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';

// COMPONENTS
import { ListComponent } from './list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

// INTERFACES
import { ICountry } from '../interfaces/country.model';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  const data: ICountry[] = [
    { name: 'A', continent: 'AA', latlng: [], checked: false },
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListComponent, HeaderComponent, FooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    el = de.nativeElement;
    component.countries = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display input and label', () => {
    const inputEl = el.querySelector('input') as HTMLInputElement;
    const labelEl = el.querySelector('label');
    expect(inputEl).toBeTruthy();
    expect(labelEl).toBeTruthy();
  });

  it('should call "onChange" method', () => {
    const inputEl = el.querySelector('input') as HTMLInputElement;
    spyOn(component, 'onChange');
    inputEl.dispatchEvent(new Event('change'));
    expect(component.onChange).toHaveBeenCalled();
  });

  it('should call "saveData" method', () => {
    const inputEl = el.querySelector('input') as HTMLInputElement;
    spyOn(component, 'saveData');
    inputEl.dispatchEvent(new Event('change'));
    expect(component.saveData).toHaveBeenCalled();
  });
});
