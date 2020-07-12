import { ACTION_TYPES } from "../../actions/posts";

export default function (state = [], action) {
  switch (action.type) {
    case ACTION_TYPES.POST_ADD:
    default:
      return state;
  }
}
