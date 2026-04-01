import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BookingSystem from "./pages/BookingSystem";
import AdminDashboard from "./pages/AdminDashboard";
import VirtualTours from "./pages/VirtualTours";
import GuestExperience from "./pages/GuestExperience";
import LocalRecommendations from "./pages/LocalRecommendations";
import TravelIntegrations from "./pages/TravelIntegrations";
import GuestJourney from "./pages/GuestJourney";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/booking-system"} component={BookingSystem} />
      <Route path={"/admin-dashboard"} component={AdminDashboard} />
      <Route path={"/virtual-tours"} component={VirtualTours} />
      <Route path={"/guest-experience"} component={GuestExperience} />
      <Route path={"/local-recommendations"} component={LocalRecommendations} />
      <Route path={"/travel-integrations"} component={TravelIntegrations} />
      <Route path={"/guest-journey"} component={GuestJourney} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
