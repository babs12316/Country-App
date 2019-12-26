import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgmCoreModule } from '@agm/core';
import { CountryDetailViewComponent } from './country-detail-view.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing'; 

describe('CountryDetailViewComponent', () => {
  let component: CountryDetailViewComponent;
  let testHost: CountryDetailViewComponent;
  let fixture: ComponentFixture<CountryDetailViewComponent>;
  let heroEl: HTMLElement;
    
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

  it('should create Component', () => {
    expect(component).toBeTruthy();
  });

  it("should have MAP", () => {
    fixture  = TestBed.createComponent(CountryDetailViewComponent);
    testHost = fixture.componentInstance;
    heroEl   = fixture.nativeElement.querySelector('.card-detail');
    fixture.detectChanges(); // trigger initial data binding
    expect(heroEl.innerHTML).toContain('agm-map');
  });


  it("should have Flag image", () => {
    fixture  = TestBed.createComponent(CountryDetailViewComponent);
    testHost = fixture.componentInstance;
    heroEl   = fixture.nativeElement.querySelector('.table');
    fixture.detectChanges(); // trigger initial data binding
    expect(heroEl.innerHTML).toContain('img');
  });

  });
