export interface IStaticDataItem {
    id: string;
    text: string;
    image: string;
}

export interface IStaticData {
    currency?: IStaticDataItem[];
    fragments?: IStaticDataItem[];
    scarabs?: IStaticDataItem[];
    resonators?: IStaticDataItem[];
    fossils?: IStaticDataItem[];
    vials?: IStaticDataItem[];
    nets?: IStaticDataItem[];
    leaguestones?: IStaticDataItem[];
    essences?: IStaticDataItem[];
    cards?: IStaticDataItem[];
    maps?: IStaticDataItem[];
    shaped_maps?: IStaticDataItem[];
    elder_maps?: IStaticDataItem[];
    misc?: IStaticDataItem[];
}