import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // data nhac hien thi content
  musicLists: [],
  //data nhac hien thi thu vien cua ban
  yourMusic: [],
  //state check xem ban lick vao ban nhac nao
  currentContent: "content",
  //state luu data khi click vao 1 bai nhac
  clickSaveData: {},
};

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    click: (state, action) => {
      state.clickSaveData = action.payload;
    },
    setDataYourMusic: (state, action) => {
      state.yourMusic = action.payload;
    },
    updateCurrent: (state, action) => {
      state.currentContent = action.payload;
    },
    updateData: (state, action) => {
      state.musicLists = action.payload;
    },
  },
});

export const { click, updateCurrent, updateData, setDataYourMusic } =
  musicSlice.actions;

export const getDataMusic = (state) => {
  // ham lay data
  return state.music.musicLists; //state {chấm} music là để lấy initialstate(đang là 1 opj nên phải chấm key để lấy dữ liệu)
};
export const getDataYourMusic = (state) => {
  // data yourmusic
  // ham lay data
  return state.music.yourMusic;
};
export const currentContent = (state) => {
  return state.music.currentContent;
};
export const clickSaveData = (state) => {
  return state.music.clickSaveData;
};

export default musicSlice.reducer;
