import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl">Home</h1>
                <p>11th Gen Intel(R) Core(TM) i5-11400H @ 2.70GHz</p>
                <p>NVIDIA GeForce RTX 3050 Laptop GPU GDDR6 @ 4GB (128 bits)</p>
              </div>
              <div className="text-center">
                <div className="text-4xl">1221MHz</div>
                <div>Frequency</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h2 className="text-lg">CPU Stats</h2>
            <p>Frequency: 1221MHz</p>
            <p>Usage: 6%</p>
            <p>Memory Frequency: 3200MHz</p>
            <p>Temperature: 58°C</p>
            <p>Voltage: 707mV</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h2 className="text-lg">Memory and Storage</h2>
            <p>RAM: 53.5% (8.4/15.7GB)</p>
            <p>Storage: 29.7% (134.2/451.4GB)</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h2 className="text-lg">Fan Speed</h2>
            <p>CPU Fan: 0RPM</p>
            <p>GPU Fan: 0RPM</p>
            <p>Fan Acoustics: 0dBA</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg">System Configuration</h2>
            <p>Win Key: Enabled</p>
            <p>Touch Pad: Enabled</p>
            <p>Panel Power Saver: Enabled</p>
            <p>GPU Mode: Standard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
