import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

declare var Celestial: any; // 👈 Importar de forma global desde scripts

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.waitForCelestial().then(() => {
      // Configuración del mapa
      Celestial.display({
        container: "map",
        width: 280,
        projection: "stereographic",
        geopos: [59.9310584, 30.3609097],
        center: [14, 59],
        orientationfixed: true,
        background: { fill: "#000000", stroke: "transparent", opacity: 1 },
        adaptable: false,
        interactive: false,
        form: false,
        location: false,
        controls: false,
        lang: "lat",
        datapath: "https://ofrohn.github.io/data/",
        stars: {
          show: true,
          limit: 7,
          colors: false,
          style: { fill: "#ffffff", opacity: 1 },
          names: false,
          proper: false,
          desig: true,
          namelimit: 4,
          propernamelimit: 1.5,
          size: 3,
          exponent: -0.2,
          data: "stars.6.json",
        },
        dsos: {
          show: false,
          limit: 6,
          names: false,
          desig: false,
          namelimit: 4,
          size: null,
          exponent: 1.4,
          data: "dsos.bright.json",
        },
        constellations: {
          show: false,
          names: false,
          desig: false,
          namesType: "name",
          namestyle: {
            fill: "#f4f4f4",
            align: "center",
            baseline: "middle",
            opacity: 1,
            font: [`bold 6px Poppins`, `bold 6px Poppins`, `bold 6px Poppins`],
          },
          lines: true,
          linestyle: { stroke: "#f8f9fa", width: 0.5, opacity: 0.9 },
          bounds: false,
          boundstyle: {
            stroke: "#cccc00",
            width: 1,
            opacity: 0.8,
            dash: [2, 4],
          },
        },
        mw: { show: false, style: { fill: "#ffffff", opacity: "0.15" } },
        lines: {
          graticule: {
            show: true,
            stroke: "#6c757d",
            width: 0.4,
            opacity: 0.8,
            lon: { pos: [""], fill: "#eee", font: `0.000000000001px Poppins` },
            lat: { pos: [""], fill: "#eee", font: `0.000000000001px Poppins` },
          },
          equatorial: {
            show: false,
            stroke: "#aaaaaa",
            width: 1.3,
            opacity: 0.7,
          },
          ecliptic: {
            show: false,
            stroke: "#66cc66",
            width: 1.3,
            opacity: 0.7,
          },
          galactic: {
            show: false,
            stroke: "#cc6666",
            width: 1.3,
            opacity: 0.7,
          },
          supergalactic: {
            show: false,
            stroke: "#cc66cc",
            width: 1.3,
            opacity: 0.7,
          },
        },
        settimezone: false,
      });
    });
  }

  private waitForCelestial(): Promise<void> {
    return new Promise(resolve => {
      const check = () => {
        if ((window as any).Celestial) {
          resolve();
        } else {
          setTimeout(check, 50);
        }
      };
      check();
    });
  }
}
