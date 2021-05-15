import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-pb-grid',
  templateUrl: './pb-grid.component.html',
  styleUrls: ['./pb-grid.component.css']
})
export class PbGridComponent implements OnInit {
  @ViewChild("pbGridColumnSelector") pbGridColumnSelector;
  @Input() pbGridColConfig = [];
  @Input() pbGridData = [];

  itemsPerPage: number = 5;
  p: number = 1;
  columnMapping = [];
  pbTableData = [];
  pbTableConfig = [];

  constructor() { }

  ngOnInit() {
    this.pbGridColConfig.forEach(x => {
      this.columnMapping.push(x.mappedBy);
      this.pbTableConfig.push(x);
    });
    this.pbTableConfig.every(x => x.showCol = true);
    this.pbGridData.forEach(x => {
      this.pbTableData.push(x);
    });
  }

  filterCalled(searchValue, mappedColumnName, filterType) {
    this.pbTableData = [];
    if (searchValue == "") {
      this.pbGridData.forEach(x => {
        this.pbTableData.push(x);
      })
    } else {
      if (filterType.toLowerCase() === "number") {
        this.pbTableData = this.pbGridData.filter(x =>
          x[mappedColumnName] === Number(searchValue)
        )
      } else if (filterType.toLowerCase() === "string")
        this.pbTableData = this.pbGridData.filter(x =>
          x[mappedColumnName].toLowerCase().includes(searchValue.toLowerCase())
        )
    }
  }

  columnSelectionToggle() {
    if (this.pbGridColumnSelector.nativeElement.classList.contains("show")) {
      this.pbGridColumnSelector.nativeElement.classList.remove("show");
    } else {
      this.pbGridColumnSelector.nativeElement.classList.add("show");
    }
  }

  numRowsChange(value) {
    if (value != 0) {
      this.itemsPerPage = value;
    } else {
      this.itemsPerPage = this.pbTableData.length;
    }
  }

}
