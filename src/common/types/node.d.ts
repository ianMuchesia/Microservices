// src/common/types/node.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test';
      readonly SERVER_PORT: string;
      readonly TYPEORM_CONNECTION: string;
      readonly TYPEORM_HOST: string;
      readonly TYPEORM_USERNAME: string;
      readonly TYPEORM_PASSWORD: string;
      readonly TYPEORM_DATABASE: string;
      readonly TYPEORM_PORT: string;
      readonly TYPEORM_LOGGING: string;
      readonly TYPEORM_ENTITIES: string;
      readonly TYPEORM_MIGRATIONS: string;
      readonly ROUTE_GLOBAL_PREFIX: string;
      readonly JWT_SECRET: string;
      readonly TWO_FACTOR_AUTHENTICATION_APP_NAME: string;
      readonly JWT_REFRESH_TOKEN_SECRET: string;
      readonly JWT_REFRESH_TOKEN_EXPIRATION_TIME: string;
      readonly POSTGRES_USER: string;
      readonly POSTGRES_PASSWORD: string;
      readonly POSTGRES_DB: string;
      readonly POSTGRES_HOST: string;
      readonly POSTGRES_PORT: string;
      
    }
  }
  