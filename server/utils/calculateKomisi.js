const calculateKomisi = (omzet) => {
  if (omzet >= 500000000) {
    return { percentage: 10, nominal: omzet * 0.1 };
  } else if (omzet >= 200000000) {
    return { percentage: 5, nominal: omzet * 0.05 };
  } else if (omzet >= 100000000) {
    return { percentage: 2.5, nominal: omzet * 0.025 };
  } else if (omzet <= 100000000) {
    return { percentage: 0, nominal: 0 };
  }
};

module.exports = calculateKomisi;
