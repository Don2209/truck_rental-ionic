import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'
import { triangle, ellipse, square, home, heart, search, person, calendar, car, train, chatbubble, chatboxEllipsesOutline, calendarOutline, homeOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({home,calendarOutline,chatboxEllipsesOutline,personOutline,homeOutline,calendar,chatbubble,train,car,square,heart,search,person,triangle,ellipse});
  }
}
