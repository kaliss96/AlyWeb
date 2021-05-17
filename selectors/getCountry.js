import { heroes } from '../data/heroes';

export const getCountryById = ( id ) => {
    return heroes.find( hero => hero.id === id );
}
