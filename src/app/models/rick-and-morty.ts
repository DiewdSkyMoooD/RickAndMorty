
export interface IRepsonsePerson extends IPersonBasic {
    id: number;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface IPersonBasic {
    name: string;
    status: string;
    type: string;
    species: string;
    gender: string;
}

export interface Location {
    name: string;
    url: string;
}

export interface IResponseLocation extends ILocationBasic {
    id: number;
    residents: string[];
    url: string;
    created: string;
}

export interface ILocationBasic {
    name: string;
    type: string;
    dimension: string;
}

export interface IResponseEpisode extends IEpisodeBasic {
    id: number;
    characters: string[];
    url: string;
    created: string;
}

export interface IEpisodeBasic {
    name: string;
    air_date: string;
    episode: string;
}
