import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-oljan',
  templateUrl: './oljan.component.html',
  styleUrls: ['./oljan.component.scss']
})
export class OljanComponent implements OnInit {

  private data: Data[] = [
    {name: '2018-01-09', value: 1475},
    {name: '2018-01-24', value: 1280},
    {name: '2018-02-11', value: 1070},
    {name: '2018-03-03', value: 750},
    {name: '2018-04-30', value: 400},
    {name: '2018-05-01', value: 3900},
    {name: '2018-05-21', value: 3570},
    {name: '2018-09-02', value: 3570},
    {name: '2018-11-05.', value: 3380},
    {name: '2018-11-17', value: 3280},
    {name: '2018-12-01', value: 3120},
    {name: '2019-01-03', value: 2620},
    {name: '2019-01-31', value: 2320},
    {name: '2019-02-03', value: 2000},
    {name: '2019-03-08', value: 1950},
    {name: '2019-03-17', value: 1880},
  ];

  private availableData: Data[] = [];
  private usageData: Data[] = [];

  public multi;

  view: any[] = [700, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = false;
  xAxisLabel = 'Datum';
  showYAxisLabel = true;
  yAxisLabel = 'Liter';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  ngOnInit() {
    this.availableData = this.data;

    this.data.forEach((value, index) => {
      const used = index === 0 ? 0 : this.data[index - 1].value - value.value;
      this.usageData.push({
        name: value.name,
        value: Math.max(used, 0)
      });
    });

    this.multi = [
      {
        name: 'Tillgångar',
        series: this.availableData
      },
      {
        name: 'Förbrukning',
        series: this.usageData
      }
    ];
  }
}

interface Data {
  name: string;
  value: number;
}

