import React, { Suspense } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Utils
import ProtectedRouting from "./ProtectedRouting";
import MainLayout from "../layouts/MainPage";
import AuthLayout from "../layouts/Authentication";
import Loader from "./FallBackLoader";
import TypographyComponent from "../components/Base/TypographyComponent";
import ButtonComponent from "../components/Base/ButtonComponent";

// Pages
const Login = React.lazy(() => import("../pages/login"));
const Otp = React.lazy(() => import("../pages/otp"));
const ImageVerification = React.lazy(() =>
  import("../pages/image-verification")
);
const LandingPage = React.lazy(() => import("../pages/landing-page"));
const Home = React.lazy(() => import("../pages/home"));
const Register = React.lazy(() => import("../pages/register"));
const PendingJobs = React.lazy(() => import("../pages/pending-jobs"));
const MyServices = React.lazy(() => import("../pages/my-services"));
const SingleService = React.lazy(() => import("../pages/single-service"));
const NewService = React.lazy(() => import("../pages/new-service"));
const ActiveJobs = React.lazy(() => import("../pages/active-jobs"));
const JobDetails = React.lazy(() => import("../pages/job-details"));
const RateAndReview = React.lazy(() => import("../pages/rate-and-review"));
const CompletedJobs = React.lazy(() => import("../pages/completed-jobs"));
const EarningReport = React.lazy(() => import("../pages/earning-report"));
const Chat = React.lazy(() => import("../pages/chat"));
const Profile = React.lazy(() => import("../pages/profile"));
const MyEarnings = React.lazy(() => import("../pages/earnings"));

const LazyLoadComponent = ({ component }) => {
  return <Suspense fallback={<Loader />}>{component}</Suspense>;
};

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div style={{ padding: `5rem` }}>
        <TypographyComponent variant="mainPageHeading" component="h1">
          404 - Page Not Found
        </TypographyComponent>
        <TypographyComponent component="p">
          Sorry, the page you are looking for does not exist.
        </TypographyComponent>
        <ButtonComponent
          onClick={(e) => {
            navigate("/");
          }}
        >
          Go Back to Home
        </ButtonComponent>
      </div>
    </main>
  );
};

const ApplicationRoutes = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Routes>
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/" />
          ) : (
            <AuthLayout>
              <LazyLoadComponent component={<Login />} />
            </AuthLayout>
          )
        }
      />
      <Route
        path="/otp"
        element={
          isLoggedIn ? (
            <Navigate to="/" />
          ) : (
            <AuthLayout>
              <LazyLoadComponent component={<Otp />} />
            </AuthLayout>
          )
        }
      />
      <Route
        path="/register"
        element={
          <AuthLayout>
            <LazyLoadComponent component={<Register />} />
          </AuthLayout>
        }
      />
      <Route
        path="/verify-image"
        element={
           <AuthLayout>
            <LazyLoadComponent component={<ImageVerification />} />
          </AuthLayout>
        }
      />
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Route
        path="/"
        element={
          <ProtectedRouting
            route={
              <MainLayout>
                <LazyLoadComponent component={<Home />} />
              </MainLayout>
            }
          />
        }
      />
      <Route
        path="/pending-jobs"
        element={
          <ProtectedRouting
            route={
              <MainLayout>
                <LazyLoadComponent component={<PendingJobs />} />
              </MainLayout>
            }
          />
        }
      />
      <Route
        path="/my-earnings"
        element={
          <ProtectedRouting
            route={
              <MainLayout>
                <LazyLoadComponent component={<MyEarnings />} />
              </MainLayout>
            }
          />
        }
      />
      <Route
        path="/rate"
        element={
          <ProtectedRouting
            route={
              <MainLayout>
                <LazyLoadComponent component={<RateAndReview />} />
              </MainLayout>
            }
          />
        }
      />
      <Route
        path="/chat"
        element={
          <ProtectedRouting
            route={
              <MainLayout>
                <LazyLoadComponent component={<Chat />} />
              </MainLayout>
            }
          />
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRouting
            route={
              <MainLayout>
                <LazyLoadComponent component={<Profile />} />
              </MainLayout>
            }
          />
        }
      />

      <Route
        path="/earning-report"
        element={
          <ProtectedRouting
            route={
              <MainLayout>
                <Outlet />
              </MainLayout>
            }
          />
        }
      >
        <Route
          path=":job_id"
          element={<LazyLoadComponent component={<EarningReport />} />}
        />
        <Route
          path=""
          element={<LazyLoadComponent component={<Navigate to="/home" />} />}
        />
      </Route>
       <Route
        path="/completed-jobs"
        element={
          <ProtectedRouting
            route={
              <MainLayout>
                <LazyLoadComponent component={<CompletedJobs />} />
              </MainLayout>
            }
          />
        }
      />
      <Route
        path="/my-services"
        element={
          <ProtectedRouting
            route={
              <MainLayout>
                <Outlet />
              </MainLayout>
            }
          />
        }
      >
        <Route
          path=""
          element={<LazyLoadComponent component={<MyServices />} />}
        />
        <Route
          path=":service_id"
          element={<LazyLoadComponent component={<SingleService />} />}
        />
        <Route
          path="new"
          element={<LazyLoadComponent component={<NewService />} />}
        />
      </Route>
      <Route
        path="/active-jobs"
        element={
          <ProtectedRouting
            route={
              <MainLayout>
                <LazyLoadComponent component={<ActiveJobs />} />
              </MainLayout>
            }
          />
        }
      />
      <Route
        path="/job-details"
        element={
          <ProtectedRouting
            route={
              <MainLayout>
                <Outlet />
              </MainLayout>
            }
          />
        }
      >
        <Route
          path=":job_id"
          element={<LazyLoadComponent component={<JobDetails />} />}
        />
        <Route
          path=""
          element={<LazyLoadComponent component={<Navigate to="/home" />} />}
        />
      </Route>
      <Route
        path="/*"
        element={
          <>
            <NotFoundPage />
          </>
        }
      />
    </Routes>
  );
};

export default ApplicationRoutes;
