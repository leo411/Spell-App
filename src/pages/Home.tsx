import Card from "../components/Card";
import useIdentifiers from "../custom_hooks/useIdentifiers";
import ErrorView from "../components/ErrorView";

const Home = () => {
  const [identifiers, error] = useIdentifiers();

  if (!identifiers) return <span>Loading ...</span>;

  if (error) return <ErrorView />;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {identifiers.map(({ name, index }) => (
          <Card key={index} {...{ name, index }} />
        ))}
      </div>
    </div>
  );
};

export default Home;
