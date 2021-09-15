import {
  STATE_LOGIN,
  STATE_SNACKBAR,
  STATE_MODAL,
  STATE_MODAL_LOGIN,
  STATE_NAME,
  STATE_SAKIT,
  STATE_MODAL_LOCATION,
  STATE_SIMPAN_LOKASI,
} from "../const/stateCondition";

export const initial = {
  login: null,
  snackBar: false,
  gambarBuktiSakit: "",
  modal: false,
  modalLogin: false,
  nama: "",
  statusSakit: "",
  modalLocation: false,
  lokasiSekarang: "",
};
export const reduce = (state, action) => {
  switch (action.type) {
    case STATE_LOGIN:
      return { ...state, login: action.payload };
    case STATE_SNACKBAR:
      return { ...state, snackBar: action.payload };
    case STATE_NAME:
      return { ...state, nama: action.payload };
    case STATE_SAKIT:
      return { ...state, statusSakit: action.payload };
    case STATE_MODAL:
      return { ...state, modal: action.payload };
    case STATE_MODAL_LOGIN:
      return { ...state, modalLogin: action.payload };
    case STATE_MODAL_LOCATION:
      return { ...state, modalLocation: action.payload };
    case STATE_SIMPAN_LOKASI:
      return { ...state, lokasiSekarang: action.payload };
    default:
      return state;
  }
};
