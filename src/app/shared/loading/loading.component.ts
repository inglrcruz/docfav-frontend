import { Component } from '@angular/core';
import { LoadingService } from '../../utilities/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  public status: Boolean = false;

  constructor(private loadingService: LoadingService) {
    this.loadingService.loadingObservable().subscribe(resp => {
      this.status = resp
    })
  }

}
