import dotenv from "dotenv";
dotenv.config();
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import morgan from "morgan";
import cors from 'cors';
import express from 'express';
import './databases.js';
import sensorActuador from './models.js';
import http from 'http';
import { Server } from 'socket.io';

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Sensores y Actuadores',
      version: '1.0.0',
      description: 'API para gestionar datos de sensores y actuadores IoT',
      contact: {
        name: 'Soporte'
      },
      servers: [
        {
          url: 'http://192.168.220.31:3000'
        }
      ]
    },
    components: {
      schemas: {
        SensorActuador: {
          type: 'object',
          properties: {
            tipo: {
              type: 'string',
              description: 'Tipo de dispositivo (sensor o actuador)'
            },
            nombre: {
              type: 'string',
              description: 'Nombre del sensor o actuador'
            },
            valor: {
              type: 'string',
              description: 'Valor registrado por el sensor o actuador (campo flexible)'
            },
            unidad: {
              type: 'string',
              description: 'Unidad de medida del valor'
            },
            fechaHora: {
              type: 'string',
              format: 'date-time',
              description: 'Fecha y hora de la lectura'
            }
          }
        }
      }
    }
  },
  apis: ['./app.js'] // Archivo donde se encuentran las rutas
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

io.on('connection', (socket) => {
    console.log('Cliente conectado');
    socket.on("nuevoDato", async (data) => {
        try {
            const nuevoRegistro = new sensorActuador(data);
            await nuevoRegistro.save();
            io.emit("datosActualizados", nuevoRegistro);
        } catch (error) {
            console.error("Error al guardar el nuevo dato:", error);
        }
    });
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 3000);

// Configura Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /getAll:
 *   get:
 *     summary: Obtiene todos los datos de sensores y actuadores
 *     tags: [Sensores y Actuadores]
 *     responses:
 *       200:
 *         description: Lista de sensores y actuadores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SensorActuador'
 *       500:
 *         description: Error en la petición
 */
app.get("/getAll", async (req, res) => {
    try {
        const datos = await sensorActuador.find();
        res.json(datos);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error en la petición");
    }
});

/**
 * @swagger
 * /sensoreyactuadores/{id}:
 *   get:
 *     summary: Obtiene un sensor o actuador por su ID
 *     tags: [Sensores y Actuadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del sensor o actuador
 *     responses:
 *       200:
 *         description: Datos del sensor o actuador
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SensorActuador'
 *       404:
 *         description: Dato no encontrado
 *       500:
 *         description: Error al obtener el dato
 */
app.get("/sensoreyactuadores/:id", async (req, res) => {
    try {
        const dato = await sensorActuador.findById(req.params.id);
        if (!dato) {
            return res.status(404).send("Dato no encontrado");
        }
        res.json(dato);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el dato" });
    }
});

/**
 * @swagger
 * /sensoresyactuadores/buscar:
 *   get:
 *     summary: Busca sensores o actuadores por tipo y/o nombre
 *     tags: [Sensores y Actuadores]
 *     parameters:
 *       - in: query
 *         name: tipo
 *         schema:
 *           type: string
 *         description: Tipo de dispositivo a filtrar
 *       - in: query
 *         name: nombre
 *         schema:
 *           type: string
 *         description: Nombre del dispositivo a filtrar
 *     responses:
 *       200:
 *         description: Resultados de la búsqueda
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SensorActuador'
 *       500:
 *         description: Error al buscar los datos
 */
app.get("/sensoresyactuadores/buscar", async (req, res) => {
    try {
        const { tipo, nombre } = req.query;
        const filtro = {};
        if (tipo) filtro.tipo = tipo;
        if (nombre) filtro.nombre = nombre;
        
        const resultados = await sensorActuador.find(filtro);
        res.json(resultados);
    } catch (error) {
        res.status(500).json({ error: "Error al buscar los datos" });
    }
});

/**
 * @swagger
 * /sensoresyactuadores:
 *   post:
 *     summary: Crea un nuevo registro de sensor o actuador
 *     tags: [Sensores y Actuadores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SensorActuador'
 *     responses:
 *       201:
 *         description: Registro creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SensorActuador'
 *       400:
 *         description: Error al crear el dato
 */
app.post("/sensoresyactuadores", async (req, res) => {
    try {
        const nuevoRegistro = new sensorActuador(req.body);
        await nuevoRegistro.save();
        res.status(201).json(nuevoRegistro);
    } catch (error) {
        res.status(400).json({ error: "Error al crear el dato" });
    }
});

/**
 * @swagger
 * /sensoresyactuadores/{id}:
 *   put:
 *     summary: Actualiza un sensor o actuador existente
 *     tags: [Sensores y Actuadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del sensor o actuador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SensorActuador'
 *     responses:
 *       200:
 *         description: Registro actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SensorActuador'
 *       404:
 *         description: Dato no encontrado
 *       400:
 *         description: Error al actualizar el dato
 */
app.put("/sensoresyactuadores/:id", async (req, res) => {
    try {
        const actualizado = await sensorActuador.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!actualizado) {
            return res.status(404).send("Dato no encontrado");
        }
        res.json(actualizado);
    } catch (error) {
        res.status(400).json({ error: "Error al actualizar el dato" });
    }
});

/**
 * @swagger
 * /sensoresyactuadores/{id}:
 *   delete:
 *     summary: Elimina un sensor o actuador
 *     tags: [Sensores y Actuadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del sensor o actuador
 *     responses:
 *       200:
 *         description: Registro eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *       404:
 *         description: No encontrado
 *       500:
 *         description: Error al eliminar el dato
 */
app.delete("/sensoresyactuadores/:id", async (req, res) => {
    try {
        const eliminado = await sensorActuador.findByIdAndDelete(req.params.id);
        if (!eliminado) return res.status(404).json({ error: "No encontrado" });
        io.emit("datoEliminado", eliminado);
        res.json({ mensaje: "Registro Eliminado" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el dato" });
    }
});

export default app;