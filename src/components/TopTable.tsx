const formatKeyToHeader = (key: string) => key.replace("_", " ");

const formatValue = (value: Value) => {
  if (!value) {
    return "not provided";
  } else if (typeof value === "boolean") {
    return value ? "✅" : "❌";
  } else if (Array.isArray(value)) {
    return value.join(", ");
  } else {
    return value;
  }
};

type Value = string | string[] | boolean | number;

const TopTable = (cells: { [key: string]: Value }) => (
  <table className="table-auto mb-6">
    <thead>
      <tr>
        {Object.keys(cells).map((key, index) => (
          <th key={index} className="capitalize">
            {formatKeyToHeader(key)}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        {Object.values(cells).map((value, index) => (
          <td key={index} className="table-cell text-center">
            {formatValue(value)}
          </td>
        ))}
      </tr>
    </tbody>
  </table>
);

export default TopTable;
