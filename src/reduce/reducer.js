import {
  STATE_LOGIN,
  STATE_SNACKBAR,
  STATE_MODAL,
  STATE_MODAL_LOGIN,
  STATE_NAME,
  STATE_SAKIT,
  STATE_MODAL_LOCATION,
  STATE_SIMPAN_LOKASI,
  STATE_MODAL_PIKET,
  STATE_PIKET,
  STATE_MASUK_BIASA,
  STATE_BUKAN_GKELAS,
} from "../const/stateCondition";

export const initial = {
  login: null,
  snackBar: false,
  gambarBuktiSakit: "",
  modal: false,
  modalLogin: false,
  nama: "",
  statusSakit: "",
  modalPiket: false,
  piket: "",
  masukBiasa: "",
  bukanGKelas: "",
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
    case STATE_MODAL_PIKET:
      return { ...state, modalPiket: action.payload };
    case STATE_PIKET:
      return { ...state, piket: action.payload };
    case STATE_MASUK_BIASA:
      return { ...state, masukBiasa: action.payload };
    case STATE_BUKAN_GKELAS:
      return { ...state, bukanGKelas: action.payload };
    default:
      return state;
  }
};
