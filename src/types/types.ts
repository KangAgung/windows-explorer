export interface Folder {
  id: number;
  name: string;
  parentId: string;
  files: File[];
  children: Folder[];
}

export interface File {
  id: number;
  name: string;
  folderId: number;
}