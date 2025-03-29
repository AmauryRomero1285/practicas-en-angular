import { Component, OnInit, OnDestroy, ElementRef, ViewChild  } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-api-graph',
  imports: [],
  templateUrl: './api-graph.component.html',
  styleUrl: './api-graph.component.css'
})
export class ApiGraphComponent implements OnInit, OnDestroy {
  @ViewChild('chartdiv', { static: true }) chartDiv!: ElementRef;
  private root!: am5.Root;
  private chartData: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadChart();

    // Obtener datos de la API
    this.apiService.getAll().subscribe(data => {
      this.chartData = data.map(item => ({
        name: item.valor,
        value: item.valor === 'Encendido' ? 1 : 0 
      }));
      this.updateChart();
    });
  }

  loadChart() {
    this.root = am5.Root.new(this.chartDiv.nativeElement);
    this.root.setThemes([am5themes_Animated.new(this.root)]);

    let chart = this.root.container.children.push(
      am5xy.XYChart.new(this.root, { panX: true, panY: true, wheelX: "none", wheelY: "none" })
    );

    let xRenderer = am5xy.AxisRendererX.new(this.root, { minorGridEnabled: true, minGridDistance: 60 });
    xRenderer.grid.template.set("visible", false);

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(this.root, {
      categoryField: "name",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(this.root, { labelText: "{name}" })
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(this.root, {
      min: 0,
      max: 1,
      renderer: am5xy.AxisRendererY.new(this.root, {})
    }));

    let series = chart.series.push(am5xy.LineSeries.new(this.root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      categoryXField: "name",
      tooltip: am5.Tooltip.new(this.root, { labelText: "{valueY}" })
    }));

    series.strokes.template.setAll({
      strokeWidth: 3,
      stroke: am5.color(0x0f4c75)
    });

    this.updateChart();
  }

  updateChart() {
    if (this.root) {
      let chart = this.root.container.children.getIndex(0) as am5xy.XYChart;
      let series = chart.series.getIndex(0) as am5xy.LineSeries;
      let xAxis = chart.xAxes.getIndex(0) as am5xy.CategoryAxis<am5xy.AxisRendererX>;


      xAxis.data.setAll(this.chartData);
      series.data.setAll(this.chartData);
    }
  }

  ngOnDestroy(): void {
    if (this.root) {
      this.root.dispose();
    }
  }
}