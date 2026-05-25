export function createEnquiry(req, res) {
  const { name, phone, service, message } = req.body;

  if (!name || !phone || !service || !message) {
    return res.status(400).json({ message: 'Name, phone, service and message are required.' });
  }

  return res.status(201).json({
    message: 'Enquiry received. Please continue on WhatsApp for fastest response.',
    whatsapp: '916266383257',
    enquiry: { name, phone, service, message },
  });
}
