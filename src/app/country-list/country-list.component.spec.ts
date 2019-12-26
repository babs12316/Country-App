import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { CountryListComponent } from "./country-list.component";

describe("CountryListComponent", () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;
  let testHost: CountryListComponent;
  let heroEl: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [CountryListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have Poplulation col", () => {
    fixture = TestBed.createComponent(CountryListComponent);
    testHost = fixture.componentInstance;
    heroEl = fixture.nativeElement.querySelector(".table");
    fixture.detectChanges(); // trigger initial data binding
    expect(heroEl.innerHTML).toContain("Population");
  });

  it("should have Country col", () => {
    fixture = TestBed.createComponent(CountryListComponent);
    testHost = fixture.componentInstance;
    heroEl = fixture.nativeElement.querySelector(".table");
    fixture.detectChanges(); // trigger initial data binding
    expect(heroEl.innerHTML).toContain("Country");
  });

  it("should have a method called ngOnInit", () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it("should have a method called getCountries", () => {
    expect(component.getCountries).toBeTruthy();
  });
});
