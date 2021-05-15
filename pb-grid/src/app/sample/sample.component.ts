import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  columnConfig = [
    {
      columnName: "Item number",
      mappedBy: "itemNum",
      filterType: "number",
      filter : true
    },
    {
      columnName: "First Name",
      mappedBy: "firstName",
      filterType: "string",
      filter : true
    }
  ];

  tableData = [
    { itemNum: 1, firstName: 'John'},
    { itemNum: 2, firstName: 'John1'},
    { itemNum: 3, firstName: 'John2'},
    { itemNum: 4, firstName: 'John3'},
    { itemNum: 5, firstName: 'John4'},
    { itemNum: 6, firstName: 'John5'},
    { itemNum: 7, firstName: 'John6'},
    { itemNum: 8, firstName: 'John7'},
    { itemNum: 9, firstName: 'John8'},
    { itemNum: 10, firstName: 'John9'},
    { itemNum: 11, firstName: 'Joh'},
    { itemNum: 12, firstName: 'Joh2'},
    { itemNum: 13, firstName: 'Joh3'},
    { itemNum: 14, firstName: 'Joh4'},
    { itemNum: 15, firstName: 'Joh5'},
    { itemNum: 16, firstName: 'Joh6'},
    { itemNum: 17, firstName: 'Joh7'},
  ]

  columnConfig1 = [
    {
      columnName: "Position",
      mappedBy: "position",
      filterType: "number",
      filter : true
    },
    {
      columnName: "First Name",
      mappedBy: "firstName",
      filterType: "string",
      filter : true
    },
    {
      columnName: "Last Name",
      mappedBy: "lastName",
      filterType: "string",
      filter : true
    },
    {
      columnName: "Email",
      mappedBy: "email",
      filterType: "string",
      filter : true
    }
  ];

  tableData1 = [
    { position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com' },
    { position: 2, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com' },
    { position: 3, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com' },
    { position: 4, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com' },
    { position: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com' },
    { position: 6, firstName: 'John1', lastName: 'Doe1', email: 'john1@gmail.com' },
    { position: 7, firstName: 'Mike1', lastName: 'Hussey1', email: 'mike1@gmail.com' },
    { position: 8, firstName: 'Ricky1', lastName: 'Hans1', email: 'ricky1@gmail.com' },
    { position: 9, firstName: 'Martin1', lastName: 'Kos1', email: 'martin1@gmail.com' },
    { position: 10, firstName: 'Tom1', lastName: 'Paisa1', email: 'tom1@gmail.com' },
    { position: 11, firstName: 'John2', lastName: 'Doe2', email: 'john2@gmail.com' },
    { position: 12, firstName: 'Mike2', lastName: 'Hussey2', email: 'mike2@gmail.com' },
    { position: 13, firstName: 'Ricky2', lastName: 'Hans2', email: 'ricky2@gmail.com' },
    { position: 14, firstName: 'Martin2', lastName: 'Kos2', email: 'martin2@gmail.com' },
    { position: 15, firstName: 'Tom2', lastName: 'Paisa2', email: 'tom2@gmail.com' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
