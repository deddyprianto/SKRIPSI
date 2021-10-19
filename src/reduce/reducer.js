import {
  STATE_LOGIN,
  STATE_SNACKBAR,
  STATE_MODAL,
  STATE_MODAL_LOGIN,
  STATE_NAME,
  STATE_SAKIT,
  STATE_SIMPAN_LOKASI,
  MODAL_LOKASI,
  STATE_MAPEL,
  STATE_WAKTU_MULAI,
  MODAL_CAMERA_SCAN,
  STATE_VIDEO_SCAN,
  STATE_HARI,
  STATE_KELAS,
  STATE_JAM,
  STATE_MAPELDIBAWAKAN,
} from "../const/stateCondition";

export const initial = {
  login: null,
  snackBar: false,
  gambarBuktiSakit: "",
  modal: false,
  modalLogin: false,
  nama: "",
  statusSakit: "",
  mapelSet: "",
  waktuMulaiSet: "",
  modalCameraScan: false,
  videoScan: false,
  kelas: "",
  hari: "",
  jam: "",
  mapelDibawakan: "",
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
    case MODAL_LOKASI:
      return { ...state, modalLokasi: action.payload };
    case STATE_MAPEL:
      return { ...state, mapelSet: action.payload };
    case STATE_WAKTU_MULAI:
      return { ...state, waktuMulaiSet: action.payload };
    case MODAL_CAMERA_SCAN:
      return { ...state, modalCameraScan: action.payload };
    case STATE_VIDEO_SCAN:
      return { ...state, videoScan: action.payload };
    case STATE_HARI:
      return { ...state, hari: action.payload };
    case STATE_JAM:
      return { ...state, jam: action.payload };
    case STATE_KELAS:
      return { ...state, kelas: action.payload };
    case STATE_MAPELDIBAWAKAN:
      return { ...state, mapelDibawakan: action.payload };
    default:
      return state;
  }
};
