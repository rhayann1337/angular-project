import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  template: `
    <div class="mat-elevation-z8">
      <table mat-table class="full-width-table" matSort aria-label="Elements">
      
        <!-- Id Column -->
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>
          <td mat-cell *matCellDef="let row">{{row.id}}</td>
        </ng-container>
    
        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
          <td mat-cell *matCellDef="let row">{{row.name}}</td>
        </ng-container>

        <!-- Username Column -->
        <ng-container matColumnDef="username">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Username</th>
          <td mat-cell *matCellDef="let row">{{row.username}}</td>
        </ng-container>

        <!-- Email Column -->
        <ng-container matColumnDef="email">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>
          <td mat-cell *matCellDef="let row">{{row.email}}</td>
        </ng-container>
    
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    
      <mat-paginator #paginator
          [length]="dataSource?.data.length"
          [pageIndex]="0"
          [pageSize]="5"
          [pageSizeOptions]="[5, 25, 50, 100, 250]">
      </mat-paginator>
      <div fxLayout fxLayoutAlign="center center">
    <mat-form-field >
      <input matInput type="text" (keyup)="procurar($event.target.value)" placeholder="Procurar usuário">
    </mat-form-field>
  </div>
    </div>
    
  `,
  styles: [`
    .full-width-table {
      width: 100%;
      margin-top: 50px;
    }
    
  `]

})
export class UsersComponent implements AfterViewInit, OnInit {
  constructor(private userService: UsersService) { }


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<User>;
  dataSource: MatTableDataSource<User>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'username', 'email'];

  ngOnInit() {
    this.consultarUsuarios();
    this.dataSource = new MatTableDataSource([]);
  
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  consultarUsuarios() {
    this.userService.getUsers().subscribe
    (User => {
      this.dataSource.data = User || [];
    },
    );
  }

  public procurar = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
