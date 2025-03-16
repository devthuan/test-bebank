import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PageTransition from "../components/PageTransition/PageTransition";

const RouteWrapper = ({ component: Component, layout: Layout }) => {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [params]);

  if (loading) {
    return <PageTransition />;
  }

  return Layout ? (
    <Layout>
      <Component />
    </Layout>
  ) : (
    <Component />
  );
};

export default RouteWrapper;
