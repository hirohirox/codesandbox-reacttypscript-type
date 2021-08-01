import { TodoType } from "./types/todo";
import { VFC } from "react";

export const Todo: VFC<Omit<TodoType, "id">> = (
  props
  // Pick<TodoType, "userId" | "title" | "completed">　これだけ使用する。という設定
  // Omit<TodoType, "id"> これだけ除外する、という設定
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザー${userId})`}</p>;
};
