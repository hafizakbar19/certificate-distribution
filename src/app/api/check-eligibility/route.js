export default function handler(req, res) {
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  
    if (req.headers['content-type'] !== 'application/json') {
      return res.status(415).json({ message: 'Unsupported Media Type' });
    }
  
    try {
      const { id, course, batch } = req.body;
      const isEligible = id && course && batch; // Consider more robust validation here
  
      if (isEligible) {
        res.status(200).json({ message: 'Eligible' });
      } else {
        res.status(400).json({ message: 'Not Eligible' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  }