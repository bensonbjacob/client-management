export async function getUsers(req, res) {
  try {
    res.status(200).json({ user: 'Get Request' });
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' });
  }
}
