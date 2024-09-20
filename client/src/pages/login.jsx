import { useState } from "react";
import { Label, TextInput, Checkbox, Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { DarkThemeToggle } from "flowbite-react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <Card className="w-full max-w-md p-6 space-y-6 bg-gray-800 shadow-md rounded-lg">
        <form onSubmit={handleLogin}>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-center">Sign in</h3>
            <div>
              <div className="mb-2 block">
                <Label className="text-white" htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="bg-gray-700 text-white"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label className="text-white" htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="bg-gray-700 text-white"
              />
            </div>
            <div className="flex justify-between">
              <Link to="/forgot-password" className="text-sm text-cyan-400 hover:underline">
                Lost Password?
              </Link>
            </div>
            <div className="w-full">
              <Button type="submit" className="w-full">
                Enter your account
              </Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-400">
              Not registered?&nbsp;
              <Link to="/register" className="text-cyan-400 hover:underline">
                Create account
              </Link>
            </div>
          </div>
        </form>
        </Card>
    </div>
  );
}

export default Login;
