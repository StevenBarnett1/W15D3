import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';
const LIKE = 'produce/LIKE';

export const getAllProduce = (state) => Object.values(state.produce);

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData
  }
}

export const toggleLike = (id) => {
  return {
    type: LIKE,
    id
  }
}

const produceReducer = (state = {}, action) => {
  const newState = {...state};
  switch (action.type) {
    case POPULATE:
      action.produce.forEach(produce => {
        newState[produce.id] = produce;
      });
      return newState
    case LIKE:
      newState[action.id].liked = !newState[action.id].liked;
      return newState;
    default:
      return state;
  }
};

export default produceReducer;
