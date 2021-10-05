import {
  STATE_LOGIN,
  STATE_SNACKBAR,
  STATE_MODAL,
  STATE_MODAL_LOGIN,
  STATE_NAME,
  STATE_SAKIT,
  STATE_SIMPAN_LOKASI,
  STATE_MODAL_PIKET,
  STATE_PIKET,
  STATE_MASUK_BIASA,
  STATE_BUKAN_GKELAS,
  MODAL_LOKASI,
  TAMPIL_BUTTON_PIKET,
  STATE_MAPEL,
  STATE_WAKTU_MULAI,
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
  modalLokasi: false,
  tampilButtonPiket: false,
  mapelSet: "",
  waktuMulaiSet: "",
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
    case MODAL_LOKASI:
      return { ...state, modalLokasi: action.payload };
    case TAMPIL_BUTTON_PIKET:
      return { ...state, tampilButtonPiket: action.payload };
    case STATE_MAPEL:
      return { ...state, mapelSet: action.payload };
    case STATE_WAKTU_MULAI:
      return { ...state, waktuMulaiSet: action.payload };

    default:
      return state;
  }
};
