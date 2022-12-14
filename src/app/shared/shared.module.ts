import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ImageComponent } from './components/carousel/image/image.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [CarouselComponent, HeaderComponent, FooterComponent, ImageComponent],
  imports: [CommonModule],
  exports: [CarouselComponent, HeaderComponent, FooterComponent, ImageComponent],
})
export class SharedModule {}
