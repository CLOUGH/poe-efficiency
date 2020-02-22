export interface IStaticDataItem {
    id: string;
    text: string;
    image?: string;
}

export interface IStaticData {
  id: string;
  label: string;
  entries: IStaticDataItem[]
}
