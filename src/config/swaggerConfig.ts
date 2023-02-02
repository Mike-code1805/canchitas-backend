import swaggerJsDoc from 'swagger-jsdoc';

export const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Projects API',
      version: '1.0.0',
      description: 'Express projects-tasks API',
    },
    servers: [
      {
        url: `http://localhost:5000`,
        description: 'Local server development',
      },
      {
        url: `https://canchitas-backend-production.up.railway.app`,
        description: 'Local server development',
      },
    ],
  },
  apis: ['src/docs/**/*.yaml', 'src/auth/swagger/*.yaml'],
};

export const swaggerSpecs = swaggerJsDoc(options);
