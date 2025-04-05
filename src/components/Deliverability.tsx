import React, { useState } from 'react';
import { Server, RefreshCw, Plus, List, Eye } from 'lucide-react';

export default function Deliverability() {
  const [activeSection, setActiveSection] = useState('install');

  const servers = [
    { id: 'SV_201', ip: '193.180.209.75', status: 'Active' },
    { id: 'SV_202', ip: '193.180.209.76', status: 'Inactive' },
    { id: 'SV_243', ip: '104.153.210.77', status: 'Active' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Deliverability Management</h1>

      <div className="grid grid-cols-5 gap-4 mt-6">
        <button
          onClick={() => setActiveSection('install')}
          className={`p-4 text-center rounded-lg ${
            activeSection === 'install'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Server className="w-6 h-6 mx-auto mb-2" />
          Install Server
        </button>
        <button
          onClick={() => setActiveSection('reinstall')}
          className={`p-4 text-center rounded-lg ${
            activeSection === 'reinstall'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          <RefreshCw className="w-6 h-6 mx-auto mb-2" />
          Reinstall Server
        </button>
        <button
          onClick={() => setActiveSection('multi')}
          className={`p-4 text-center rounded-lg ${
            activeSection === 'multi'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Plus className="w-6 h-6 mx-auto mb-2" />
          Install Multi Server
        </button>
        <button
          onClick={() => setActiveSection('list')}
          className={`p-4 text-center rounded-lg ${
            activeSection === 'list'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          <List className="w-6 h-6 mx-auto mb-2" />
          Server List
        </button>
        <button
          onClick={() => setActiveSection('preview')}
          className={`p-4 text-center rounded-lg ${
            activeSection === 'preview'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Eye className="w-6 h-6 mx-auto mb-2" />
          PowerMTA Preview
        </button>
      </div>

      <div className="mt-6 bg-white rounded-lg shadow">
        {activeSection === 'list' && (
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Installed Servers</h2>
            <div className="mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Server ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">IP Address</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {servers.map((server) => (
                    <tr key={server.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{server.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{server.ip}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          server.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {server.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-900">Manage</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Other section content will be implemented similarly */}
      </div>
    </div>
  );
}