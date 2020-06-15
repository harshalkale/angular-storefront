import { Injectable } from '@angular/core';
import { DashboardRoute } from './dashboard-route';

@Injectable({
  providedIn: 'root'
})
export class DashboardRouteService {
  routes: DashboardRoute[] = [
    {
      id: 1,
      name: 'Products',
      link: 'products',
      icon: 'package'
    },
  ];
  constructor() { }


}
