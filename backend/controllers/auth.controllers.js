import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import User from "../models/user.model.js";

const signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json(new ApiError(400, "All fields are required"));
  }

  const usernameAlreadyTaken = await User.findOne({ username });
  if (usernameAlreadyTaken) {
    res
      .status(400)
      .json(
        new ApiError(
          400,
          "Username already taken. Please try witb another username"
        )
      );
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    res
      .status(400)
      .json(new ApiError(400, "User with this username already exists"));
  }

  if (password.length < 6) {
    res.status(400).json(new ApiError(400, "Password too short"));
  }

  const user = await User.create({ username, email, password });
  const createdUser = await User.findById(user._id).select("-password");

  res.status(200).json(new ApiResponse(200, createdUser, "SignUp sucessfully"));
};

const loginUser = async (req, res) => {
  //something
};

export { signupUser, loginUser };
