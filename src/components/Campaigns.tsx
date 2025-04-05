import React, { useState } from 'react';
import { Plus, Copy, Database, HelpCircle, Play, ArrowLeft, ArrowRight, ChevronFirst, ChevronLast, RefreshCw } from 'lucide-react';

export default function Campaigns() {
  const [campaign, setCampaign] = useState({
    name: '',
    sponsorName: '',
    offerName: '',
    fromLine: '',
    subjectLine: '',
    bodyDomain: '',
    sendingRotf: 0,
    testEmails: '',
    html: '',
    sendingSpeed: 6000,
    changeInterval: 500
  });

  const [selectedServer, setSelectedServer] = useState('');
  const [selectedInterface, setSelectedInterface] = useState('');
  const [activeCreative, setActiveCreative] = useState(1);
  const [sendingType, setSendingType] = useState('QueueNone');
  const [autoReplyStatus, setAutoReplyStatus] = useState('Disable');

  const servers = [
    { id: 'RD_03-18', type: '[PV21]' },
    { id: 'RD_04-15', type: '[PV21]' },
    { id: 'RD_06-15', type: '[PV21]' },
    { id: 'RD_07-18', type: '[PV21]' },
    { id: 'RD_08-18', type: '[PV21]' },
    { id: 'RD_09-18', type: '[PV21]' },
    { id: 'RD_10-18', type: '[PV21]' },
    { id: 'RD_11-18', type: '[PV21]' }
  ];

  const selectedServerInterfaces = [
    { id: 'ISV_22', ip: '46.226.123.56', desc: 'original - heuresdepriere.org' },
    { id: 'ISV_25', ip: '46.226.123.60', desc: 'original - myalesco.store' },
    { id: 'ISV_243', ip: '104.153.210.76', desc: 'original - ardaamedia.online' },
    { id: 'ISV_243', ip: '104.153.210.79', desc: 'original - adams.ardaam' },
    { id: 'ISV_243', ip: '104.153.210.78', desc: 'original - baumbach.ardaam' },
    { id: 'ISV_243', ip: '104.153.210.77', desc: 'original - white.ardaame' }
  ];

  const targetServers = [
    { id: 'SV_201', type: '[PV17]' },
    { id: 'SV_202', type: '[PV17]' },
    { id: 'SV_22', type: '[PV1]' },
    { id: 'SV_243', type: '[PV25]' },
    { id: 'SV_245', type: '[PV25]' },
    { id: 'SV_25', type: '[PV1]' },
    { id: 'SV_258', type: '[PV25]' },
    { id: 'SV_262', type: '[PV1]' }
  ];

  const targetInterfaces = [
    { id: 'ISV_201', ip: '193.180.209.70', desc: 'vmta - ijwlysc.lalietdnz.io' },
    { id: 'ISV_201', ip: '193.180.209.73', desc: 'vmta - xgszxudbz.okhtff' },
    { id: 'ISV_22', ip: '46.226.123.56', desc: 'vmta - cwpghulgl.iegof.io' },
    { id: 'ISV_243', ip: '104.153.210.77', desc: 'vmta - xkbjm.pbwgzodc' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Campaign Creation</h1>
        <div className="space-x-2">
          <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            <Plus className="inline-block w-4 h-4 mr-1" />
            Scheduling Campaign
          </button>
          <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <Copy className="inline-block w-4 h-4 mr-1" />
            Copy
          </button>
          <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <Database className="inline-block w-4 h-4 mr-1" />
            Data mixed
          </button>
          <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <HelpCircle className="inline-block w-4 h-4 mr-1" />
            Help
          </button>
        </div>
      </div>

      {/* Server Selection Area */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          {/* Left Server Panel */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <div className="w-1 h-4 bg-blue-600 mr-2"></div>
              Delivery Servers
            </h3>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 text-sm"
            />
            <div className="h-48 overflow-y-auto border border-gray-200 rounded-md bg-white">
              {servers.map((server) => (
                <div
                  key={server.id}
                  onClick={() => setSelectedServer(server.id)}
                  className={`px-3 py-1.5 text-sm cursor-pointer ${
                    selectedServer === server.id ? 'bg-gray-200' : 'hover:bg-gray-50'
                  }`}
                >
                  {server.id} {server.type}
                </div>
              ))}
            </div>
          </div>

          {/* Center Control Buttons */}
          <div className="flex flex-col justify-center items-center space-y-2">
            <button className="w-24 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
              ≫
            </button>
            <button className="w-24 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
              ＞
            </button>
            <button className="w-24 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
              ＜
            </button>
            <button className="w-24 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
              ≪
            </button>
          </div>

          {/* Right Server Panel */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <div className="w-1 h-4 bg-blue-600 mr-2"></div>
              Selected Servers
            </h3>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 text-sm"
            />
            <div className="h-48 overflow-y-auto border border-gray-200 rounded-md bg-white">
              {targetServers.map((server) => (
                <div
                  key={server.id}
                  className="px-3 py-1.5 text-sm hover:bg-gray-50"
                >
                  {server.id} {server.type}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-500">10/254</span>
              <div className="flex space-x-1">
                <button className="px-2 py-1 bg-teal-500 text-white rounded text-xs hover:bg-teal-600">Load</button>
                <button className="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600">IPv4</button>
                <button className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600">Auto Select</button>
                <button className="px-2 py-1 bg-yellow-500 text-white rounded text-xs hover:bg-yellow-600">PMTAQueue</button>
                <button className="px-2 py-1 bg-orange-500 text-white rounded text-xs hover:bg-orange-600">
                  <RefreshCw className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interface Selection Area */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          {/* Left Interface Panel */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <div className="w-1 h-4 bg-blue-600 mr-2"></div>
              Delivery Server Interfaces
            </h3>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 text-sm"
            />
            <div className="h-48 overflow-y-auto border border-gray-200 rounded-md bg-white">
              {selectedServerInterfaces.map((iface) => (
                <div
                  key={`${iface.id}-${iface.ip}`}
                  onClick={() => setSelectedInterface(iface.ip)}
                  className={`px-3 py-1.5 text-sm cursor-pointer ${
                    selectedInterface === iface.ip ? 'bg-gray-200' : 'hover:bg-gray-50'
                  }`}
                >
                  {iface.id} - {iface.ip} - {iface.desc}
                </div>
              ))}
            </div>
          </div>

          {/* Center Control Buttons */}
          <div className="flex flex-col justify-center items-center space-y-2">
            <button className="w-24 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
              ≫
            </button>
            <button className="w-24 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
              ＞
            </button>
            <button className="w-24 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
              ＜
            </button>
            <button className="w-24 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">
              ≪
            </button>
          </div>

          {/* Right Interface Panel */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
              <div className="w-1 h-4 bg-blue-600 mr-2"></div>
              Selected Interfaces
            </h3>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 text-sm"
            />
            <div className="h-48 overflow-y-auto border border-gray-200 rounded-md bg-white">
              {targetInterfaces.map((iface) => (
                <div
                  key={`${iface.id}-${iface.ip}`}
                  className="px-3 py-1.5 text-sm hover:bg-gray-50"
                >
                  {iface.id} - {iface.ip} - {iface.desc}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-500">12/41</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Campaign Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Campaign Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={campaign.name}
                onChange={(e) => setCampaign({ ...campaign, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sponsor Name</label>
              <input
                type="text"
                value={campaign.sponsorName}
                onChange={(e) => setCampaign({ ...campaign, sponsorName: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Offer Name</label>
              <input
                type="text"
                value={campaign.offerName}
                onChange={(e) => setCampaign({ ...campaign, offerName: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Test Emails</label>
              <textarea
                value={campaign.testEmails}
                onChange={(e) => setCampaign({ ...campaign, testEmails: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={3}
              />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Email Headers</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">From Line</label>
              <div className="flex mt-1">
                <input
                  type="text"
                  value={campaign.fromLine}
                  onChange={(e) => setCampaign({ ...campaign, fromLine: e.target.value })}
                  className="flex-1 rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700">
                  Action
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject Line</label>
              <div className="flex mt-1">
                <input
                  type="text"
                  value={campaign.subjectLine}
                  onChange={(e) => setCampaign({ ...campaign, subjectLine: e.target.value })}
                  className="flex-1 rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 p-6 bg-white rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">HTML Editor</h2>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Play className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-96 border rounded-md p-4">
              <textarea
                value={campaign.html}
                onChange={(e) => setCampaign({ ...campaign, html: e.target.value })}
                className="w-full h-full font-mono text-sm"
                placeholder="Enter HTML code here..."
              />
            </div>
            <div className="h-96 border rounded-md p-4 bg-gray-50">
              <div dangerouslySetInnerHTML={{ __html: campaign.html }} />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Send Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Sending Type</label>
              <select
                value={sendingType}
                onChange={(e) => setSendingType(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="QueueNone">Queue None</option>
                <option value="QueueAll">Queue All</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sending Speed</label>
              <div className="flex items-center mt-1">
                <input
                  type="number"
                  value={campaign.sendingSpeed}
                  onChange={(e) => setCampaign({ ...campaign, sendingSpeed: parseInt(e.target.value) })}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-500">/ minute</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Change Interval</label>
              <input
                type="number"
                value={campaign.changeInterval}
                onChange={(e) => setCampaign({ ...campaign, changeInterval: parseInt(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="col-span-2 p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Auto Reply</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                value={autoReplyStatus}
                onChange={(e) => setAutoReplyStatus(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="Enable">Enable</option>
                <option value="Disable">Disable</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}