import {
  FaBuildingColumns,
  FaCameraRetro,
  FaFileContract,
  FaFileLines,
  FaHandshake,
  FaIdCard,
  FaKeyboard,
  FaLandmark,
  FaLeaf,
  FaMoneyBillTransfer,
  FaPrint,
  FaRegFileLines,
  FaScaleBalanced,
  FaSeedling,
  FaShop,
  FaStamp,
  FaUserTie,
} from 'react-icons/fa6';

export const generalServices = [
  ['services.photoshop', FaCameraRetro],
  ['services.mpOnline', FaBuildingColumns],
  ['services.typing', FaKeyboard],
  ['services.printing', FaPrint],
  ['services.govForms', FaRegFileLines],
  ['services.resume', FaUserTie],
  ['services.lamination', FaIdCard],
  ['services.scan', FaFileLines],
];

export const mpOnlineServices = [
  ['services.khasra', FaLandmark],
  ['services.khatauni', FaFileLines],
  ['services.khatawar', FaRegFileLines],
  ['services.map', FaBuildingColumns],
  ['services.samagra', FaIdCard],
  ['services.kyc', FaStamp],
  ['services.farmerId', FaSeedling],
  ['services.income', FaFileContract],
  ['services.caste', FaScaleBalanced],
  ['services.domicile', FaShop],
];

export const kccServices = [
  ['services.kccLoan', FaLeaf],
  ['services.notice', FaFileLines],
  ['services.dairy', FaShop],
  ['services.witness', FaHandshake],
  ['services.ekyc', FaIdCard],
  ['services.loanEntry', FaLandmark],
  ['services.bankCorrection', FaBuildingColumns],
  ['services.farmerId', FaSeedling],
];

export const legalServices = [
  ['services.openBankAccount', FaBuildingColumns],
  ['services.savingsAccount', FaLandmark],
  ['services.currentAccount', FaShop],
  ['services.personalLoan', FaMoneyBillTransfer],
  ['services.businessLoan', FaHandshake],
  ['services.homeLoan', FaFileContract],
  ['services.vehicleLoan', FaRegFileLines],
  ['services.bankKyc', FaIdCard],
  ['services.bankCorrection', FaBuildingColumns],
  ['services.passbookUpdate', FaFileLines],
  ['services.aadhaarBankLink', FaStamp],
  ['services.atmCardApply', FaIdCard],
  ['services.mobileBanking', FaKeyboard],
  ['services.loanConsultation', FaScaleBalanced],
  ['services.otherBanking', FaLeaf],
];
