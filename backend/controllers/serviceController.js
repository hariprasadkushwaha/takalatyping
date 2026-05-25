const services = {
  general: [
    'Photoshop Work',
    'M.P. Online',
    'Typing Work',
    'Printing',
    'Government Form',
    'Resume Making',
    'Lamination',
    'Scan & Photocopy',
  ],
  mpOnline: ['खसरा', 'खतौनी', 'खातावार', 'नक्शा', 'समग्र ID', 'KYC', 'फार्मर ID', 'आय प्रमाण पत्र', 'जाति प्रमाण पत्र', 'निवास प्रमाण पत्र'],
  farmer: ['KCC लोन / किसान क्रेडिट कार्ड', 'नोटिस जानकारी', 'डेयरी लोन / बिजनेस', 'दो गवाह', 'ई-केवाईसी', 'लोन एंट्री', 'बैंक सुधार'],
  legal: ['शपथ पत्र', 'हलफनामा', 'एफिडेविट', 'विवाह पंजीयन', 'अनुबंध (Agreement)', 'किरायानामा', 'विक्रयनामा', 'जन्म प्रमाण पत्र', 'मृत्यु प्रमाण पत्र', 'वसीयतनामा', 'अन्य ऑनलाइन सेवाएं'],
};

export function getServices(req, res) {
  res.json({ services });
}
