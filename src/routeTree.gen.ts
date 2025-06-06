/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as TinderVagasIndexImport } from './routes/tinder-vagas/index'
import { Route as PerfilIndexImport } from './routes/perfil/index'
import { Route as NotificacoesIndexImport } from './routes/notificacoes/index'
import { Route as EntrevistaIndexImport } from './routes/entrevista/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TinderVagasIndexRoute = TinderVagasIndexImport.update({
  id: '/tinder-vagas/',
  path: '/tinder-vagas/',
  getParentRoute: () => rootRoute,
} as any)

const PerfilIndexRoute = PerfilIndexImport.update({
  id: '/perfil/',
  path: '/perfil/',
  getParentRoute: () => rootRoute,
} as any)

const NotificacoesIndexRoute = NotificacoesIndexImport.update({
  id: '/notificacoes/',
  path: '/notificacoes/',
  getParentRoute: () => rootRoute,
} as any)

const EntrevistaIndexRoute = EntrevistaIndexImport.update({
  id: '/entrevista/',
  path: '/entrevista/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/dashboard/',
  path: '/dashboard/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof rootRoute
    }
    '/entrevista/': {
      id: '/entrevista/'
      path: '/entrevista'
      fullPath: '/entrevista'
      preLoaderRoute: typeof EntrevistaIndexImport
      parentRoute: typeof rootRoute
    }
    '/notificacoes/': {
      id: '/notificacoes/'
      path: '/notificacoes'
      fullPath: '/notificacoes'
      preLoaderRoute: typeof NotificacoesIndexImport
      parentRoute: typeof rootRoute
    }
    '/perfil/': {
      id: '/perfil/'
      path: '/perfil'
      fullPath: '/perfil'
      preLoaderRoute: typeof PerfilIndexImport
      parentRoute: typeof rootRoute
    }
    '/tinder-vagas/': {
      id: '/tinder-vagas/'
      path: '/tinder-vagas'
      fullPath: '/tinder-vagas'
      preLoaderRoute: typeof TinderVagasIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/entrevista': typeof EntrevistaIndexRoute
  '/notificacoes': typeof NotificacoesIndexRoute
  '/perfil': typeof PerfilIndexRoute
  '/tinder-vagas': typeof TinderVagasIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/entrevista': typeof EntrevistaIndexRoute
  '/notificacoes': typeof NotificacoesIndexRoute
  '/perfil': typeof PerfilIndexRoute
  '/tinder-vagas': typeof TinderVagasIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/entrevista/': typeof EntrevistaIndexRoute
  '/notificacoes/': typeof NotificacoesIndexRoute
  '/perfil/': typeof PerfilIndexRoute
  '/tinder-vagas/': typeof TinderVagasIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard'
    | '/entrevista'
    | '/notificacoes'
    | '/perfil'
    | '/tinder-vagas'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/dashboard'
    | '/entrevista'
    | '/notificacoes'
    | '/perfil'
    | '/tinder-vagas'
  id:
    | '__root__'
    | '/'
    | '/dashboard/'
    | '/entrevista/'
    | '/notificacoes/'
    | '/perfil/'
    | '/tinder-vagas/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardIndexRoute: typeof DashboardIndexRoute
  EntrevistaIndexRoute: typeof EntrevistaIndexRoute
  NotificacoesIndexRoute: typeof NotificacoesIndexRoute
  PerfilIndexRoute: typeof PerfilIndexRoute
  TinderVagasIndexRoute: typeof TinderVagasIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardIndexRoute: DashboardIndexRoute,
  EntrevistaIndexRoute: EntrevistaIndexRoute,
  NotificacoesIndexRoute: NotificacoesIndexRoute,
  PerfilIndexRoute: PerfilIndexRoute,
  TinderVagasIndexRoute: TinderVagasIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard/",
        "/entrevista/",
        "/notificacoes/",
        "/perfil/",
        "/tinder-vagas/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx"
    },
    "/entrevista/": {
      "filePath": "entrevista/index.tsx"
    },
    "/notificacoes/": {
      "filePath": "notificacoes/index.tsx"
    },
    "/perfil/": {
      "filePath": "perfil/index.tsx"
    },
    "/tinder-vagas/": {
      "filePath": "tinder-vagas/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
