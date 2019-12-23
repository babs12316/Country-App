import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgmCoreModule } from '@agm/core';
import { CountryDetailViewComponent } from './country-detail-view.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'; 

describe('CountryDetailViewComponent', () => {
  let component: CountryDetailViewComponent;
  let fixture: ComponentFixture<CountryDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyD1v8jsQQMdchuyVPfCIuCDghEkhGTaEUw',
          libraries: ['places']
        }),
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ CountryDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a method called ngOnInit', () => {
    expect(component.ngOnInit).toBeTruthy();
});

it('should return json from API', () => {
  let result=component.getCountry('AF');
  expect(result).length>0;
});
  
  it('should have a method called getCountries', () => {
     expect(component.getCountry).toBeTruthy();
});

it('should have a title Country Map', () => {
  expect(component.title).toBe('Country Map');
});

});
