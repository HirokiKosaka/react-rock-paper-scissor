import { useState } from "react";
import { Header } from "./components/Header";

export const RockPaperScissors = () => {
  const [opponent, setOpponent] = useState("？");
  const [log, setLog] = useState("ここにログがでます");
  const [record, setRecord] = useState(0);
  const onClickRock = () => {
    const opponentHand1 = Math.floor(Math.random() * 3);
    if (opponentHand1 === 0) {
      setOpponent("👊");
      setLog("あいこです。もう一度！");
    }
    if (opponentHand1 === 1) {
      setOpponent("✌️");
      setLog("やりましたね！あなたの勝ちです！");
      setRecord((prev) => prev + 1);
    }
    if (opponentHand1 === 2) {
      setOpponent("🖐️");
      setLog("残念。あなたの負けです。");
      setRecord(0);
    }
  };
  const onClickPaper = () => {
    const opponentHand1 = Math.floor(Math.random() * 3);
    if (opponentHand1 === 0) {
      setOpponent("👊");
      setLog("やりましたね！あなたの勝ちです！");
      setRecord((prev) => prev + 1);
    }
    if (opponentHand1 === 1) {
      setOpponent("✌️");
      setLog("残念。あなたの負けです。");
      setRecord(0);
    }
    if (opponentHand1 === 2) {
      setOpponent("🖐️");
      setLog("あいこです。もう一度！");
    }
  };
  const onClickScissor = () => {
    const opponentHand1 = Math.floor(Math.random() * 3);
    if (opponentHand1 === 0) {
      setOpponent("👊");
      setLog("残念。あなたの負けです。");
      setRecord(0);
    }
    if (opponentHand1 === 1) {
      setOpponent("✌️");
      setLog("あいこです。もう一度！");
    }
    if (opponentHand1 === 2) {
      setOpponent("🖐️");
      setLog("やりましたね！あなたの勝ちです！");
      setRecord((prev) => prev + 1);
    }
  };
  return (
    <>
      <Header />
      <div className="bg-gray-900 text-white w-screen h-screen p-5 m-0">
        <div className="flex justify-center items-center m-3">
          <div className="opponent flex flex-col justify-center items-center bg-white w-52 h-52 rounded-md pb-5">
            <p className="text-center font-bold text-red-500">相手</p>
            <div className="flex justify-center items-center my-auto mx-auto">
              <p className="bg-gray-900 mx-16 text-4xl font-bold py-5 px-6 rounded-full">
                {opponent}
              </p>
            </div>
          </div>
        </div>
        <div className="buttons flex justify-center items-center mt-12">
          <button
            className="mx-16 bg-gray-100 text-4xl duration-500 ease-in-out text-blue-500 font-bold py-5 px-6 rounded-full hover:-translate-y-1 hover:bg-blue-500 hover:scale-110"
            onClick={onClickRock}
          >
            ✊
          </button>
          <button
            className="mx-16 bg-gray-100 text-4xl duration-500 ease-in-out text-blue-500 font-bold py-5 px-6 rounded-full hover:-translate-y-1 hover:bg-blue-500 hover:scale-110"
            onClick={onClickScissor}
          >
            ✌️
          </button>
          <button
            className="mx-16 bg-gray-100 text-4xl duration-500 ease-in-out text-blue-500 font-bold py-5 px-6 rounded-full hover:-translate-y-1 hover:bg-blue-500 hover:scale-110"
            onClick={onClickPaper}
          >
            🖐️
          </button>
          {console.log(opponent)}
        </div>
        <p className="log">{log}</p>
        <p className="record">{`現在あなたは${record}連勝です`}</p>
      </div>
    </>
  );
};
