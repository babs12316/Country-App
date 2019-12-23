import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CountriesService {
  public countriesUrl = "https://restcountries.eu/rest/v2/all"; // URL to web api
  public countryUrl = "https://restcountries.eu/rest/v2/alpha/"; // URL to web api

  constructor(private httpClient: HttpClient) {}

  public getCountries(): Observable<any> {
    let subject: Subject<any> = new Subject();

    this.httpClient.get(this.countriesUrl).subscribe((results: any) => {
      console.log(results);

      subject.next(results);
    });

    return subject;
  }
  public getCountry(countryCode: string): Observable<any> {
    let subject: Subject<any> = new Subject();

    this.httpClient
      .get(this.countryUrl + countryCode)
      .subscribe((results: any) => {
        console.log(results);

        subject.next(results);
      });

    return subject;
  }

  public getLatLng(countryCode: string): Observable<any> {
    let subject: Subject<any> = new Subject();

    this.httpClient
      .get(this.countryUrl + countryCode)
      .subscribe((results: any) => {
        console.log(results.latlng[0]);

        subject.next(results.latlng[0]);
      });

    return subject;
  }
}
