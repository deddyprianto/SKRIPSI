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
  NIK,
  JAM,
  HARI,
  KELAS,
  MAPEL_DIBAWAKAN,
  NAMA_GURU,
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
  jam: "",
  hari: "",
  kelas: "",
  mapelDibawakan: "",
  namaGuruu: "",
  nikGuru: [
    { nik: 1234, nama: "Rehulina Simamora,B.A" },
    { nik: 5678, nama: "Bagas Pranata,S.Pd" },
  ],
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
    case JAM:
      return { ...state, jam: action.payload };
    case HARI:
      return { ...state, hari: action.payload };
    case KELAS:
      return { ...state, kelas: action.payload };
    case MAPEL_DIBAWAKAN:
      return { ...state, mapelDibawakan: action.payload };
    case NAMA_GURU:
      return { ...state, namaGuruu: action.payload };
    default:
      return state;
  }
};
