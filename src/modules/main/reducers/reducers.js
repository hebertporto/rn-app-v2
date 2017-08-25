export function fetchAllNovels(state, action) {
  return { ...state, novels: action.payload };
}

export function fetchInfo(state, action) {
  return { ...state, info: action.payload };
}

export default {};
