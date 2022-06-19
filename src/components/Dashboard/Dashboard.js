// import React from 'react';

// const Dashboard = () => {
//     return (
//         <div>
//             <h2>this is dashboard</h2>
//         </div>
//     );
// };

// export default Dashboard;
import React from 'react';
// import { LineChart } from 'recharts';
import { Line, LineChart, Tooltip, XAxis, YAxis, Area, AreaChart, CartesianGrid, PieChart, Pie,RadarChart,PolarGrid,Legend, Radar,PolarAngleAxis, PolarRadiusAxis,  } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            month: "Mar",
            investment: 10000,
            sell: 241,
            revenue: 10401
        },
        {
            month: "Apr",
            investment: 20000,
            sell: 423,
            revenue: 24500
        },
        {
            month: "May",
            investment: 50000,
            sell: 726,
            revenue: 67010
        },
        {
            month: "Jun",
            investment: 50000,
            sell: 529,
            revenue: 40405
        },
        {
            month: "Jul",
            investment: 60000,
            sell: 601,
            revenue: 50900
        },
        {
            month: "Aug",
            investment: 70000,
            sell: 670,
            revenue: 61000
        }
      ];
    return (
        <div className='dashboard'>
            <div className='dashboard1'>
                <h2>Month vs Revenue vs Investment</h2>
                <LineChart width={400} height={400} data={data}>
                    <Line dataKey={'investment'}></Line>
                    <Line dataKey={'revenue'}></Line>
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip />
                    <YAxis></YAxis>
                </LineChart>
                <h2>Month vs Revenue vs Investment</h2>
                <AreaChart width={600} height={400} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
                <h2> Revenue vs Investment</h2>
                <PieChart width={730} height={400}>
                    <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
                <h2>Month vs Revenue vs Investment</h2>
                <RadarChart outerRadius={90} width={730} height={400} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="month" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Mike" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Lily" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Tooltip />
                    <Legend />
                </RadarChart>
            </div>
        </div>
    );
};

export default Dashboard;