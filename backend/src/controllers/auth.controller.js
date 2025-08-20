import User from "../models/user.model";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters" });
    }
    const user = User;
    if (user) res.status(400).json({ message: "Email already exists" });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      //generate jwt token
    } else {
      res.status(400).json({ message: "Invalid user Data" });
    }
  } catch (err) {}
};

export const login = (req, res) => {
  res.send("login routes");
};

export const logout = (req, res) => {
  res.send("logout routes");
};
