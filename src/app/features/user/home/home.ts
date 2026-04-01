import { Component, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
// import 'img-comparison-slider';
import {MatTabsModule} from '@angular/material/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
   standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.html',
  styleUrl: './home.scss',
    imports: [
MatTabsModule,
CarouselModule

  ],

})
export class Home {
customOptions = {
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
 autoplay: true,
  autoplayTimeout: 3000,

  smartSpeed: 1000,  
  autoplaySpeed: 1000,     
  slideTransition: 'ease-in-out',

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
};


customOptions1 = {
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
 autoplay: true,
  autoplayTimeout: 3000,

  smartSpeed: 1000,  
  autoplaySpeed: 1000,     
  slideTransition: 'ease-in-out',

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
};

customOptions2 = {
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
 autoplay: true,
  autoplayTimeout: 3000,

  smartSpeed: 1000,  
  autoplaySpeed: 1000,     
  slideTransition: 'ease-in-out',

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
};
 

}
