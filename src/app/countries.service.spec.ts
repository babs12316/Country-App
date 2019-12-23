import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from  '@angular/common/http';
import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
    ],
  }));

  it('should be created', () => {
    const service: CountriesService = TestBed.get(CountriesService);
    expect(service).toBeTruthy();
  });

  it('should have countriesUrl variable', () => {
    const service: CountriesService = TestBed.get(CountriesService);
    expect(service.countriesUrl).toBeTruthy();
  })
 
  it('should have countryUrl variable', () => {
    const service: CountriesService = TestBed.get(CountriesService);
    expect(service.countryUrl).toBeTruthy();
  })

 it('should have  getCountries function', () => {
    const service: CountriesService = TestBed.get(CountriesService);
    expect(service.getCountries).toBeTruthy();
  });

  it('should have getCountry function', () => {
    const service: CountriesService = TestBed.get(CountriesService);
    expect(service.getCountry).toBeTruthy();
  });

  it('should have getLatLng function', () => {
    const service: CountriesService = TestBed.get(CountriesService);
    expect(service.getLatLng).toBeTruthy();
  });

});
