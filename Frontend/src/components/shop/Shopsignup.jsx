import { Link } from "react-router-dom";

export default function Shopsignup() {
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const response = await fetch("http://localhost:3000/shop/signup", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      });
      
      if (!response.ok) {
          if (response.status === 409) {
              window.alert("Email already exists. Please log in!");
          } else if(response.status === 400) {
              window.alert("Please enter valid details!");
              console.error("Server error:", response.status);
          }
          return;
      }

      const res = await response.json();
      console.log(res);
      
      if (res != null && res.email === data.email) {
          window.location.href = "/shop/login";
      }
  } catch (error) {
      console.error("Fetch error:", error);
      // Handle other errors if needed
  }

    
  }
  return (
    <>
      <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <div className="mt-2">
                <input
                  id="shopName"
                  placeholder="Shop Name"
                  name="shopName"
                  type="shopName"
                  autoComplete="shopName"
                  required
                  className="block px-3 w-full my-4  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mt-2">
                <input
                  id="ownerName"
                  placeholder="Owner Name"
                  name="ownerName"
                  type="ownerName"
                  autoComplete="ownerName"
                  required
                  className="block px-3 w-full my-4  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mt-2">
                <input
                  id="city"
                  placeholder="Enter City"
                  name="city"
                  type="city"
                  autoComplete="city"
                  required
                  className="px-3 my-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mt-2">
                <input
                  id="station"
                  placeholder="Enter Station Name"
                  name="station"
                  type="station"
                  autoComplete="station"
                  required
                  className="px-3 my-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mt-2">
                <input
                  id="platform"
                  placeholder="Enter Platform No."
                  name="platform"
                  type="platform"
                  autoComplete="platform"
                  required
                  className="px-3 block my-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mt-2">
                <input
                  id="email"
                  placeholder="Enter Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="px-3 block my-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mt-2">
                <input
                  placeholder="Enter Phone Number"
                  id="number"
                  name="number"
                  type="number"
                  autoComplete="tel"
                  required
                  className="block w-full rounded-md my-4 px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  placeholder="Enter Password"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="block w-full rounded-md my-4 px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already Registered?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-red-600 hover:text-red-500"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
