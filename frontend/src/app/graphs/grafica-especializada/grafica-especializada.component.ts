import { Component } from '@angular/core';

import * as am5 from "@amcharts/amcharts5/index";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import  am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-grafica-especializada',
  templateUrl: './grafica-especializada.component.html',
  styleUrl: './grafica-especializada.component.css'
})
export class GraficaEspecializadaComponent  {

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  private createChart(): void {
    // Create root element
    let root = am5.Root.new("chartdiv");
  
    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);
  
    let container = root.container.children.push(
      am5.ZoomableContainer.new(root, {
        width: am5.p100,
        height: am5.p100,
        wheelable: true,
        pinchZoom: true
      })
    );
  
    let zoomTools = container.children.push(am5.ZoomTools.new(root, {
      target: container
    }));
  
    // Add title
    container.contents.children.push(am5.Label.new(root, {
      text: "COFFEE\n[#63bdc5]AROMA[/]\n[#63bdc5]WHEEL[/]",
      textAlign: "center",
      x: am5.p50,
      y: am5.p50,
      centerX: am5.p50,
      centerY: am5.p50,
      fontSize: 25,
      fontWeight: "500",
      fill: am5.color(0x385d63)
    }));
  
    // Add credits label
    let credits = container.children.push(am5.Label.new(root, {
      text: "Inspired by\n[bold]CoffeeMind",
      x: am5.p100,
      y: 0,
      centerX: am5.p100,
      centerY: 0,
      fontSize: 15,
      fill: am5.color(0x385d63),
      cursorOverStyle: "pointer",
      background: am5.Rectangle.new(root, {
        fill: am5.color(0x000000),
        fillOpacity: 0
      })
    }));
  
    credits.events.on("click", () => window.open("https://coffee-mind.com/product/coffeemind-aroma-wheel/"));
  
    // Create the Sunburst series
    let series = container.contents.children.push(am5hierarchy.Sunburst.new(root, {
      singleBranchOnly: true,
      downDepth: 2,
      initialDepth: 2,
      topDepth: 1,
      innerRadius: 100,
      valueField: "value",
      categoryField: "name",
      childDataField: "children"
    }));
  
    series.nodes.template.setAll({
      tooltipText: "{category}"
    });
  
    series.slices.template.setAll({
      templateField: "nodeSettings"
    });
  
    series.labels.template.setAll({
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
      baseRadius: am5.p100,
      centerX: am5.p100,
      textAlign: "start"
    });
  
    // Correct data format for Sunburst chart
    let data = [{
      name: "COFFEE",
      nodeSettings: { fill: am5.color(0xaaaaaa) },
      children: [
        {
          name: "Berry",
          nodeSettings: { fill: am5.color(0x72588a) },
          children: [
            { name: "Strawberry", nodeSettings: { fill: am5.color(0xbb3b4b) }, value: 1 },
            { name: "Raspberry", nodeSettings: { fill: am5.color(0xbc366a) }, value: 1 },
            { name: "Blueberry", nodeSettings: { fill: am5.color(0x565585) }, value: 1 },
            { name: "Black currant", nodeSettings: { fill: am5.color(0x473e58) }, value: 1 },
            { name: "Strawberry", nodeSettings: { fill: am5.color(0x2e3245) }, value: 1 }
          ]
        },
        { value: 0.1, nodeSettings: { fill: am5.color(0xffffff) } },
        {
          name: "Fruity",
          nodeSettings: { fill: am5.color(0xe16858) },
          children: [
            { name: "Pear", nodeSettings: { fill: am5.color(0xbbc395) }, value: 1 },
            { name: "Green apple", nodeSettings: { fill: am5.color(0xb7c56e) }, value: 1 },
            { name: "Red apple", nodeSettings: { fill: am5.color(0xb56963) }, value: 1 },
            { name: "Lime", nodeSettings: { fill: am5.color(0x79b16e) }, value: 1 },
            { name: "Lemon", nodeSettings: { fill: am5.color(0xfbe83a) }, value: 1 },
            { name: "Bergamot", nodeSettings: { fill: am5.color(0x82b46d) }, value: 1 },
            { name: "Orange", nodeSettings: { fill: am5.color(0xd77639) }, value: 1 },
            { name: "Mandarin", nodeSettings: { fill: am5.color(0xe3834d) }, value: 1 },
            { name: "Apricot", nodeSettings: { fill: am5.color(0xd49471) }, value: 1 },
            { name: "Peach", nodeSettings: { fill: am5.color(0xe7a56e) }, value: 1 },
            { name: "Mango", nodeSettings: { fill: am5.color(0xefd245) }, value: 1 },
            { name: "Pineapple", nodeSettings: { fill: am5.color(0xf2e08f) }, value: 1 },
            { name: "Honeydew melon", nodeSettings: { fill: am5.color(0xeed98a) }, value: 1 }
          ]
        },
        { value: 0.1, nodeSettings: { fill: am5.color(0xffffff) } },
        // Add more branches as needed
      ]
    }];
  
    // Set the data to the series
    series.data.setAll(data);
    series.set("selectedDataItem", series.dataItems[0]);
  
    // Animate the chart elements
    series.appear(1000, 100);
  }
  
}
