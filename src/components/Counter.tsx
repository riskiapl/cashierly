import { createSignal, createEffect } from "solid-js";
import Alert from "~/utils/Alert";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    console.log(`Count: ${count()}`);
    if (count() % 2 === 0) {
      Alert.success(`You clicked ${count()} times!`);
    } else {
      Alert.error(`You clicked ${count()} times!`);
    }
  });

  return (
    <button
      class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
      onClick={() => setCount(count() + 1)}
    >
      Clicks: {count()}
    </button>
  );
}
