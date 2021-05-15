# Custom Grid component implementation

## Features
* Column wise data filtering (UI side)
* Column Selection
* Pagination
* Rows per page selection

## Notes
* The pagination uses ngx-pagination so that is required in project
* Bootstrap 4 is required as the design has been implemented using Booystrap 4
* Currently Column data filtering is only for text and number

## How to
* Two things are requred - 1. Config 2. Data
### Config
```javascript
  columnConfig = [
    {
      columnName: "Item number", //The Column name to show as table header
      mappedBy: "itemNum", // This will map the data fields
      filterType: "number", // If the column datatype is number then number filter
      filter : true // If set to false then the textbox below the table header for filtering won't appear
    },
    {
      columnName: "First Name",
      mappedBy: "firstName",
      filterType: "string", // If the column datatype is String then string filter
      filter : true
    }
  ];

tableData = [
    { itemNum: 1, firstName: 'John'}, //Must match the string specified in matchedBy
    { itemNum: 2, firstName: 'Jack'}
```

### Including the component
##### `<app-pb-grid [pbGridColConfig]="columnConfig" [pbGridData]="tableData"></app-pb-grid>`

![Alt text](screenshot1.png?raw=true "Screen")
"# angular6-pbGrid-master" 
