export function albumsReducer(albums = [], action) {
  switch (action.type) {
    case "SET_ALBUMS":
      return action.payload;
    default:
      return albums;
  }
}
export default albumsReducer;
