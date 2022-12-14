import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { ImageComponent } from './image/image.component';

class Timer {
  private timerObj: number | undefined;
  private time: number;
  private fn: Function;

  constructor(fn: Function, time: number) {
    this.timerObj = setInterval(fn, time);
    this.time = time;
    this.fn = fn;
  }

  public stop = () => {
    if (this.timerObj) {
      clearInterval(this.timerObj);
      this.timerObj = undefined;
    }
    return this;
  }

  public start = () => {
    if (!this.timerObj) {
      this.stop();
      this.timerObj = setInterval(this.fn, this.time);
    }
    return this;
  }

  public reset = (newT: number) => {
    this.time = newT;
    return this.stop().start();
  }
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterContentInit {

  @ContentChildren(ImageComponent) content: QueryList<ImageComponent> = new QueryList();

  public images: any[] = [];
  private timer: Timer | undefined;

  ngAfterContentInit(): void {
    this.images = this.content?.map((image: ImageComponent, index: number) => {
      return {
        index,
        ...image,
        active: false,
      }
    });
    if (this.images) {
      this.images[0].active = true
    }

    this.timer = new Timer(() => { this.next() }, 10 * 1000);
  }

  prev(): void {
    const activeImage = this.images?.filter(image => image.active)[0];
    if (this.images) {
      this.setSlide((this.images?.length + activeImage.index - 1) % this.images?.length);
    }
  }

  next(): void {
    const activeImage = this.images?.filter(image => image.active)[0];
    if (this.images) {
      this.setSlide((this.images?.length + activeImage.index + 1) % this.images?.length);
    }
  }

  setSlide(index: number): void {
    const activeImage = this.images?.filter(image => image.active)[0];
    const prevImage = this.images ? this.images[index] : null;
    prevImage.active = true;
    activeImage.active = false;
    this.timer?.reset(10 * 1000);
  }

}
