import { ReducerActionsTypes } from "../types";

interface cardProps {
  img: string;
  state: number;
  action: ReducerActionsTypes;
  category: string;
  dispatch: (type: ReducerActionsTypes, payload: string) => void;
}

const Card = ({ img, category, dispatch, action, state }: cardProps) => {
  return (
    <div className={`relative flex flex-col items-center max-w-[200px]`}>
      <div className="absolute flex flex-col items-center justify-center -top-6">
        <div className="max-h-[45px] max-w-[50px]">
          <img src={img} alt="" className="w-full h-full" />
        </div>
      </div>
      <input
        type="number"
        className="px-2 py-2 max-w-[225px] text-xl font-bold text-center  outline-none "
        value={state}
        onChange={(e) => {
          dispatch(action, e.target.value);
        }}
      />
      <div className="w-full font-black tracking-wide text-center text-white border-gray-700 rounded-b-md bg-sky-500">
        {category}
      </div>
    </div>
  );
};
export default Card;
