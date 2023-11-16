


import  { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  const [original, setOriginal] = useState([]);
  const [localStorageData, setLocalStorageData] = useState([]);

  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => {
        setOriginal(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    const storedData = JSON.parse(localStorage.getItem("donation")) || [];
    setLocalStorageData(storedData);
  }, []);

  const data = [
    { name: "Group A", value: original.length },
    { name: "Group B", value: localStorageData.length },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart width={450} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="py-20 text-center justify-center">
        <div className="md:flex md:text-start justify-center">
          <div className="flex justify-start">
            <h1>Your donation</h1>
            <div
              className="mx-5"
              style={{ height: "20px", width: "200px", background: "#00C49F" }}
            ></div>
          </div>
          <div className="flex justify-start">
            <h1>Total Donations</h1>
            <div
              className="mx-5"
              style={{ height: "20px", width: "200px", background: "#0088FE" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;







