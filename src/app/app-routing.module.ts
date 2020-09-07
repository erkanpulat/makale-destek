import { GraphicPageComponent } from './components/graphic-page/graphic-page.component';
import { StatisticsPageComponent } from './components/statistics-page/statistics-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TranslationPageComponent } from './components/translation-page/translation-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'ceviri', component: TranslationPageComponent },
  { path: 'istatistik', component: StatisticsPageComponent },
  { path: 'grafik', component: GraphicPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['']);
    }
  }
}
