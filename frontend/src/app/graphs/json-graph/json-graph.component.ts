import { Component, OnInit,AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


@Component({
  selector: 'app-json-graph',
  imports: [],
  templateUrl: './json-graph.component.html',
  styleUrl: './json-graph.component.css',
})
export class JsonGraphComponent implements OnInit, AfterViewInit {
  
  jsonData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadJsonData();
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  private loadJsonData(): void {
    this.http.get<any[]>('/app/assets/data.json').subscribe(data => {
      this.jsonData = data;
      this.createChart();
    }, error => {
      console.error('Error cargando el JSON:', error);
    });
  }

  private createChart(): void {
    if (!this.jsonData.length) return;

    let root = am5.Root.new("chartdiv4");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, { panX: false, panY: false, wheelX: "none", wheelY: "none" })
    );

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "tipo",
      renderer: am5xy.AxisRendererX.new(root, { minGridDistance: 30 })
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    }));

    let series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Cantidad",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "cantidad",
      categoryXField: "tipo",
      tooltip: am5.Tooltip.new(root, { labelText: "{valueY}" })
    }));

    series.columns.template.setAll({ cornerRadiusTL: 10, cornerRadiusTR: 10, strokeOpacity: 0 });

    let aggregatedData = this.aggregateData();
    series.data.setAll(aggregatedData);
    xAxis.data.setAll(aggregatedData);

    series.appear(1000);
    chart.appear(1000, 100);
  }

  private aggregateData(): { tipo: string; cantidad: number }[] {
    const counts: { [key: string]: number } = {};

    this.jsonData.forEach((item) => {
      counts[item.tipo] = (counts[item.tipo] || 0) + 1;
    });

    return Object.keys(counts).map((key) => ({ tipo: key, cantidad: counts[key] }));
  }
}