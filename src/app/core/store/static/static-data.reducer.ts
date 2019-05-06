import { StaticDataActions, EStaticDataActions } from './static-data.actions';
import { IStaticDataState, initialStaticDataState } from './static-data.state';

export function staticDataReducers (
    state = initialStaticDataState,
    action: StaticDataActions
): IStaticDataState  {
    switch (action.type) {
        case EStaticDataActions.GetStaticDataSucces: {
            return {
                ...state,
                data: action.payload
            };
        }
        default:
            return state;
    }
}