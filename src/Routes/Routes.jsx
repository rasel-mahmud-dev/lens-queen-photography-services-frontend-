import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExcludeAuthRoute from "src/Routes/ExcludeAuthRoute";
import HomePage from "../pages/HomePage/HomePage.jsx";
import App from "../App.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage.jsx";
import ServicesPage from "../pages/ServicesPage/ServicesPage.jsx";
import AddServicePage from "../pages/Auth/AddServicePage/AddServicePage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ServiceDetailPage from "../pages/ServiceDetailPage/ServiceDetailPage.jsx";
import MyReviews from "../pages/Auth/MyReviews/MyReviews.jsx";
import Blogs from "../pages/Blogs/Blogs.jsx";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage.jsx";

const Routes = () => {
	let router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			errorElement: <NotFoundPage />,
			children: [
				{ path: "/", element: <HomePage /> },
				{ path: "/services", element: <ServicesPage /> },
				{ path: "/my-reviews", element: <PrivateRoute> <MyReviews /> </PrivateRoute> },
				{ path: "/service/:serviceId", element: <ServiceDetailPage />} ,
				{ path: "/add-service", element: <PrivateRoute> <AddServicePage /> </PrivateRoute> },
				{ path: "/update-service/:serviceId", element: <PrivateRoute> <AddServicePage /> </PrivateRoute> },
				{ path: "/login", element: <ExcludeAuthRoute><LoginPage /></ExcludeAuthRoute> },
				{ path: "/blogs", element: <Blogs /> },
				{ path: "/registration", element: <ExcludeAuthRoute> <RegistrationPage /> </ExcludeAuthRoute> },
			],
		},
	]);
	return <RouterProvider router={router} fallbackElement={<h1>Loader</h1>} />;
};
export default Routes;