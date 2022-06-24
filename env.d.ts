/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_MAIN_TOKEN: string
  readonly VITE_TEST_GROUP_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}