import { useState } from "react";
import { Label, TextInput, Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

export function CreateUser() {
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleCreateUser = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para crear un usuario
    console.log("Email:", email);
    console.log("Password 1:", pass1);
    console.log("Password 2:", pass2);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <Card className="w-full max-w-2xl p-6 space-y-6 bg-gray-800 shadow-md rounded-lg">
        <form onSubmit={handleCreateUser}>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-center">Create User</h3>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full">
                <Label className="text-white" htmlFor="first-name" value="First Name" />
                <TextInput
                  id="first-name"
                  type="text"
                  placeholder="John"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                  className="bg-gray-700 text-white"
                />
              </div>
              <div className="w-full">
                <Label className="text-white" htmlFor="last-name" value="Last Name" />
                <TextInput
                  id="last-name"
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                  className="bg-gray-700 text-white"
                />
              </div>
            </div>
            <div>
              <Label className="text-white" htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="bg-gray-700 text-white"
                autoComplete="email"
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full">
                <Label className="text-white" htmlFor="pass1" value="Password 1" />
                <TextInput
                  id="pass1"
                  type="password"
                  placeholder="••••••••"
                  value={pass1}
                  onChange={(event) => setPass1(event.target.value)}
                  required
                  className="bg-gray-700 text-white"
                  autoComplete="new-password"
                />
              </div>
              <div className="w-full">
                <Label className="text-white" htmlFor="pass2" value="Password 2" />
                <TextInput
                  id="pass2"
                  type="password"
                  placeholder="••••••••"
                  value={pass2}
                  onChange={(event) => setPass2(event.target.value)}
                  required
                  className="bg-gray-700 text-white"
                />
              </div>
            </div>
            <div className="w-full">
              <Button type="submit" className="w-full">
                Create User
              </Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-400">
              Already have an account?&nbsp;
              <Link to="/" className="text-cyan-400 hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default CreateUser;
