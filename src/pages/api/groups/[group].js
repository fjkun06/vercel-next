export default function handler(req, res) {
  // res.status(200).json({ name: "John Doe" });
  const { group } = req.query;
  res.end(`Group: ${group}`);
}
