import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonAvatar, 
  IonLabel, IonSegment, IonSegmentButton, IonCard, IonCardHeader, IonCardContent, IonRefresherContent,
  IonGrid, IonRow, IonCol, IonItem, IonFooter, IonTabBar, IonTabButton, IonFab, IonFabButton
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonAvatar,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonRefresherContent,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonFooter,
    IonTabBar,
    IonTabButton,
    IonFab,         // Add IonFab here
    IonFabButton,   // Add IonFabButton here
    ExploreContainerComponent
  ],
})
export class Tab1Page {
  constructor() {}

  // Handle the segment change with proper typing
  segmentChanged(event: CustomEvent) {
    console.log('Segment changed to:', event.detail.value);
  }
}
