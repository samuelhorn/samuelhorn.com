interface ImportMetaEnv {
  readonly NOTION_TOKEN: string;
  readonly NOTION_DATABASE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
