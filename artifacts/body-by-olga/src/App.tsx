import { Switch, Route, Router as WouterRouter } from "wouter";
import "./styles.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CoachingPage from "./pages/CoachingPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "200px 32px" }}>
      <h1 style={{ fontFamily: "var(--fd)", fontSize: 36, marginBottom: 16 }}>Page Not Found</h1>
      <a href="/" style={{ color: "var(--primary)", fontWeight: 600 }}>Return home</a>
    </div>
  );
}

function Router() {
  return (
    <>
      <Nav />
      <main>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/coaching" component={CoachingPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/blog/:slug" component={BlogPostPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
