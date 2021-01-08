import { Component, OnInit, ViewChild, } from '@angular/core';
import { Foto } from '../models/foto';
import { FotosService } from '../services/fotos.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html'
})
export class FotosComponent implements OnInit {

  data = [];
  public fotos: Foto[] = [];

  constructor(private fotosService: FotosService) { }

  page = 0;
  size = 5000;

  ngOnInit(): void {
    this.fotosService.getFotos()
    .subscribe(
      fotos => {
        this.fotos = fotos;
        console.log(fotos);
      },
      error => console.log(error)
      ),
      this.getData({ pageindex: this.page, pageSize: this.size });
      this.data = this.fotos;

  }

  getData(obj: any) {
    let index = 0,
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.fotos = this.fotos.filter(() => {
      index++;
      return index > startingIndex && index <= endingIndex ? true : false;
    });
  }



}
