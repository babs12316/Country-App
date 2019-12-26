import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let testHost: WelcomeComponent;
  let heroEl: HTMLElement;
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have Map image", () => {
    fixture  = TestBed.createComponent(WelcomeComponent);
    testHost = fixture.componentInstance;
    heroEl   = fixture.nativeElement.querySelector('.welcome');
    fixture.detectChanges(); // trigger initial data binding
    expect(heroEl.innerHTML).toContain('worldmap.jpg');
  });

});
