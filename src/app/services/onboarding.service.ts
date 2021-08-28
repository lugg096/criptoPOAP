import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  constructor(
    private _http: HttpClient,
    private navCtrl: NavController
  ) { }

  
}