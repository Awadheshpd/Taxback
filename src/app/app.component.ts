import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from './data.service';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'taxback';
  products: any;

  constructor(public dialog: MatDialog, private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }
  openDialog(product: any) {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getData() {
    this.dataService.getData().subscribe(res => {
      this.products = res;
    }, error => {
      console.log('ERROR: ', error);
    })
  }
}
