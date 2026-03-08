-- Healthcare Analytics Dashboard - Esquema SQL
-- Base de datos para métricas hospitalarias

-- Tabla de servicios/áreas hospitalarias
CREATE TABLE servicios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo VARCHAR(50),  -- Urgencias, Cirugía, Medicina Interna, etc.
    camas_totales INT,
    activo BOOLEAN DEFAULT true
);

-- Tabla de estancias (para calcular estancia media)
CREATE TABLE estancias (
    id SERIAL PRIMARY KEY,
    paciente_id INT,
    servicio_id INT REFERENCES servicios(id),
    fecha_ingreso TIMESTAMP,
    fecha_alta TIMESTAMP,
    dias_estancia INT GENERATED ALWAYS AS (
        EXTRACT(DAY FROM fecha_alta - fecha_ingreso)
    ) STORED,
    diagnostico VARCHAR(200)
);

-- Tabla de ocupación diaria
CREATE TABLE ocupacion_diaria (
    id SERIAL PRIMARY KEY,
    servicio_id INT REFERENCES servicios(id),
    fecha DATE,
    camas_ocupadas INT,
    camas_totales INT,
    tasa_ocupacion DECIMAL(5,2)  -- Porcentaje 0-100
);

-- Tabla de costes por servicio
CREATE TABLE costes_servicio (
    id SERIAL PRIMARY KEY,
    servicio_id INT REFERENCES servicios(id),
    mes DATE,
    coste_personal DECIMAL(12,2),
    coste_materiales DECIMAL(12,2),
    coste_equipamiento DECIMAL(12,2),
    coste_total DECIMAL(12,2),
    ingresos DECIMAL(12,2)
);

-- Tabla de indicadores de calidad
CREATE TABLE indicadores_calidad (
    id SERIAL PRIMARY KEY,
    servicio_id INT REFERENCES servicios(id),
    mes DATE,
    tasa_reingresos DECIMAL(5,2),      -- % reingresos 30 días
    satisfaccion_paciente DECIMAL(5,2), -- 0-100
    tiempo_espera_medio INT,           -- minutos
    tasa_infecciones DECIMAL(5,2),     -- % 
    mortalidad_ajustada DECIMAL(5,2)   -- ratio estandarizado
);

-- Vista: Estancia media por servicio
CREATE VIEW v_estancia_media AS
SELECT 
    s.nombre AS servicio,
    AVG(e.dias_estancia) AS estancia_media,
    COUNT(*) AS total_altas
FROM estancias e
JOIN servicios s ON e.servicio_id = s.id
WHERE e.fecha_alta IS NOT NULL
GROUP BY s.id, s.nombre;

-- Vista: Ocupación mensual
CREATE VIEW v_ocupacion_mensual AS
SELECT 
    s.nombre AS servicio,
    DATE_TRUNC('month', o.fecha) AS mes,
    AVG(o.tasa_ocupacion) AS ocupacion_promedio
FROM ocupacion_diaria o
JOIN servicios s ON o.servicio_id = s.id
GROUP BY s.id, s.nombre, DATE_TRUNC('month', o.fecha);
