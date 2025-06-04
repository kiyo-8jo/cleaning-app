// options
const cleaningTypeOptions = ["OUT", "IN", "OUT-IN", "STAY", "NONE"];
const stayCleaningTypeOptions = ["NORMAL", "ECO", "NOT-SELECT"];
const bedsOptions = [1, 2, 3, 4];
const guestOptions = [0, 1, 2, 3, 4];
const objOptions = [
  { value: 0, text: "false" },
  { value: 1, text: "true" },
];

// オプションを作る関数（cleaning_type,stay_cleaning_type,now_beds,new_beds,adult,inf,kid_inf用)
const createOptions = (targetOptions: string[] | number[]) => {
  return targetOptions.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));
};

// オプションを作る関数（is_key_back,is_cleaning_complete用）
const createObjOptions = (
  targetOptions: {
    value: number;
    text: string;
  }[],
) => {
  return targetOptions.map((option: { value: number; text: string }) => (
    <option value={option.value} key={option.value}>
      {option.text}
    </option>
  ));
};

const getBoolean = (data: FormDataEntryValue) => {
  if (data === "0") return false;
  return true;
};

export {
  cleaningTypeOptions,
  stayCleaningTypeOptions,
  bedsOptions,
  guestOptions,
  objOptions,
  createObjOptions,
  createOptions,
  getBoolean,
};
