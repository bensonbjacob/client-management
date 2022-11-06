//Controller
import Users from '../model/user';

//get
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});

    if (!users)
      return res.status(404).json({ error: 'Data Not Found' });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: 'Error While Fetching Data' });
  }
}

//post
export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res
        .status(404)
        .json({ error: 'Form Data Not Provided' });
    Users.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}
