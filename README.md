# Healthcare Analytics Dashboard

Dashboard de análisis con datos hospitalarios simulados. Demuestra capacidades en **datos**, **conocimiento sanitario** y **visualización**.

## Tecnologías

- **React** – Interfaz de usuario
- **Recharts** – Gráficos y visualizaciones
- **SQL** – Esquema de base de datos (ver `database/schema.sql`)

## Métricas

| Métrica | Descripción |
|--------|-------------|
| **Estancia media** | Días promedio por servicio |
| **Ocupación hospitalaria** | % de camas ocupadas (evolución mensual) |
| **Costes por servicio** | Costes vs ingresos por área |
| **Indicadores de calidad** | Satisfacción, reingresos, esperas, infecciones |

## Instalación

```bash
npm install
npm run dev
```

## Estructura

```
├── database/
│   └── schema.sql      # Esquema SQL (servicios, estancias, ocupación, costes, calidad)
├── src/
│   ├── components/     # Gráficos y KPIs
│   ├── data/
│   │   └── mockData.js # Datos simulados
│   └── App.jsx
└── package.json
```

## Build

```bash
npm run build
```
