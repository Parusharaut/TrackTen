import userModel from ('./models/userModel');

exports.loginUser = async (req, res) => {
  const { emailOrUsername, password } = req.body;

  if (!emailOrUsername || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const user = await userModel.getUserByEmailOrUsername(emailOrUsername);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error during login.' });
  }
};
