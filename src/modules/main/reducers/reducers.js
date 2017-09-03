export function fetchAllNovels (state, action) {
  return { ...state, novels: action.payload }
}

export function fetchOneNovel (state, action) {
  return { ...state, novel: action.payload }
}

export function fetchInfo (state, action) {
  return { ...state, info: action.payload }
}
